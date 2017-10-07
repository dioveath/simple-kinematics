var arm = arm || {

  x: 0,
  y: 0,
  length: 100,
  angle: 0,
  parent: null,

  create: function(x, y, length, angle){
    var obj = Object.create(this);
    obj.x = x;
    obj.y = y;
    obj.length = length;
    obj.angle = angle;
    return obj;
  },

  getEndX: function(){
    var angle = this.angle,
        parent = this.parent;
    while(parent){
      angle += parent.angle;
      parent = parent.parent;
    }
    return this.x + Math.cos(angle) * this.length;
  },

  getEndY: function(){
    var angle = this.angle,
        parent = this.parent;
    while(parent){
      angle += parent.angle;
      parent = parent.parent;
    }
    return this.y + Math.sin(angle) * this.length;
  },

  render: function(context){
    context.beginPath();
    context.fillStyle = "#000";
    context.lineWidth = 5;
    context.moveTo(this.x, this.y);
    context.lineTo( this.getEndX(), this.getEndY());
    context.stroke();
  }

};
