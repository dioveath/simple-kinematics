window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  dCanvas = document.getElementById("dCanvas"),
  dContext = dCanvas.getContext("2d"),
  width = canvas.width = dCanvas.width = window.innerWidth,
  height = canvas.height = dCanvas.height = window.innerHeight;

  var m_fksystem = FKSystem.create(width/2, height/2);
  var m_fksystem_2 = FKSystem.create(width/2, height/2);
  m_fksystem_2.phase = Math.PI;

  m_fksystem.addArm(100, 70/180 * Math.PI , Math.PI / 8);
  m_fksystem.addArm(120, 80/180 * Math.PI, 80/180 * Math.PI);
  m_fksystem_2.addArm(100, 70/180 * Math.PI , Math.PI / 8);
  m_fksystem_2.addArm(120, 80/180 * Math.PI, 80/180 * Math.PI);

  var baseAngle = 0;

  dContext.lineWidth = 0.25;

  update();

  function update(){
    context.clearRect(0, 0, width, height);

    m_fksystem.update();
    m_fksystem_2.update();

    m_fksystem.render(context);
    m_fksystem_2.render(context);
    requestAnimationFrame(update);
  }

};
