class Rect{
  constructor(x,y,w,h){
       
    this.width = w;
    this.height = h;

  }
  display(){
    fill(51,40,20);
   rect(x,y,this.width,this.height);  
  }
}