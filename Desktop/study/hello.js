//1.先引入模块
let fs =require("fs");
let path =require("path");
let http =require("http");
//2.创建一个服务对象，并设置request请求监听函数
let server =http.createServer((req,res)=>{
    var url =req.url.toLowerCase();
    var method =req.method.toLowerCase();
    if(url == "/" ||url =="/index.html"){
        fs.readFile(path.join(__dirname,'index.html'),'utf8',function(err,data){
            if(err){ throw err}
            res.end(data);
        })
    }else if(url =="/login.html"){
        fs.readFile(path.join(__dirname,'login.html'),'utf8',function(err,data){
            if(err){ throw err}
            res.end(data);
        })
    }else if(url =="/resiger.html"){
        fs.readFile(path.join(__dirname,'resiger.html'),'utf8',function(err,data){
            if(err){ throw err}
            res.end(data);
        })
    }else{
        res.end("404 Not Found")
    }
});
//3.指定一个端口号，开启服务
server.listen(4000,function(){
    console.log("服务已启动，请访问http://127.0.0.1")
})