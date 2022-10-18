function changeTheme(themeObj) {
  debugger
  const vars = Object.keys(themeObj).map(key => `--${key}:${themeObj[key]}`).join(';');
  document.documentElement.setAttribute('style', vars);
  document.documentElement.className = document.documentElement.className == 'primary' ? 'danger' : 'primary';
}

function comparePosition(position, pos) {
  if(pos > position[0] && pos < position[1]) { 
    return '1'
   } else if (pos > position[2] && pos < position[3]) {
    return '2'
   } else if ( pos > position[4] && pos < position[5]) {
    return '3'
   } else {
    return '4'
   }
}

// function drag(origin, target, position) {
function drag(initEvent, str) {
  let left =document.getElementById("left");
  let center = document.getElementById("center");
  let right = document.getElementById("right");
   
  let positionZoom = [left.offsetLeft, left.offsetLeft + left.offsetWidth, center.offsetLeft, center.offsetLeft + center.offsetWidth, ];

  if (!str == 'left') { return }
  // if(!box.includes(initEvent.target)) { return false }
  let dragObj = initEvent.target || window.event.target;
  let restLeft = initEvent.clientX - dragObj.offsetLeft;
  // let restLeft = e.clientX - wrap.offsetLeft - box.offsetLeft;
  let restTop = initEvent.clientY - dragObj.offsetTop;
  // let restTop = e.clientY - wrap.offsetTop - box.offsetTop;
  document.onmousemove = function (moveEvent) {
    // let e = moveEvent.target || window.event.target;
    let moveLeft = moveEvent.clientX - restLeft;
    let moveTop = moveEvent.clientY - restTop;

    let moveWidth = moveLeft +  + dragObj.offsetWidth;
    let moveHeight = moveTop +  + dragObj.offsetHeight;
    let tag = comparePosition(positionZoom, moveWidth)
    if(tag === '1') {
      dragObj.style.width = left.offsetWidth + 'px'
    } else if (tag === '2') {
      dragObj.style.width = center.offsetWidth + 'px'
    } else if (tag === '3') {
      dragObj.style.width = right.offsetWidth + 'px'
    }
    // if (moveLeft < 0) {
    //   moveLeft = 0;
    // } else if (moveLeft > window.innerWidth - dragObj.offsetWidth) {
    //   moveLeft = window.innerWidth - dragObj.offsetWidth;
    // }
    // if (moveTop < 0) {
    //   moveTop = 0;
    // } else if (moveTop > window.innerHeight - dragObj.offsetHeight) {
    //   moveTop = window.innerHeight - dragObj.offsetHeight;
    // }
    dragObj.style.left = moveLeft + "px";
    dragObj.style.top = moveTop + "px";
    debugger
  };
  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  }
  return false;
}