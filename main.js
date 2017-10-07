window.onload = function(){

  var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  dCanvas = document.getElementById("dCanvas"),
  dContext = dCanvas.getContext("2d"),
  width = canvas.width = dCanvas.width = window.innerWidth,
  height = canvas.height = dCanvas.height = window.innerHeight;

  var m_fksystem = FKSystem.create(width/2, height/2);

  m_fksystem.addArm(100, 0);
  m_fksystem.addArm(150, 1.2);
  m_fksystem.addArm(90, 0.6);

  var baseAngle = 0;

  dContext.lineWidth = 0.25;

  update();

  function update(){
    context.clearRect(0, 0, width, height);

    dContext.beginPath();
    dContext.moveTo(m_fksystem.lastArm.getEndX(), m_fksystem.lastArm.getEndY());

    m_fksystem.setPhase(baseAngle * .12, 0);
    m_fksystem.setPhase(baseAngle * .23, 1);
    m_fksystem.setPhase(baseAngle* .6, 2);

    m_fksystem.update();

    baseAngle += 0.1;

    m_fksystem.render(context);
    dContext.lineTo(m_fksystem.lastArm.getEndX(), m_fksystem.lastArm.getEndY());
    dContext.stroke();
    requestAnimationFrame(update);
  }

};
