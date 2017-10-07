var FKSystem = FKSystem || {

  x: 0,
  y: 0,
  arms: null,
  lastArm: null,


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

  addArm: function(length, angle){
    var m_arm;
    if(this.lastArm == null){
      m_arm = arm.create(this.x, this.y, length, angle);
      this.arms.push(m_arm);
    } else {
      m_arm = arm.create(this.lastArm.getEndX(), this.lastArm.getEndY(), length, angle);
      this.arms.push(m_arm);
    }
    m_arm.parent = this.lastArm;
    this.lastArm = m_arm;
  },

  update: function(){
    for(var i = 0; i < this.arms.length; i++){
      if(this.arms[i].parent != null){
        this.arms[i].x = this.arms[i].parent.getEndX();
        this.arms[i].y = this.arms[i].parent.getEndY();
      }
    }
  },

  render: function(context){
    for(var i = 0; i < this.arms.length; i++){
      this.arms[i].render(context);
    }
  },

  setPhase: function(phase, index){
    this.arms[index].angle = phase;
  }


};
