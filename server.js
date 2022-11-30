const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) =>{

fs.readFile('./index.html',(error,data)=> {
if (req.url==="/")
    {
        res.end (data)
        
    }
    else{
        res.end('404')
    }
}
)

} 

)
server.listen(8888,() => {console.log('server is runing')})