const express = require ('express')
const app = express();
var users = [{
    name : 'nimit',
    kidneys :[{
            healthy : false
    },{
        healthy :  true
    }]
    
}];
app.use(express.json());

app.get("/", function(req,res){
    const nimitkidneys = users [0].kidneys;
    const noofkidneys= nimitkidneys.length;
  let noofhealthykidneys =0 ;
  for (let i =0 ; i<nimitkidneys.length; i++){
    if ( nimitkidneys[i].healthy){
        noofhealthykidneys = noofhealthykidneys +1;

  }
}

    const noofunhealthykidneys = noofkidneys - noofhealthykidneys;
    res.json ({
      noofkidneys,
      noofhealthykidneys,
      noofunhealthykidneys,


    })

    console.log(nimitkidneys);

})
app.post("/", function(req,res){
    const n = req.query.n
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
      healthy : ishealthy
    })
    res.json({
      msg : "Done !"
    })
    })


app.put("/", function(req,res){

      for  ( let i=0 ; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true ;
      }
      res.json({

      });
})
app.delete("/", function(req,res){

    const newkidneys =[];
    for  ( let i=0 ; i<users[0].kidneys.length; i++){
      if  ( users[0].kidneys[i].healthy){
        newkidneys.push({
          healthy : true 
        })
      }

    }
    users[0].kidneys = newkidneys;
    res.json({ 
      msg : " done !" 
    })

})

app.listen(3000);


