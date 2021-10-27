const posts = [
    {
        id : 1,
        title : "Default Title",
        body : "default content"
    }
]

// write a post
export const postWrite = (ctx) => {
    const { title, body } = ctx.request.body
    const post = {
        id : posts[posts.length - 1].id + 1,
        title : title,
        body : body
    }
    posts.push(post)
    ctx.body = posts
}

// view posts
export const postView = (ctx) => {
    ctx.body = posts
}

// show post
export const postRead = (ctx) => {
    const {id} = ctx.params
    const post = posts.find(p => p.id.toString() === id)
    if(!post){
        ctx.status = 404
        ctx.body = {
            message : "That post doesn't exist"
        }
        return
    }
    ctx.body = post
}

// delete post
export const postDelete = (ctx) => {
    const {id} = ctx.params
    const index = posts.findIndex(p => p.id.toString() === id)
    if( index === -1 ){
        ctx.status = 404
        ctx.body = {
            message : "That post doesn't exist"
        }
        return
    }
    posts.splice(index, 1)
    ctx.status = 204
}

export const postConfig = (ctx) => {
    const {id} = ctx.params
    const index = posts.findIndex(p => p.id.toString() === id)
    if( index === -1 ){
        ctx.status = 404
        ctx.body = {
            message : "That post doesn't exist"
        }
        return
    }
    posts[index] = {
        id,
        ...ctx.request.body,
    }
    ctx.body = posts[index]
}

export const postUpdate = (ctx) => {
    const {id} = ctx.params
    const index = posts.findIndex(p => p.id.toString() === id)
    if( index === -1 ){
        ctx.status = 404
        ctx.body = {
            message : "That post doesn't exist"
        }
        return
    }
    posts[index] = {
        ...posts[index],
        ...ctx.request.body,
    }
    ctx.body = posts[index]
}