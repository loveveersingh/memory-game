var a= [1,2,3,4,5,6,1,2,3,4,5,6]
    .map(p => [p,Math.random()])
    .sort((a,b)=>a[1]-b[1])
    .map(p => p[0])
  console.log(a);  
var pics = document.getElementsByTagName('img');
var eltscore=document.querySelector('#score')
var score=0;


var timer=null;
for (let i = 0; i < pics.length; i++) {
    pics[i].src2='images/spr'+a[i]+'.png'
   
    }
 var step = 1;
 var p1,p2;

 document.addEventListener('click',function(e){
          switch (step) {
            case 1:
              if (e.target.tagName=='IMG') {
                  e.target.src=e.target.src2;
                  p1=e.target
                  step=2                
              }  
              break;
             case 2:
               if (e.target.tagName=='IMG') {
                   e.target.src=e.target.src2;
                   p2=e.target;
                   step = 3;
               }
               timer= setTimeout(check,1200);
               break;
             case 3:
               clearTimeout(timer);
                check();
              break;
          }

 });
 function check(){
  if (p1.src2==p2.src2){
    p1.replaceWith(document.createElement('span'))
    p2.replaceWith(document.createElement('span'))
    score += 50;  
    console.log(score)              
}else{
 p1.src=p2.src='images/ques.png';
 score=Math.max(0,score-30);
}
eltscore.textContent= score;
 step=1
 if (document.getElementsByTagName('img').length==0) {
     eltscore.textContent=score+' yeh';
 }
 }