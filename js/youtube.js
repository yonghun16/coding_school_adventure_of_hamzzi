// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {
  new YT.Player('player1', {
    videoId: 'q1sclWdh69M', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      playlist: 'q1sclWdh69M' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute() // 음소거!
      }
    }
  }),
  new YT.Player('player2', {
    videoId: 'n-UOIM04ezo',
    playerVars: {
      playlist: 'n-UOIM04ezo'
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거!
      }
    }
  }),
  new YT.Player('player3', {
    videoId: '84MaT383gCc',
    playerVars: {
      playlist: '84MaT383gCc'
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거!
      }
    }
  }),
  new YT.Player('player4', {
    videoId: 'Sv8TfvxCdvY',
    playerVars: {
      playlist: 'Sv8TfvxCdvY'
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거!
      }
    }
  }),
  new YT.Player('player5', {
    videoId: 'U0YJwSa2WVc',
    playerVars: {
      playlist: 'U0YJwSa2WVc'
    },
    events: {
      onReady: function (event) {
        // event.target.mute() // 음소거!
      }
    }
  }),
  new YT.Player('player6', {
    videoId: 'LYRzv4QbwFQ',
    playerVars: {
      playlist: 'LYRzv4QbwFQ'
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거!
      }
    }
  })
}
