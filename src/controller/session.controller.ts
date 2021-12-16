import {Request,Response} from "express"
import config from 'config'
import { validatePassword } from "../service/user.service";
import { createSession, findSessions, updateSession } from "../service/session.service";
import { signJwt } from "../utils/jwt.utils";
import { JwtKeyType } from "../types/jwtKeyType";
export async function createUserSessionHandler(req:Request,res:Response) {
  
  //Validate the user password
  const user = await validatePassword(req.body)

  if(!user){
    return res.status(401).send("Invalid email or password")
  }
  
  //create a session1
  const session = await createSession(user._id,req.get("user-agent")||"")

  const accessToken = signJwt(
    { ...user, session: session._id },
    "accessTokenPrivateKey",
    { expiresIn: config.get("accessTokenTtl") } // 15 minutes,
  );

  // create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    "refreshTokenPrivateKey" as JwtKeyType,
    { expiresIn: config.get("refreshTokenTtl") } // 15 minutes
  );

  // return access & refresh token
  return res.send({accessToken,refreshToken})
}

export async function getUserSessionHandler(req:Request,res:Response){
  const userId = res.locals.user._id;

  const sessions = await findSessions({user:userId,valid:true})

  return res.send(sessions)
}

export async function deleteSessionHandler(req:Request,res:Response){
  const sessionId = res.locals.user.session
  // vaild:false prevents from session being used again
  await updateSession({_id:sessionId},{valid:false})
  return res.send({
    accessToken:null,
    refreshToken:null
  })
}