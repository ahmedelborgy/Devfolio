let btn=document.querySelector('.btn');
let h=document.querySelector('h2');
let content=h.innerHTML;
let cont=content;
let xx=0;

function loop(){

   if(xx%2==0){
      
      cont="Hello Route Tech";
   }else{
      cont="I am Front End Develoer"; 
     
   }
}


function start(cont){
   console.log(cont)
   content=cont;
   let c=0;
   let sum='';
   let x=setInterval(function(){
   sum+=content[c];
   if(content[c]==undefined){
      clearInterval(x);
      end();
      }
if(content[c]!=undefined)
    h.innerHTML=sum;
      c++;
   },100);
}
start(cont);

function end(){
  
   xx++;
   loop();
   console.log(xx);
   console.log(cont);
   let e=setInterval(function(){
    if(h.innerHTML!=''){  
      content= content.slice(0,content.length-1);
      h.innerHTML=content;
     }
    else{
      clearInterval(e)
start(cont)
     }
  },100);
}




// ===========================================================================


