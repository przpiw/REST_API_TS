import {Express,Request,Response} from 'express'
import {createUserHandler,getCurrentUser} from "./controller/user.controller"
import validateResource from './middleware/validateResource'
import { createUserSchema } from './schema/user.schema'
import {createSessionSchema} from './schema/session.schema'
import {createUserSessionHandler,deleteSessionHandler,getUserSessionHandler} from "./controller/session.controller"
import requireUser from './middleware/requireUser'
import { createProductSchema,updateProductSchema,deleteProductSchema,getProductSchema } from './schema/product.schema'
import { createProductHandler,updateProductHandler,deleteProductHandler,getProductHandler } from './controller/product.controller'


function routes(app:Express){
  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get('/healthcheck',(req:Request,res:Response)=>res.sendStatus(200))
  /**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.post('/api/users',validateResource(createUserSchema), createUserHandler)


  
  app.post('/api/sessions',validateResource(createSessionSchema),createUserSessionHandler)

  // Return logged user
  app.get('/api/me',requireUser,getCurrentUser)

  app.get('/api/sessions',requireUser,getUserSessionHandler)
  app.delete('/api/sessions',requireUser,deleteSessionHandler)
  app.post(
    "/api/products",
    [requireUser, validateResource(createProductSchema)],
    createProductHandler
  );
  /**
   * @openapi
   * '/api/products/{productId}':
   *  put:
   *     tags:
   *     - Products
   *     summary: Edit a single product
   *     parameters:
   *      - name: productId
   *        in: path
   *        description: The id of the product
   *        required: true
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schema/Product'
   *           examples:
   *              Product:
   *                summary: Edit product
   *                value:
   *                  title: My Edited Product
   *                  description: product desc
   *                  price: 99.99
   *                  image: imageurl
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/Product'
   *       403:
   *         description: Not authorized
   *       404:
   *         description: Product not found
   *       
   */
  app.put(
    "/api/products/:productId",
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler
  );

  /**
   * @openapi
   * '/api/products/{productId}':
   *  get:
   *     tags:
   *     - Products
   *     summary: Get a single product by the productId
   *     parameters:
   *      - name: productId
   *        in: path
   *        description: The id of the product
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/Product'
   *       404:
   *         description: Product not found
   */
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
