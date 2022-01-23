<template>
  <div id="item-list-page">
      <navBar></navBar>
      <Item></Item>
      <bottomMenu></bottomMenu>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
import Item from '@/components/ItemList/Item.vue';
import bottomMenu from '@/components/bottomMenu.vue';

export default {
  name: 'ItemListPage',
  components: {
    navBar,
    Item,
    bottomMenu,
  },
};
</script>

<style>
</style>
