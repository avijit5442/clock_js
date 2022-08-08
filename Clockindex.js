 
setInterval(()=>
{
 var date=new Date();
 var hour=date.getHours();
 var minute=date.getMinutes();
 var second=date.getSeconds();
 
 text_to_speech=()=>{
    let speech=new SpeechSynthesisUtterance();
     speech.text=`${hour}hours ${minute}minutes and ${second}seconds `
     speech.lang="hi"
     window.speechSynthesis.speak(speech)
}

 if(hour>=6 && hour<=10){
    document.querySelector(".messagearea").innerHTML=`Good Morning`;
    document.querySelector("html").style.backgroundColor="aliceblue"
}
if(hour>=10 && hour<=12){
    document.querySelector(".messagearea").innerHTML=`Good Noon`;
    document.querySelector("html").style.backgroundColor="orange"
}
if(hour>=13 && hour<=17){
    document.querySelector(".messagearea").innerHTML=`Good Afternoon`;
    document.querySelector("html").style.backgroundColor="red"
}
if(hour>=17 && hour<=20){
    document.querySelector(".messagearea").innerHTML=`Good Evening`;
    document.querySelector("html").style.backgroundColor="#042743"
}
if(hour>=20 && hour<=24){
    document.querySelector(".messagearea").innerHTML=`Good Night`;
    document.querySelector("html").style.backgroundColor="#262424q"
}

if(hour>=12 && minute >=0 && second >=1)
     {document.querySelector(".t").innerHTML=`PM`}
else{
    {document.querySelector(".t").innerHTML=`PM`}
}



if(hour>12){
    hour-=12;
}



if(hour<10){
    hour=`0`+hour;
}

if(minute<10){
    minute=`0`+minute;
}

if(second<10){
    second=`0`+second
}

document.querySelector(".timearea").innerHTML=`${hour} : ${minute} : ${second}`
},
1000

)

//console.log(hour) will not as var is declared inside a function scope 
