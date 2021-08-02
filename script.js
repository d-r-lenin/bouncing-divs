
const sizeE =document.querySelector("#size");
const colorE =document.querySelector("#color");
const DDE = document.querySelector("#drop-down");
const DDOptions = document.querySelector("#options");

DDE.onclick = e =>{
    DDOptions.style.display = "block";
}

DDOptions.onclick = e =>{
    DDE.innerText = e.target.value;
    DDOptions.style.display = "none";
}

document.onclick = e =>{console.log(e.path.includes)
    if(!e.path.includes(DDE)){
        DDOptions.style.display = "none";
    }
}

function drop(){
    let ball = new BoBall(
        (color = colorE.value),
        (size = sizeE.value + DDE.innerText)
    );

    ball.ball.onclick = ()=>{
        ball.ball.remove();
        delete(ball);
    }
}







      //   ball2.callback = ()=>{
      //       let xy = ball1.getCenter();
      //       let b2xy =  ball2.getCenter();
      //       let b1xy =  xy;
      //       let centerDist = Math.sqrt(((b2xy.x - b1xy.x)**2) + ((b2xy.y - b1xy.y)**2));
      //       let r1 = ball1.ball.clientWidth/2;
      //       let r2 = ball2.ball.clientWidth/2;
      //       let dist = centerDist - (r1+r2);
      //       if(dist <= 0){
      //         console.log(dist + "touching");
      //         if(ball1.flagx){
      //           ball1.flagx = false;
      //         }else{
      //           ball1.flagx = true;
      //         }
      //         if(ball1.flagy){
      //           ball1.flexy =  false;
      //         }else{
      //           ball1.flagy = true;
      //         }
      //         if(ball2.flagx){
      //           ball2.flagx = false;
      //         }else{
      //           ball2.flagx = true;
      //         }
      //         if(ball2.flagy){
      //           ball2.flexy =  false;
      //         }else{
      //           ball2.flagy = true;
      //         }
      //       }
      //       btn.style.top = xy.y +"px" ;
      //       btn.style.left = xy.x + "px";
      //   }
      // },5000);