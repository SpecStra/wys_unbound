const Router = require("koa-router")
const posts = new Router()
const {postWrite, postView, postRead, postDelete, postConfig, postUpdate} = require( "./postController" );

const printInfo = ctx => {
    ctx.body = {
        method : ctx.method,
        path : ctx.path,
        params : ctx.params
    }
}

posts.get("/", postView)
posts.post("/", postWrite)
posts.get("/:id", postRead)
posts.delete("/:id", postDelete)
posts.put("/:id", postConfig)
posts.patch("/:id", postUpdate)

module.exports = posts