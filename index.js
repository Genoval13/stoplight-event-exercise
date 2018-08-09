(function() {
  'use strict';
//Bulb variables
const stop = document.getElementById('stopLight');
const slow = document.getElementById('slowLight');
const go = document.getElementById('goLight');
//Button variables
const stopButton = document.getElementById('stopButton');
const slowButton = document.getElementById('slowButton');
const goButton = document.getElementById('goButton');
//Stop Color
stopButton.addEventListener('click', (ev) => {
  if (stop.style.backgroundColor === 'black')  {
    stop.style.backgroundColor = 'red';
  } else  {
    stop.style.backgroundColor = 'black';
  }
});
//Slow color
slowButton.addEventListener('click', (ev) => {
  if (slow.style.backgroundColor === 'black') {
    slow.style.backgroundColor = 'orange';
  } else {
    slow.style.backgroundColor = 'black';
  }
});
//Go color
goButton.addEventListener('click', (ev) => {
  if (go.style.backgroundColor === 'black') {
    go.style.backgroundColor = 'green';
  } else {
    go.style.backgroundColor = 'black';
  }
});
//Stop Enter/Leave
stopButton.addEventListener('mouseenter', (ev) => {
  console.log(`Entered Stop button`);
})
stopButton.addEventListener('mouseleave', (ev) => {
  console.log(`Left Stop button`);
})
//Slow Enter/Leave
slowButton.addEventListener('mouseenter', (ev) => {
  console.log(`Entered Slow button`);
})
slowButton.addEventListener('mouseleave', (ev) => {
  console.log(`Left Slow button`);
})
//Go Enter/Leave
goButton.addEventListener('mouseenter', (ev) => {
  console.log(`Entered Go button`);
})
goButton.addEventListener('mouseleave', (ev) => {
  console.log(`Left Go button`);
})

})();
