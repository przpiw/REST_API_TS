import {Express,Request,Response} from 'express'
import {createUserHandler} from "./controller/user.controller"
import validateResource from './middleware/validateResource'
import { createUserSchema } from './schema/user.schema'
import {createSessionSchema} from './schema/session.schema'
import {createUserSessionHandler,deleteSessionHandler,getUserSessionHandler} from "./controller/session.controller"
import requireUser from './middleware/requireUser'
import { createProductSchema,updateProductSchema,deleteProductSchema,getProductSchema } from './schema/product.schema'
import { createProductHandler,updateProductHandler,deleteProductHandler,getProductHandler } from './controller/product.controller'

function routes(app:Express){
  app.get('/healthcheck',(req:Request,res:Response)=>res.sendStatus(200))
  app.post('/api/users',validateResource(createUserSchema), createUserHandler)
  app.post('/api/sessions',validateResource(createSessionSchema),createUserSessionHandler)
  app.get('/api/sessions',requireUser,getUserSessionHandler)
  app.delete('/api/sessions',requireUser,deleteSessionHandler)
  app.post(
    "/api/products",
    [requireUser, validateResource(createProductSchema)],
    createProductHandler
  );

  app.put(
    "/api/products/:productId",
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler
  );

  app.get(
    "/api/products/:productId",
    validateResource(getProductSchema),
    getProductHandler
  );

  app.delete(
    "/api/products/:productId",
    [requireUser, validateResource(deleteProductSchema)],
    deleteProductHandler
  );
}


export default routes;
