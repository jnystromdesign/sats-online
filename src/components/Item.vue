<template>
  <a class="item" :href="`https://www.sats.se/${item.ProductPageUrl}`" target="_blank">{{item.Name}}</a>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: Object,
  },
};
</script>


<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
  display: block;
  background: #fff;
  padding: 0.5em 1em;
  border-radius: 3px;
  border: #eee 1px solid;
  border-bottom-color: #ddd;
  margin-bottom: 5px;

  &:hover {
    background-color: #eee;
    transform: translateY(1px);
  }
  &:active {
    background-color: #ddd;
    border: #ccc 1px solid;
  }
}
</style>