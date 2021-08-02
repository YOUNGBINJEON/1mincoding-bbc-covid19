(() => {
 
  const stepElems = document.querySelectorAll('.step');
  const graphicElems = document.querySelectorAll('.graphic-item');

  for (let i = 0; i< stepElems.length; i++) {


    // stepElems[i].setAttribute('data-index', i); 와 같은 방식
    stepElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

    window.addEventListener('scroll', () => {
      let step;
      let boundingRect;

      for (let i = 0; i < stepElems.length; i++) {
        step = stepElems[i];
        boundingRect = step.getgetBoundingClientRect();
        console.log(boundingRect.top);

        if(boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8) {
          
          // 텍스트박스 위치 탐색
          console.log(step.dataset.index);
        }

      }
    });

})();

