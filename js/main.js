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


/* 스테이지 메뉴 버튼 - 열고 닫기  */
const stageBtns = document.querySelectorAll(".index .titleBox");
const stageBtnDrops = document.querySelectorAll(".index .btnDrop");
const stageContents = document.querySelectorAll(".index .stageContents");
const stageContentsWrapers = document.querySelectorAll(".index .stageContentsWraper");

let isClickedStageBtns = [true, true, true, true, true, true];
let preIndex = 0;
let stageHeight;

for (let index = 0; index < stageBtns.length; index++) {
  stageBtns[index].addEventListener("mouseover", function() {
    stageBtnDrops[index].classList.add("btnDrop--hover");
  })
  stageBtns[index].addEventListener("mouseout", function() {
    stageBtnDrops[index].classList.remove("btnDrop--hover");
  })

  stageBtns[index].addEventListener("click", function() {
    if(isClickedStageBtns[index] === true) {
      // 이전에 있던 스테이지(preIndex) 접기
      stageBtnDrops[preIndex].classList.remove("btnDrop--upArrow");
      stageBtnDrops[preIndex].classList.add("btnDrop--downArrow");
      stageContents[preIndex].classList.add("hiddenStage");
      stageContentsWrapers[preIndex].style.height = "0px";
      stageContentsWrapers[preIndex].style.transition = "height 0.7s";
      isClickedStageBtns[preIndex] = true;

      // 현재 선택된 스테이지 펴기
      stageBtnDrops[index].classList.add("btnDrop--upArrow");
      stageBtnDrops[index].classList.remove("btnDrop--downArrow");
      isClickedStageBtns[index] = false;
      stageHeight = stageContents[index].clientHeight;
      stageContentsWrapers[index].style.height = stageHeight+"px";
      stageContentsWrapers[index].style.transition = "height 0.7s";
      stageContents[index].classList.remove("hiddenStage");

      // 현재 선택된 스테이지 -> 이전 선택했던 스테이지index(preIndex)로
      preIndex = index;

      // 부드러운 이동 스크롤
      gsap.to(window, .7, {
        scrollTo: 660 + 60*index
      })

    } else {
      // 현재 선택된 스테이지 접기
      stageBtnDrops[index].classList.remove("btnDrop--upArrow");
      stageBtnDrops[index].classList.add("btnDrop--downArrow");
      stageContents[index].classList.add("hiddenStage");
      stageContentsWrapers[index].style.height = "0px";
      stageContentsWrapers[index].style.transition = "height 0.7s";
      isClickedStageBtns[index] = true;

      gsap.to(window, .7, {
        scrollTo: 600
      })
    }
  })

  // 창크기를 움직여도 같은 사이즈로 자동 조절
  window.addEventListener("resize", function() {
    stageHeight = stageContents[index].clientHeight;
    if (isClickedStageBtns[index] === false) {
      stageContentsWrapers[index].style.height = stageHeight+"px";
      stageContentsWrapers[index].style.transition = "height 0s";
    }
  })
}



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
