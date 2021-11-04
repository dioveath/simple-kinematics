var FKSystem = FKSystem || {

  x: 0,
  y: 0,
  arms: null,
  lastArm: null,
  phase: 0,
  speed: 0.05,


  create: function(x, y){
    var obj = Object.create(this);
    obj.init(x, y);
    return obj;
  },

  init: function(x, y){
    this.x = x;
    this.y = y;
    this.arms = [];
    this.lastArm = null;
  },

  addArm: function(length, centerAngle, rotationRange){
    var m_arm = arm.create(length, centerAngle, rotationRange);
    m_arm.parent = this.lastArm;
    this.arms.push(m_arm);
    this.lastArm = m_arm;
    this.update();
  },

  update: function(){
    for(var i = 0; i < this.arms.length; i++){
      this.arms[i].setPhase(this.phase);
      if(this.arms[i].parent != null){
        this.arms[i].x = this.arms[i].parent.getEndX();
        this.arms[i].y = this.arms[i].parent.getEndY();
      } else {
        this.arms[i].x = this.x;
        this.arms[i].y = this.y;
      }
    }
    this.phase += this.speed;
  },

  render: function(context){
    for(var i = 0; i < this.arms.length; i++){
      this.arms[i].render(context);
    }
  },

  rotateArm: function(index, angle){
    this.arms[index].angle = angle;
  }


};
