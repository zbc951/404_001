'use strict';

// 動畫
(() => {
  const warnTextInform = document.querySelector('.warnText--inform');

  // 生成span
  warnTextInform.innerHTML = warnTextInform.textContent.replace(
    /\S/g,
    `<span class="strs">$&</span>`
  );

  // 動畫函數
  const animate = function () {
    let delay = 0;
    document.querySelectorAll('.strs').forEach(function (span, i) {
      delay += 0.1;

      if (i === 2) delay += 0.3;

      span.style.setProperty('--delay', `${delay}s`);
    });
  };

  animate();

  // 刪除class 判斷fn
  const addC = function () {
    !warnTextInform.classList.contains('warnText--Animate')
      ? warnTextInform.classList.add('warnText--Animate')
      : warnTextInform.classList.remove('warnText--Animate');
  };
  addC();
  setInterval(addC, 1500);
})();
