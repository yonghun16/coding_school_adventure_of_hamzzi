/* 메인화면 fade in 이펙트 */
const fadeEls = document.querySelectorAll(".main .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  // gasp.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7s, 1.4s, 2.1s, 2.7s 딜레이되면서 작동
    opacity: 1,
  });
});

/* 배경 음악 */
const btnAudio = document.querySelector(".main .audioBtn");
const btnPlay = document.querySelector(".main .audioBtnPlay");
const btnPause = document.querySelector(".main .audioBtnPause");
const bgm = new Audio();
bgm.src = "./sound/rmw0027.mp3";
bgm.loop = true;

// 자동 재생 감지
bgm.autoplay = true;
let promise = bgm.play();
if (promise !== undefined) {
  promise
    .then((_) => {
      isHideAudioBtn = !isHideAudioBtn;
      btnPlay.classList.add("hidden");
      btnPause.classList.remove("hidden");
    })
    .catch((error) => {
      bgm.autoplay = false;
    });
}

btnPlay.onclick = function () {
  bgm.play();
};

btnPause.onclick = function () {
  bgm.pause();
};

let isHideAudioBtn = false;
btnAudio.addEventListener("click", function () {
  isHideAudioBtn = !isHideAudioBtn;
  if (isHideAudioBtn) {
    btnPlay.classList.add("hidden");
    btnPause.classList.remove("hidden");
  } else {
    btnPlay.classList.remove("hidden");
    btnPause.classList.add("hidden");
  }
});


/* 스테이지 메뉴 버튼 */
// 스테이지1
const stage1Btn = document.querySelector(".index .titleBox1");
const stage1BtnDrop = document.querySelector(".index .stage1 .btnDrop");
const stage1ContentsBox = document.querySelector(".index .stageContents1");
let isClickedStage1Btn = false

stage1Btn.addEventListener("mouseover", function() {
  stage1BtnDrop.classList.add("btnDrop--hover");
})
stage1Btn.addEventListener("mouseout", function() {
  stage1BtnDrop.classList.remove("btnDrop--hover");
})
stage1Btn.addEventListener("click", function() {
  isClickedStage1Btn = !isClickedStage1Btn;
  if(isClickedStage1Btn) {
    stage1BtnDrop.classList.add("btnDrop--upArrow");
    stage1BtnDrop.classList.remove("btnDrop--downArrow");
    stage1ContentsBox.classList.remove("hidden");
  } else {
    stage1BtnDrop.classList.remove("btnDrop--upArrow");
    stage1BtnDrop.classList.add("btnDrop--downArrow");
    stage1ContentsBox.classList.add("hidden");
  }
})

// 스테이지2
const stage2Btn = document.querySelector(".index .titleBox2 ");
const stage2BtnDrop = document.querySelector(".index .stage2 .btnDrop");
const stage2ContentsBox = document.querySelector(".index .stageContents2");
let isClickedStage2Btn = false

stage2Btn.addEventListener("mouseover", function() {
  stage2BtnDrop.classList.add("btnDrop--hover");
})
stage2Btn.addEventListener("mouseout", function() {
  stage2BtnDrop.classList.remove("btnDrop--hover");
})
stage2Btn.addEventListener("click", function() {
  isClickedStage2Btn = !isClickedStage2Btn;
  if(isClickedStage2Btn) {
    stage2BtnDrop.classList.add("btnDrop--upArrow");
    stage2BtnDrop.classList.remove("btnDrop--downArrow");
    stage2ContentsBox.classList.remove("hidden");
  } else {
    stage2BtnDrop.classList.remove("btnDrop--upArrow");
    stage2BtnDrop.classList.add("btnDrop--downArrow");
    stage2ContentsBox.classList.add("hidden");
  }
})


// 스테이지3
const stage3Btn = document.querySelector(".index .titleBox3");
const stage3BtnDrop = document.querySelector(".index .stage3 .btnDrop");
const stage3ContentsBox = document.querySelector(".index .stageContents3");
let isClickedStage3Btn = false

stage3Btn.addEventListener("mouseover", function() {
  stage3BtnDrop.classList.add("btnDrop--hover");
})
stage3Btn.addEventListener("mouseout", function() {
  stage3BtnDrop.classList.remove("btnDrop--hover");
})
stage3Btn.addEventListener("click", function() {
  isClickedStage3Btn = !isClickedStage3Btn;
  if(isClickedStage3Btn) {
    stage3BtnDrop.classList.add("btnDrop--upArrow");
    stage3BtnDrop.classList.remove("btnDrop--downArrow");
    stage3ContentsBox.classList.remove("hidden");
  } else {
    stage3BtnDrop.classList.remove("btnDrop--upArrow");
    stage3BtnDrop.classList.add("btnDrop--downArrow");
    stage3ContentsBox.classList.add("hidden");
  }
})




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
