const http =  require("http")


const server = http.createServer((req,res)=>{

    if(req.url == "/"){
        
        res.end("Hello from the others sides");
    }else if(req.url == "/about"){
        res.writeHead(200)
        res.write("Hello from about us ");
        res.end("it is about page");
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1> 404 error pages. page doesn't exit </h1>")
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listing to the port no 8000");
})