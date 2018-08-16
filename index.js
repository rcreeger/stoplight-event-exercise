(function() {
  'use strict';
const stop = document.getElementById('stopButton');
const slow = document.getElementById('slowButton');
const go = document.getElementById('goButton');
// event listenter toggle
stop.addEventListener('click', function(event){
  const stopping = document.getElementById('stopLight');
  stopping.classList.toggle('stop');
  if (stopping.className === 'bulb stop') {
    console.log(`${stop.innerText} blub on`)
  }
  if (stopping.className === 'bulb') {
    console.log(`${stop.innerText} bulb off`)
  }
});
slow.addEventListener('click', function(event){
  const slowing = document.getElementById('slowLight');
  slowing.classList.toggle('slow');
  if (slowing.className === 'bulb slow') {
    console.log(`${slow.innerText} blub on`)
  }
  if (slowing.className === 'bulb') {
    console.log(`${slow.innerText} bulb off`)
  }
});
go.addEventListener('click', function(event) {
  const going = document.getElementById('goLight');
  going.classList.toggle('go');
  if (going.className === 'bulb go') {
    console.log(`${go.innerText} blub on`)
  }
  if (going.className === 'bulb') {
    console.log(`${go.innerText} bulb off`)
  }
});

//event listner mouse enter
stop.addEventListener('mouseenter', function(event){
  console.log(`Entered ${stop.innerText} button`);
})
slow.addEventListener('mouseenter', function(event){
  console.log(`Entered ${slow.innerText} button`)
})
go.addEventListener('mouseenter', function(event){
  console.log(`Entered ${go.innerText} button`);
})

// event listener mouse leave
stop.addEventListener('mouseleave', function(event){
  console.log(`Left ${stop.innerText} button`);
})
slow.addEventListener('mouseleave', function(event){
  console.log(`Left ${slow.innerText} button`);
})
go.addEventListener('mouseleave', function(event){
  console.log(`Left ${go.innerText} button`);
})


})();
