import chalk from 'chalk';
import readlineSync from 'readline-sync';
console.log(chalk.blue("Lets play game of Do you know CHETANA PARMAR?"));
console.log(" ");
var score =0;
var questions =[{
  question :"1. What is her favourite food?",
  a:"a. Pizza",
  b:"b. Burger",
  c:"c. Pav Bhaji",
  ans:"a",
},
 {
  question :"2. What is her favourite color",
  a:"a. Black",
  b:"b. Pink",
  c:"c. Purple",
  ans:"c",
},
{question :"3. What kind of place she likes the most",
  a:"a. Beaches",
  b:"b. Mountains & Greenary",
  c:"c. She doesnt like to go anywhere",
  ans:"b",
},
{question :"4. What kind of chocolates she likes",
  a:"a. Dark chocolate",
  b:"b. Milk compond",
  c:"c. she doesnt eat chocolates at all",
  ans:"a",
},
 ]

function letsPlay(question,answer,optA,optB,optC){
  console.log(chalk.magentaBright.bold(question));
  console.log(chalk.italic(optA))
  console.log(chalk.italic(optB))
  console.log(chalk.italic(optC))
  var userAns = readlineSync.question(chalk.yellowBright("Enter your   answer (a/b/c):"));
  if(userAns.toUpperCase()==answer.toUpperCase()){
    console.log(chalk.greenBright("You have answered right!"));
    score=score+2;
  }
  else{
    console.log(chalk.red("Sorry! You have answered wrong!"));
    score=score-1;
  }
}

for(var i=0;i<questions.length;i++){
  letsPlay(questions[i].question,questions[i].ans,questions[i].a,questions[i].b,questions[i].c);
  console.log(" ");
}

console.log("Your total score is: "+score+"/8");



                