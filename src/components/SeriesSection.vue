<template>
  <div>
    <h2 class="title">{{name}}</h2>
    <img v-bind:src="items[0].ExternalImage.externalImageUrl" alt="Item image" />
    <p>{{items[0].TeaserText}}</p>
    <div class="items">
      <Item v-for="item in items" :key="item.name" :item="item" />
    </div>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "SeriesSection",
  props: {
    name: String,
    items: Array
  },
  components: { Item }
};
</script>

<style>
.title {
  border-bottom: 1px solid #eee;
  margin-bottom: 0;
}
img {
  width: 100%;
  height: 100%;
}
.items {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 5px;
  grid-auto-flow: column;
}
</style>