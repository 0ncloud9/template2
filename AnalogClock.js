const AnalogClock = $container => {
  // do something!

  const createClockEL = () => {
    const handEl = [
      {class: 'hour'},
      {class: 'minute'},
      {class: 'second'}
    ];

    handEl.forEach(({class: x}) => {
      const hand = document.createElement('div');
      hand.classList.add('hand', x);
      $container.appendChild(hand);
    });
    
    for (let i = 1; i <=12; i++) {
      const clockScale = document.createElement('div');
      clockScale.classList.add('time', `time${i}`);
      clockScale.textContent = '|';
      $container.appendChild(clockScale);
    }
  };


  const clockRotating = () => {
    const whatTineNow = new Date();
    const WhatHour = whatTineNow.getHours() % 12;
    const WhatMinute = whatTineNow.getMinutes();
    const WhatSecond = whatTineNow.getSeconds();
  
    const hourDeg = (WhatHour + WhatMinute / 60) * 30;
    const minuteDeg = (WhatMinute + WhatSecond / 60) * 6;
    const secondDeg = (WhatSecond) * 6;

    $container.querySelector('.hour').style.setProperty('--deg', hourDeg);
    $container.querySelector('.minute').style.setProperty('--deg', minuteDeg);
    $container.querySelector('.second').style.setProperty('--deg', secondDeg);
  }


  createClockEL();
  clockRotating();
  setInterval(clockRotating, 1000);
};

export default AnalogClock;