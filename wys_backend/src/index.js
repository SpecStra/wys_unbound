const Koa = require("koa")
const Router = require("koa-router")
const api = require("./api")
const bodyParser = require("koa-bodyparser")
//import Koa from "koa"

const app = new Koa()
const router = new Router()

const PORT = 4500

router.use("/api", api.routes())

app.use(bodyParser())

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => {
    console.log("✔ Listening server on http://localhost:4500/")
})