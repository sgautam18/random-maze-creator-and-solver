function Cell(i,j){
  this.i=i;
  this.j=j;
	this.walls=[true,true,true,true];
	this.visited=false;
  this.solvisited=false;   //top right bottom left

	this.highlight=function(){
		var x=this.i*w;
    var y=this.j*w;

    noStroke();
    fill(100,152,244,30);
		rect(x,y,w,w);

	}



	this.checkNeighbors = function(){
		var neighbors=[];

		var top    = grid[index(i,j-1)];
		var right  = grid[index(i+1,j)];
		var bottom = grid[index(i,j+1)];
		var left   = grid[index(i-1,j)];

		if(top && !top.visited){
			neighbors.push(top);
		}
		if(right && !right.visited){
			neighbors.push(right);
		}
		if(bottom && !bottom.visited){
			neighbors.push(bottom);
		}
		if(left && !left.visited){
			neighbors.push(left);
		}

		if(neighbors.length>0){
			var r= floor(random(0,neighbors.length));
			return neighbors[r];
		}
		else{
			return undefined;
		}

	}


  this.show=function(){
    var x=this.i*w;
    var y=this.j*w;
    stroke(255);
    noFill();
		if(this.walls[0]){                     //top
		line(x,y,x+w,y);}
		if(this.walls[1]){                     //right
		line(x+w,y,x+w,y+w);}
		if(this.walls[2]){                     //bottom
		line(x+w,y+w,x,y+w);}
		if(this.walls[3]){                     //left
		line(x,y+w,x,y);}
		if(this.visited){
			noStroke();
			fill(255,0,255,30);
			rect(x,y,w,w);
		}
  }

  this.checkWalls=function(){
    var neighborwalls=[];


    var tp    = grid[index(i,j-1)];
		var rigt  = grid[index(i+1,j)];
		var botom = grid[index(i,j+1)];
		var lft   = grid[index(i-1,j)];


    if(lft && (!lft.solvisited) && this.walls[3]==false){
      neighborwalls.push(lft);

      }
    if(tp && (!tp.solvisited) && this.walls[0]==false){
        neighborwalls.push(tp);
      }

    if(botom && (!botom.solvisited) && this.walls[2]==false){
        neighborwalls.push(botom);
      }
    if(rigt && (!rigt.solvisited) && this.walls[1]==false){
        neighborwalls.push(rigt);
      }

      if(neighborwalls.length>0){
        var r=floor(random(0,neighborwalls.length));
        return neighborwalls[r];
       }
       else {
         return undefined;
       }


  }

this.check_stop=function(){
  if(this.i==grid[finish].i && this.j==grid[finish].j)
    {
       start=3;
     }

}


}
