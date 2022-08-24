const hourEle=document.getElementById("hour");
const minEle=document.getElementById("minutes");
const secEle=document.getElementById("seconds");
const ampmEle=document.getElementById("ampm");
const dayEle=document.getElementById("day");
const monEle=document.getElementById("month");
const yearEle=document.getElementById("year");
function clock(){
    let a=new Date().getHours();
    let b=new Date().getMinutes();
    let c=new Date().getSeconds();
    let d="AM";
    let e=new Date().getDate();
    let f=new Date().getMonth();
    let g=new Date().getFullYear();
    if(a>12){
        a=a-12;
        d="PM";
    }
    const months = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
    ];
    a=a<10 ? "0"+a:a;
    b=b<10 ? "0"+b:b;
    c=c<10 ? "0"+c:c;
    e=e<10 ? "0"+e:e;

    hourEle.innerText=a;
    minEle.innerText=b;
    secEle.innerText=c;
    ampmEle.innerText=d;
    dayEle.innerText=e;
    monEle.innerText=months[f].substring(0,3);
    yearEle.innerText=g;
    setTimeout(()=>{
    clock();
    },1000);
}
clock();