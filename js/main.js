/* fade in 이펙트 */
const fadeEls = document.querySelectorAll('.main .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gasp.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  // 0.7s, 1.4s, 2.1s, 2.7s 딜레이되면서 작동
    opacity: 1
  });
});


/* 라이트 박스 갤러리 */
function wrap(el) {
  const wrappingElement = document.createElement("a");
  wrappingElement.href = el.src;
  wrappingElement.setAttribute("data-fslightbox", "gallery");
  el.parentElement.insertBefore(wrappingElement, el);
  wrappingElement.appendChild(el);
}

document.querySelectorAll(".pic").forEach((el) => {
  wrap(el);
});

refreshFsLightbox();


/* 배경 음악 */
const btnPlay = document.querySelector(".main .btnPlay");
const btnPause = document.querySelector(".main .btnPause");
const bgm = document.querySelector(".bgm");

bgm.src = "../sound/rmw0027.mp3";
// bgm.autoplay = true;
bgm.loop = true;
// 재생 버튼
btnPlay.onclick = function () {
  bgm.play();
}

// 일시정지 버튼
btnPause.onclick = function () {
  bgm.pause();
}
