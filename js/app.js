'use strict'
let username = prompt('what is your name?')
alert('Hello '+ username);

let mood= prompt('are you in good mood? yes or no').toLowerCase()
switch(mood)
{
    case "yes":
    alert('this is good. enjoy')
    break;
    case "no":
        alert('give us chance to improve your mood')
    break;
    default :
    alert('please make sure your answer yes or no')
    mood=prompt('are you in good mood? yes or no').toLowerCase()
    break;

    
}


function Q1();

let sea = prompt('do you like sea ? yes or no').toLowerCase()
switch(sea)
{
    case "yes":
    alert('this is good. enjoy with sea')
    document.write('<img src="img/sea.jpg" alt="sea">')
    break;
    case "no":
        alert('try change your mood with sea')
        document.write('<img src="img/sea.jpg" alt="sea">')
    break;
    default :
    alert('please make sure your answer yes or no')
    document.write('<img src="img/sea.jpg" alt="sea">')
    sea =prompt('do you like sea ? yes or no').toLowerCase()
    break;

    
}
Q1();

function Q2();

let forest = prompt('do you like forest ? yes or no').toLowerCase()
switch(forest)
{
    case "yes":
    alert('this is good. enjoy with forest')
    document.write('<img src="img/forest.jpg" alt="forest">')
    break;
    case "no":
        alert('try change your mood with sea')
        document.write('<img src="img/forest.jpg" alt="forest">')
    break;
    default :
    alert('please make sure your answer yes or no')
    document.write('<img src="img/forest.jpg" alt="forest">')
    forest =prompt('do you like forest ? yes or no').toLowerCase()
    break;

    
}

Q2();


function Q3();


let desert = prompt('do you like dessert ? yes or no').toLowerCase()
switch(desert)
{
    case "yes":
    alert('this is good. enjoy with desert')
    document.write('<img src="img/desert.jpg" alt="desert">')
    break;
    case "no":
        alert('try change your mood with sea')
        document.write('<img src="img/desert.jpg" alt="desert">')
    break;
    default :
    alert('please make sure your answer yes or no')
    desert =prompt('do you like desert ? yes or no').toLowerCase()
    document.write('<img src="img/desert.jpg" alt="desert">')
    break;

    
}

Q3();


function Q4();


let Mountain = prompt('do you like Mountain ? yes or no').toLowerCase()
switch(Mountain)
{
    case "yes":
    alert('this is good. enjoy with Mountain')
    document.write('<img src="img/mountain.jpg" alt="Mountain">')
    break;
    case "no":
        alert('try change your mood with sea')
        document.write('<img src="img/mountain.jpg" alt="Mountain">')
    break;
    default :
    alert('please make sure your answer yes or no')
    document.write('<img src="img/mountain.jpg" alt="Mountain">')
    Mountain =prompt('do you like Mountain ? yes or no').toLowerCase()
    break;

    
}

Q4();

function Q5();


let snow = prompt('do you like snow ? yes or no').toLowerCase()
switch(snow)
{
    case "yes":
    alert('this is good. enjoy with snow')
    document.write('<img src="img/snow.jpg" alt="snow">')
    break;
    case "no":
        alert('try change your mood with snow')
        document.write('<img src="img/snow.jpg" alt="snow">')
    break;
    default :
    alert('please make sure your answer yes or no')
    document.write('<img src="img/snow.jpg" alt="snow">')
    snow =prompt('do you like snow ? yes or no').toLowerCase()
    break;

    
}

Q5();

function Q6();

let food = prompt('are you hungry ? yes or no').toLowerCase()
switch(food)
{
    case "yes":
    alert('ohhh sorry , enjoy with food')
    document.write('<img src="img/food.jpg" alt="food">')
    break;
    case "no":
        alert('try change your mood with food')
        document.write('<img src="img/food.jpg" alt="food">')
    break;
    default :
    alert('please make sure your answer yes or no')
    document.write('<img src="img/food.jpg" alt="food">')
    food=prompt('are you hungry ? yes or no').toLowerCase()
    break;

    
}

Q6()


function Q7();

alert('we wish nice mood to you '+ username)
let rightnum = 13
let num1 = parseInt(prompt('please, enter number between 0 and 20'))
let corrnum=0;
let count1=5;
for (let i=1;i<=3;i++)
{
    if (num1===rightnum){
        alert('Congratulations, you got the right answer')
        console.log('Congratulations, you got the right answer')
        count1= count1+i;
        corrnum=num1;
        break
    }
    else if(num1 >= (rightnum-3) && num1 <= (rightnum+3)){
        alert('You are close to the correct answer, try again')
        console.log('You are close to the correct answer, try again')
        num1 = parseInt(prompt('please, enter number between 0 and 20'))
    }
    else
    {
        alert('You are far from the correct answer, try again')
        console.log('You are close to the correct answer, try again')
        num1 = parseInt(prompt('please, enter number between 0 and 20'))
    }
}
if ( corrnum === 0){alert('sorry, the right answer is '+rightnum)}

alert('no problem, now we will give you a chance and there will be four correct answer and you may hit one of them')
let rightnums = [11,17,23,36,8,31]
let count2 =0 
let flag = 0
let num2 
for (let k=1;k<=6;k++){
    if (flag === 1){break}
    else{num2=parseInt(prompt('please, enter number between 0 and 40'))}

 
for (let j = 0; j < rightnums.length; j++) {
    if (num2 === rightnums[j]) {
        console.log('yes ,you have correct one ')
        alert('Congratulations, you got the right answer')
        count1=count1+1
        flag=1
        break

    }
    else{count2 = j}
}

}
if (count2 >=(rightnums.length-1)) {
    console.log('sorry it is not one of them')
    alert(alert('sorry, the right answer is one of them '+rightnums))
}
alert('your score is ' + count1 +'"\"7')

Q7(); 
