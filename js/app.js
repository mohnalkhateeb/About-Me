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
alert('we wish nice mood to you '+ username)
let rightnum = 13
let num1 = parseInt(prompt('please, enter number between 0 and 20'))
for (let i=1;i<=3;i++)
{
    if (num1===rightnum){
        alert('Congratulations, you got the right answer')
        break
    }
    else if(num1 >= (rightnum-3) && num1 <= (rightnum+3)){
        alert('You are close to the correct answer, try again')
        num1 = parseInt(prompt('please, enter number between 0 and 20'))
    }
    else
    {
        alert('You are far from the correct answer, try again')
        num1 = parseInt(prompt('please, enter number between 0 and 20'))
    }
}
alert('the right answer is '+rightnum)
