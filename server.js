import http from 'http';
const PORT = process.env.PORT;
const server= http.createServer((req,res)=>{
// res.setHeader('Content-Type','Text/HTML');
// res.write('<h1>Hello World</h1>')
// res.statusCode=200;
// res.end('<h1>Hello World</h1>')

console.log(req.url)
console.log(req.method)
res.writeHead(200,{
    'Content-Type':'Text/HTML'
})
res.end('<h1>Hello World</h1>')
}
)



server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
// import express from 'express'; // import the express framework
// import fs from 'fs'; // import file system object

// var app = express();
// // Endpoint to Get a list of users
// app.get('/getUsers', function(req, res){
//     fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err, data){
//         console.log(data);
//         res.end(data); // you can also use res.send()
//     });
// })

// // Create a server to listen at port 8080
// app.listen(8080, function(){
//     console.log("REST API demo app listening at http://%s:%s", "localhost", 8080)
// })