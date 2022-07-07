// app.js

$(function () {
  /* #gnb toggle */
  // 1. 열기: toggle-btn 클릭시 #gnb on

  // 2. 닫기: toggle-btn 클릭시 #gnb 닫음

  $('#toggle-btn').click(function () {
    $('#gnb').addClass('on');
  });

  $('#btn-close').click(function () {
    $('#gnb').removeClass('on');
  });

});


// 서버에 데이터 요청(data request)
function getData() {
  fetch('https://raw.githubusercontent.com/csslick/animal-mobile/main/animal-data.json')
    .then(function (res) {
      return res.json(); // JSON 객체 변환
    })
    .then(function (obj) {
      // obj 동물데이터
      show/*Animals*/(obj);
    });
}