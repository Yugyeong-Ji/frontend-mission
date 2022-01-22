<template>
  <div class="item-list-item">
    <div class="item1">
      <img :src="ItemData[0].image" class="Item1">
        <br>
      <h5 style="color:red;" v-if="ItemData[0].discount">
        {{ ItemData[0].discountRate+"%"}}</h5>
      <h5>{{ ItemData[0].price }}원</h5>
      <h4>{{ ItemData[0].ItemName }}</h4>
    </div>

    <div class="item2">
      <img :src="ItemData[1].image" class="Item2">
       <br>
      <h5 style="color:red;" v-if="ItemData[1].discount">
        {{ ItemData[1].discountRate+"%"}}</h5>
      <h5>{{ ItemData[1].price }}원</h5>
      <h4>{{ ItemData[1].ItemName }}</h4>
    </div>

    <div class="item3">
      <img :src="ItemData[2].image" class="Item3">
       <br>
      <h5 style="color:red;" v-if="ItemData[2].discount">
        {{ ItemData[2].discountRate+"%"}}</h5>
      <h5>{{ ItemData[2].price }}원</h5>
      <h4>{{ ItemData[2].ItemName }}</h4>
    </div>

    <div class="item4">
      <img :src="ItemData[3].image" class="Item4">
       <br>
      <h5 style="color:red;" v-if="ItemData[2].discount">
        {{ ItemData[3].discountRate+"%"}}</h5>
      <h5>{{ ItemData[3].price }}원</h5>
      <h4>{{ ItemData[3].ItemName }}</h4>
    </div>

    <div class="item5">
      <img :src="ItemData[4].image" class="Item5">
       <br>
      <h5 style="color:red;" v-if="ItemData[4].discount">
        {{ ItemData[4].discountRate+"%"}}</h5>
      <h5>{{ ItemData[4].price }}원</h5>
      <h4>{{ ItemData[4].ItemName }}</h4>
    </div>

    <div class="item6">
      <img :src="ItemData[5].image" class="Item6">
       <br>
      <h5 style="color:red;" v-if="ItemData[5].discount">
        {{ ItemData[5].discountRate+"%"}}</h5>
      <h5>{{ ItemData[5].price }}원</h5>
      <h4>{{ ItemData[5].ItemName }}</h4>
    </div>

    <div class="item7">
      <img :src="ItemData[6].image" class="Item7">
       <br>
      <h5 style="color:red;" v-if="ItemData[6].discount">
        {{ ItemData[6].discountRate+"%"}}</h5>
      <h5>{{ ItemData[6].price }}원</h5>
      <h4>{{ ItemData[6].ItemName }}</h4>
    </div>

    <div class="item8">
      <img :src="ItemData[7].image" class="Item8">
       <br>
      <h5 style="color:red;" v-if="ItemData[7].discount">
        {{ ItemData[7].discountRate+"%"}}</h5>
      <h5>{{ ItemData[7].price }}원</h5>
      <h4>{{ ItemData[7].ItemName }}</h4>
    </div>
  </div>
</template>

<script>
import data from '@/components/ItemList/ItemList';

export default {
  name: 'ItemListItem',
  data() {
    return {
      ItemData: data,
    };
  },
};
</script>

<style>
h5{
  display: inline;
}
h4{
  margin: 0;
}
.item1{
  margin-top: 80px;
  margin-left: 35px;
  float: left;
}
.item2{
  margin-top: 80px;
  margin-right: 35px;
  float: right;
}
.item3{
  margin-top: 25px;
  margin-left: 35px;
  float: left;
}
.item4{
  margin-top: 25px;
  margin-right: 35px;
  float: right;
}
.item5{
  margin-top: 25px;
  margin-left: 35px;
  float: left;
}
.item6{
  margin-top: 25px;
  margin-right: 35px;
  float: right;
}
.item7{
  margin-top: 25px;
  margin-left: 35px;
  float: left;
}
.item8{
  margin-top: 25px;
  margin-right: 35px;
  float: right;
}
img{
  width: 130px;
  height: 145px;
}
.Item1{
  position: right;

}
.Item2{
  position: left;
}
.Item3{
  position: right;
}
</style>
