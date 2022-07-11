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
      showProducts(obj);
      console.log(obj);
    });
};


function showProducts(obj) {

  // URL quary parameter(매개변수)
  const quary = location.search;
  console.log(quary);
  // ? URL quary문을 object(변수)로 변경 -> html 에서도
  let params = new URLSearchParams(quary).get('category');
  // const는 상수라 변경이 불가라서 let으로 변경해준다


  // params == null 이면 시작 페이지 wireless 출력
  if (params == null || params == 'all') { // || = or
    params = null;
  };
  console.log(params);


  // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★

  // 상품 데이터 출력 [forEach() 반복문]
  obj.forEach(function (product, i) {
    //                   제품, 배열(번호) 데이터

    // 카테고리 구분 wireless | 무선헤드폰 | 유선헤드폰
    // 요청한 params와 product.category 명이 일치하는 데이터만 출력한다.

    let category = product.category;
    let name = product.name;
    let price = product.price;
    let imgUrl = product.imgUrl;
    let text = product.text;
    console.log(product);

    // 상품 보기
    if (params == product.category) {
      //                     data-id=~ = 사용자 정의 id
      let html = `
        <div class="product" data-id=${i}>
          <a href="./products-detail.html?id=${i}">

            <img src="${imgUrl}" alt="${name}">

            <div class="info">
              <span class="category">${category}</span>
              <p class="prd-title">${name}</p>
              <p class="price"><span>KRW: </span>${price}</p>
            </div>

          </a>
        </div>
    `
      $('#products .row').append(html);
    }

    // 상품 전체보기
    if (params == null) {

      let html = `
        <div class="product" data-id=${i}>
          <a href="./products-detail.html?id=${i}">

            <img src="${imgUrl}" alt="${name}">

            <div class="info">
              <span class="category">${category}</span>
              <p class="prd-title">${name}</p>
              <p class="price"><span>KRW: </span>${price}</p>
            </div>

          </a>
        </div>
    `
      $('#products .row').append(html);
      console.log(`i = `, i);
    };

  });
}

$(function () {
  getData();
});