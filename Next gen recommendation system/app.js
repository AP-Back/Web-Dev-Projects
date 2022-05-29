const express = require('express');


// express app
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));
app.use( express.static( "public" ) ); 


let cur_mood = "";
let username="";
let user_score="";

app.get('/', (req, res) => {
  res.render('index', { title: 'Home',cur_mood,username,user_score});
});


app.post('/', function(req, res){     

  res.sendFile(__dirname + '/views/new.ejs');
  var info= req.body;
  io.emit('messageFromServer', info);
  console.log(info);

  cur_mood=info['current_mood']
  username=info['user_name']
  user_score=info['score']

  //checking
  console.log(username)
  console.log(cur_mood) 
  console.log(user_score)
  res.render('index',{ title: 'Home',cur_mood,username,user_score})

});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
