import express from 'express'
import cors from 'cors'
import { positonListMock, positonMock, articleMock } from './mocks.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//READ Request Handlers
app.get("/", (req, res) => {
  res.send("Welcome to Edurekas REST API with Node.js Tutorial!!");
})

app.get("/api/position/list", (req, res) => {
  res.send(positonListMock);
})

app.get("/api/position/detail/:id", (req, res) => {
  res.send(positonMock)
})

app.get("/api/article/detail/:id", (req, res) => {
  res.send(articleMock)
})

app.post("/api/registration", (req, res) => {
  const body = req.body
  console.log({ body })
  res.send({success: true});
})

//PORT ENVIRONMENT VARIABLE
const port = 8090
app.listen(port, () => console.log(`Listening on port ${port}..`));
