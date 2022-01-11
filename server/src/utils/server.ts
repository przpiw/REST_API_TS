import express from 'express'
import deserializeUser from '../middleware/deserializeUser';
import routes from '../routes'
import cors from 'cors'
import  config from 'config'
import cookieParser from 'cookie-parser';

function createServer(){
const app = express()

app.use(cors({
  origin:config.get('origin'),
  credentials:true
}))

app.use(cookieParser())
app.use(express.json())
app.use(deserializeUser)
app.use(express.urlencoded({extended:false}));
routes(app)
return app
}

export default createServer