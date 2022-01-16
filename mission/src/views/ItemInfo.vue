<template>
<link rel="shortcut icon" href="/urlicon.ico" type="image/x-icon" />
<div id='item-info-page'>
  <div class="header">
    <img class="itemImg" alt="ItemImg" src="../assets/ItemImg.jpg">
  </div>
  <div class="profile">
  <img class="profileImg" alt="ProfileImg" src="../assets/ProfileImg.jpg">
    <div style = "margin-top:7px; margin-left: 3px; text-align:left; font-size:15px; float:left;">
      <b><h>깽마켓</h></b>
    <br><h>#가을룩 #트렌치</h></div>
    <img class="starImg" alt="starImg" src="../assets/star.png">
  </div>
  <div class="ItemInfo">
    <hr color="gray" size="1px">
    <b><h2 style="margin:5px;">가을 트렌치 코트</h2></b>
    <div class="ItemPrice">
      <p style="font-size:17px; float: left; color: red; margin-top:4px; margin-left: 25px;">
        {{discountedRate}}%</p>
      <b><p style="font-size:20px; float: left; margin-top: 0px; margin-left:20px;">
        {{discountedPrice}}원</p></b>
      <p style="font-size:15px; margin-top:5px; float: left; margin-left:10px;
       text-decoration: line-through;">
        {{originPrice}}원</p>
    </div>
    <b><h3 style="margin-top:55px;">ItemInfo</h3></b>
    <h5>
      깔끔하고 심플한 디자인으로<br>
미니멀함이 가득 느껴지는 코트입니다.<br><br><br>
견장, 허리 스트랩 모두 생략된 아주 간결한 바바리 코트입니다.<br>
히든 버튼으로 한번 더 깔끔함을 살려주었습니다.<br><br>
최소한으로 소매의 비조디테일이 있어<br>
미니멀하지만 너무 비어보이지 않도록 분위기를 잘 잡아줍니다.<br><br>
전체적으로 품이 매우 넉넉해서<br>
실루엣을 멋스럽게 살려줍니다.<br>
특히 소매를 돌돌 말아 연출해주시기를 추천드립니다.<br>
롤업 했을 때 아웃핏이 멋스러워요.<br><br><br>
단추가 총 4개로 간결합니다.<br>
윗 부분에서 단추가 끝나기 때문에<br>
품이 넉넉하고 롱한 기장이지만<br>
전체적인 비율을 멋스럽게 살려줍니다.<br><br>
 이 부분 덕에 길이 수선하셔도<br>
단추 위치에 어색함이 없으실 거에요.<br>
판판하면서도 적당히 바스락한 소재입니다.<br>
면소재보다 구김에 강해 특히나 데일리하게 입기 좋은 아이템입니다.<br><br>
깔끔한 크림 컬러로 봄 옷들과의 궁함이 특히나 좋답니다.<br>
미니멀한 디자인 덕에<br>
슬랙스와 블라우스 등과 매치해주어도<br>
멋스러운 룩이 연출되실 거에요.<br><br><br>
COLOR<br>
크림<br><br>
INFO<br>
신축성-없음｜계절감- 봄,가을｜안감-있음<br>
    </h5>
  </div>
  <div class="review1">
      <h2>Review</h2>
      <div style = "margin-top:7px; margin-left: 3px; text-align:left; font-size:15px; float:left;">
      <b><h>2mo*****</h></b>
      </div>
      <div style = "margin-top:7px; margin-left: 3px; text-align:left; font-size:10px; float:left;">
      <h>2021.04.11</h>
      </div>
      <div style = "text-align: left; margin-top: 25px;">
    <br><b><h>최고예요</h></b>
    <img class="reviewImg" alt="reviewImg" src="../assets/reviewImg.png">
     <br><h>가격도 합리적이고 만족스럽습니다.</h>
      </div>
    </div>
    <div class="review2">
      <hr>
      <div style = "margin-top:7px; margin-left: 3px; text-align:left; font-size:15px; float:left;">
      <b><h>tn***</h></b>
      </div>
      <div style = "margin-top:7px; margin-left: 3px; text-align:left; font-size:10px; float:left;">
      <h>2021.09.29</h>
      </div>
      <div style = "text-align: left; margin-top: 13px;">
    <br><b><h>만족해요</h></b>
     <br><h>재질도 괜찮고 예쁜 것 같습니다!!</h>
     <br>
     <hr>
      </div>
    </div>
    <div class="footer">
    <b><h2>{{discountedPrice}}원 구매</h2></b>
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      originPrice: '50,000',
      discountedRate: 10,
      discountedPrice: '45,000',
    };
  },
  methods: {
  },
  computed: {
  },
};
</script>

<style scoped>
.itemImg {
  width:375px;
  margin: 0;
}
.profile{
  font-family: 'InfinitySans-RegularA1';
}
.profileImg {
  width: 50px;
  height: 50px;
  border-radius: 70%;
  position: left;
  float:left;
  vertical-align:middle;
  margin: 5px;
}
.starImg{
  width: 30px;
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}
.ItemInfo{
  margin-top: 60px;
  font-family: 'GowunBatang-Regular';
}
.reviewImg{
  float: right;
  margin-right: 20px;
  width: 80px;
}
.review1{
   font-family: 'GowunBatang-Regular';
}
.review2{
  margin-top: 38px;
  margin-bottom: 60px;
   font-family: 'GowunBatang-Regular';
}
.footer{
  position:fixed;
  left:0px;
  bottom:0px;
  height:60px;
  width:100%;
  background:rgb(226, 195, 223);
  color: white;
  font-family: 'InfinitySans-RegularA1';
  }
</style>
