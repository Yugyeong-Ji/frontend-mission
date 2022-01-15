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
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
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
  /* padding: 0; */
  /* padding: 0; */
  /* width: 100%; */
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
</style>
