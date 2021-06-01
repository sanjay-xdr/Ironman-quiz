var readlineSync = require('readline-sync');

const chalk = require('chalk');



var userName = readlineSync.question('What\'s your name? ');

console.log('Welcome ',userName ,' lets play a quiz about Iron Man \n chose the Correct option' )
var score=0;
function quiz(question,answer){
  var userAns = readlineSync.question(question);
  
  if(userAns.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.black.bgGreen.bold('Correct'));
    score+=1
    
  }else{
    console.log(chalk.black.bgRed.bold('Wrong'))
  }

  console.log('current score' , score)
}


var questions=[{
  question:`What is the real name of Iron Man 
   a.Tony Stark
   b.Tony Kakkar
   c.Tony Ribbens \n`,
  answer:"a"
},{
  question:`What is the name of the iron man's first suit?
  a.Mark 1
  b.Mark 
  c.Mark 2 \n` ,
  answer:"a"
},{
  question:`Famous Dialogue 
  a.I Have Successfully Privatized World Peace
  b.I am Iron man
  c.Love you 3000\n`,
  answer:"b"
},{
  question:`Company Name 
  a.Strak Pvt. Limited
  b.Stark Industries
  c.Avengers\n`,
  answer:"b"
}]


for(var i=0;i<questions.length;i++){
  var currentQus=questions[i];
  quiz(currentQus.question,currentQus.answer)
}

console.log("you total score is",score)



var highscores =[{
  name:"sanjay",
  score:"2"
}]


for(var i=0;i<highscores.length;i++){
  var highscore=highscores[i];
console.log("Cureent highscore is", highscore.score ,"hold by",highscore.name)

if(score>highscore.score){
  console.log(chalk.black.bgCyan.bold("Congrats you have beaten the previous highscore"))
}
}




