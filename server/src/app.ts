import config from "config"
import connect from './utils/connect'
import logger from './utils/logger'
import createServer from "./utils/server"
import swaggerDocs from './utils/swagger';



const port = config.get<number>('port')
const host = config.get<string>('host')


const app = createServer();

app.listen(port,async()=>{
  logger.info(`Server running at http://${host}:${port}`)
  await connect()
  swaggerDocs(app,port)
})