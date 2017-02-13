//adding some cool  image selector  on javascript
 
var myImage=document.querySelector('img');
var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

//set user name function 
function setUserName()
{
    var myName=prompt('Please Enter Your Name.');
    localStorage.setItem('name',myName);
    myHeading.textContent='atia Welcome ,'+myName;
}

//handel localStorage 
if(!localStorage.getItem('name')){
     setUserName();
}else{
    var mystoreditem=localStorage.getItem('name');
    myHeading.textContent='Hello ',mystoreditem;
    
}
//fire evnet onclick on button on page
myButton.onclick=function()
{
    setUserName();
}


//image changer for browser
 myImage.onclick=function()
 {
var mySrc=myImage.getAttribute('src');
if(mySrc==='images/firefox.png')
   myImage.setAttribute('src','images/chrome.png');
else
    myImage.setAttribute('src','images/firefox.png');   
 }