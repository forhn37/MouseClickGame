let time = 12000;
let sec = '';


let limittime = setInterval(function() {
  time--;
  sec = time/60
  document.getElementById('timehow').textContent= sec+'초'
}, 12000);

