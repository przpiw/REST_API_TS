
import {get} from 'lodash'
import { FilterQuery } from "mongoose";
import Session, { SessionDocument } from "../models/session.model"
import { verifyJwt,signJwt } from "../utils/jwt.utils";
import { UpdateQuery } from "mongoose";
import config from 'config'
export async function createSession(userId:any, userAgent:string){
  const session = await Session.create({user:userId,userAgent})
  return session.toJSON();
}
import { findUser } from './user.service';
import { JwtKeyType } from '../types/jwtKeyType';

export async function findSessions(query:FilterQuery<SessionDocument>){
  return Session.find(query).lean();
}


export async function updateSession(
  query: FilterQuery<SessionDocument>,
  update: UpdateQuery<SessionDocument>
) {
  return Session.updateOne(query, update);
}


export async function reIssueAccessToken({
  refreshToken,
}: {
  refreshToken: string;
}) {
  const { decoded } = verifyJwt(refreshToken, "refreshTokenPublicKey" as JwtKeyType);

  if (!decoded || !get(decoded, "session")) return false;

  const session = await Session.findById(get(decoded, "session"));

  if (!session || !session.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = signJwt(
    { ...user, session: session._id },
    "accessTokenPrivateKey",
    { expiresIn: config.get("accessTokenTtl") } // 15 minutes
  );

  return accessToken;
}