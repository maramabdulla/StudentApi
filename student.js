
let express = require('express');
let app = express();
let port = 3000;
let pagesize=5;
 let students= [];
let contant='infromation.json';
let fs = require('fs');
fs.readFile(contant, 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        students =JSON.parse(data);
    }
})
app.get("/students", (req, res) =>{
    let page1=req.query.page;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
  start=(page1-1)*pagesize;
  end=start+ pagesize;
  res.send(students.slice(start,end));
  });
  app.get("/students/:id", (req, res) =>{
    let id1=req.params.id;
    let r=students.find(x => x.id== id1);
    console.log(r);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
 
  res.send(r);
  });
  app.listen(3000);