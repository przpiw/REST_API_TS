import {Request,Response} from 'express'
import { CreateUserInput } from '../schema/user.schema'
import { createUser } from '../service/user.service'
import logger from "../utils/logger"
import {omit} from 'lodash'

export async function createUserHandler(req:Request<{},{},CreateUserInput["body"]>,res: Response){
  try{
    const user = await createUser(req.body)
    return res.send(user);
  }catch(e:any){
   logger.error(e)
   return res.status(409).send(e.message)
  }
}

export async function getCurrentUser(req: Request, res: Response) {
  return res.send(omit(res.locals.user,'password'));
}