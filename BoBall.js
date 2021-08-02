class BoBall {
    constructor(color="red", size = "10vh", interval = 50, callback , args = []){
        this.flagx = true;
        this.flagy = true;
        this.ball = document.createElement('div');
        this.body = document.querySelector("body")
        this.style = this.ball.style;
        this.size = size;
        this.color = color;
        this.intValue = interval;
        this.args = args;
        this.callback = callback;
        this.setDif(10,10);
        this.config();
        this.start();
    }

    start = ()=>{
        this.intId = setInterval(()=>{
            if(this.callback){
                this.callback(...this.args);
            }
            this.run();
    
        },this.intValue);
    }
    stop = ()=>{
        clearInterval(this.intId);
    }
    setSize = size=>{
        this.size = size;
        this.ball.style.height = this.size;
        this.ball.style.width = this.size;
    }
    setColor = color  =>{
        this.color = color;
        this.ball.style.backgroundColor = this.color;
    }
    setDif = (x,y)=>{
        this.difx = x ;
        this.dify = y ;
    }
    setIntervalValue = value =>{
        this.intValue = value;
        this.stop();
        this.start();
    }
    config = ()=>{
        this.confogBall();
        this.addElements();
    }

    confogBall = ()=>{
        this.setSize(this.size);
        this.setColor(this.color);
        this.ball.style.borderRadius = "50%";
        this.ball.style.position = "fixed"; 
        this.ball.style.top = "0px";
        this.ball.style.left = "0px";
        this.ball.style.transition = ".1s";
        this.ball.style.outline = "none";
    }

    addElements = ()=>{
        this.body.prepend(this.ball);
    }

    getCenter = ()=>{
        let rect = this.ball.getClientRects()[0];
        return { 
            x : rect.x + (rect.width/2),
            y : rect.y + (rect.height/2)
        }
    }

    run = ()=>{
        this.top = Number(this.ball.style.top.slice(0,-2));
        this.left = Number(this.ball.style.left.slice(0,-2));
    
        if(this.flagx){
            this.left = this.left + this.difx;
        }else{
            this.left = this.left - this.difx;
        }
        if(this.flagy){
            this.top = this.top + this.dify;
        }else{
            this.top = this.top - this.dify;
        }
    
        this.ball.style.left = `${this.left}px`;
        this.ball.style.top = `${this.top}px`;
    
        if(this.left+this.ball.clientWidth > this.body.clientWidth){
            this.flagx = false;
        }else if(this.left < 0){
            this.flagx = true;
        }
    
        if(this.top+this.ball.clientHeight > this.body.clientHeight){
            this.flagy = false;
        }else if(this.top < 0){
            this.flagy = true;
        }       
    }

}


