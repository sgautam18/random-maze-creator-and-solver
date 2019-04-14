
let ball1;
let ball2;


	class ball
	{
			constructor(x){
				this.pox=x;
				this.poy=x;
				this.vx=5;
				this.vy=5;
				}


				Naya()
				{
					fill(random(0,255),random(0,255),random(0,255));
					ellipse(this.pox,this.poy,30,30);
				}


			start(){
				if(this.pox>=1800 || this.pox<=0)
				{	this.vx*=(-1);
					this.pox+=this.vx;
					this.poy+=this.vy;
				}
				else if(this.poy>=600 || this.poy<=0)
				{
					this.vy*=(-1);
					this.pox+=this.vx;
					this.poy+=this.vy;

				}
				else{
					this.pox+=this.vx;
					this.poy+=this.vy;
				}

			}


	}


function setup() {
	createCanvas(1800,600);

	// pox=random(0,1800);
	// poy=random(0,600);

}

function draw() {

  background(0,0,0);
	ball1=new ball(5);
	ball2=new ball(10);

	ball1.Naya();
  ball2.Naya();
	ball1.start();
	ball2.start();

}
