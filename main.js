(() => {
  const stepElems = document.querySelectorAll('.step');
  const graphicElems = document.querySelectorAll('.graphic-item');
  // 현재 활성화된(visible 클래스가 붙은 ) .graphic-item을 지정
  let currentItem = graphicElems[0];
  let ioIndex;

  const io = new IntersectionObserver((entries, observer)=> { 
    ioIndex = entries[0].target.dataset.index*1;
    console.log(ioIndex);
    

  });

  for (let i = 0; i< stepElems.length; i++) {
    io.observe(stepElems[i]);

    // stepElems[i].setAttribute('data-index', i); 와 같은 방식
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  function activate() {
    currentItem.classList.add('visible');
  }

  function inactivate() {
    currentItem.classList.remove('visible');
  }

    window.addEventListener('scroll', () => {
      let step;
      let boundingRect;
      let temp = 0;

      //for (let i = 0; i < stepElems.length; i++) {
        for (let i = ioIndex - 1; i < ioIndex + 2; i++) {  
          step = stepElems[i];

          if(!step) continue;
          boundingRect = step.getBoundingClientRect();
          //console.log(boundingRect.top);

        if(boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8) {
          
          // 텍스트박스 위치 탐색
          //console.log(step.dataset.index);
          if (currentItem) {
            inactivate();
          }    
          currentItem = graphicElems[step.dataset.index];
          activate();
        }
      }
    });

})();

