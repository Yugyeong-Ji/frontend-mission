<template>
    <nav>
    <ul class="menu">
      <li class="menu--item" v-for="menu in menus" :key="menu">
          <img :src="icon">
      <br><a>{{menu}}</a></li>
    </ul>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      menus: ['홈', '찜', '장바구니', '마이페이지'],
      icon: ['https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F238%2F238741.png&type=sc960_832',
      ],
    };
  },
};
</script>

<style>
  .menu {
    display : flex;
    background-color: rgb(253, 253, 253);
    list-style: none;
    justify-content: space-around;
    bottom: 0px;
    width: 100%;
    padding: 7px;
    margin: 0;
    position: fixed;
  }
.menu--item {
    padding : 0;
  }
.menu--item a {
    font-size: 13px;
    user-select: none;
    color : rgb(128, 128, 128);
    font-family: 'Pretendard-Regular';
  }
.menu img{
      width: 30px;
      height: 30px;
      padding-left:10px;
      padding-right:10px;
  }
</style>
