// 서버에 제품 데이터 요청(data request)(가져오기)
function getData() {
  // 
  const DataURL = 'https://raw.githubusercontent.com/ASBEN1/2022.07.06_Sennheiser_Mobile_App_Practice/main/data.json';
  //'깃허브 주소 (깃허브에 올린 json 파일(경로) 항목을 눌러서 row를 누른다 그 다음 주소를 복붙)'
  fetch(DataURL)
    .then(function (res) {
      return res.json(); // JSON 객체 변환
    })
    .then(function (obj) {
      // obj 데이터
      showDetail(obj);
      console.log(obj);
    });
};


function showDetail(obj) {

  // URL quary parameter(매개변수)
  const quary = location.search;
  console.log(quary);
  // ? URL quary문을 object(변수)로 변경 -> html 에서도
  let params = new URLSearchParams(quary).get('id');
  // const는 상수라 변경이 불가라서 let으로 변경해준다
  console.log(params);

 
  // 해당 id 제품 출력
    let category = obj[params].category;
    let name = obj[params].name;
    let price = obj[params].price;
    let imgUrl = obj[params].imgUrl;
    let text = obj[params].text;
    console.log('name = ', name);

    // products-detail.html에 각 변수값 주입

    let html = `
    <div class="container">

      <h2>${name}</h2>
      <p class="prPrice"><span>KRW: </span>${price}</p>

    </div>

    <figure>
      <img src="${imgUrl}" alt="${name}">
    </figure>

    <div class="btn-b">
      <a href="./products.html" class="btn-back">뒤로가기</a>
    </div>

    <div class="text01">
      <p>${text}</p>
    </div>

    <div class="buy-btn-groupe">
      <a href="#" class="btn-large01">장바구니</a>
      <a href="#" class="btn-large02">구매하기</a>
    </div> 
    `
      $('#products-detail .pdt-ma').append(html);


}

$(function () {
  getData();
});