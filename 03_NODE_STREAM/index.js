const express=  require("express")
const app = express();
const PORT = 8000
const fs = require("fs");
const ziblb = require("zlib");

// const status = require("@types/express-status-monitor")

// app.use(status());
fs.createReadStream('./sample.txt','utf-8').pipe(ziblb.createGzip()).pipe(fs.createWriteStream('./sample.zip'));
app.get('/',(req,res)=>{
    const stream = fs. createReadStream('./sample.txt','utf-8');
    stream.on('data',(chunk)=>{
        console.log(chunk);
        res.write(chunk);
    })  
    stream.on('end',()=>{
        res.end();
    })    
})

app.listen(PORT,()=>console.log(`server is connected to the port ,${PORT}`))