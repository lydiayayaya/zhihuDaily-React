const express = require('express')

const app = express()

const request = require('superagent')

app.get('/zhihulist',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    /*api*/
    request.get("http://news-at.zhihu.com/api/4/news/latest").set('Accept', 'application/json').then(resp=>{
        res.send(resp.body)
    })
})

app.get('/imageforward',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    request.get(req.query.url).pipe(res)
})

/*app.get('/hello',(req,res)=>{
    res.send("world")
})*/

app.listen(9900)