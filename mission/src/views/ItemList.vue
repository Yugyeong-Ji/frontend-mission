<template>
  <div id="item-list-page">
      <navBar></navBar>
      <Item></Item>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
import Item from '@/components/ItemList/Item.vue';

export default {
  name: 'ItemListPage',
  components: {
    navBar,
    Item,
  },
};
</script>

<style>
</style>
