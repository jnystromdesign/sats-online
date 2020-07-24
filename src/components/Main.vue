<template>
  <div class="hello">
    <Header :setSelected="setSelected" />
    <div class="content">
      <SeriesSection v-for="item in items" :key="item.name" :name="item.name" :items="item.items" />
    </div>
  </div>
</template>

<script>
import SeriesSection from "./SeriesSection";
import Header from "./Header";
import {
  getSeriesForCategory,
  /* eslint-disable no-unused-vars */
  getSeries,
  getSeriesBySearchTerm,
} from "../data/structuredData";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => {
    return {
      categories: ["crosstraining", "yoga"],
      selectedItems: "yoga",
    };
  },
  computed: {
    items: function () {
      return getSeriesForCategory(this.selectedItems);
    },
  },
  methods: {
    setSelected: function (selection) {
      console.log(selection);
      this.selectedItems = selection;
    },
  },
  components: {
    Header,
    SeriesSection,
  },
  beforeMount() {
    console.log(getSeriesBySearchTerm("yoga"));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import "../colors.scss";
h1 {
  transition: all 200ms ease-in;
  margin-bottom: 0.5em;
  padding-left: 20px;
  padding-bottom: calc(0.5rem - 2px);
  padding-top: 0.5rem;
  color: #fff;
  font-size: 1.5em;
  letter-spacing: -0.1em;
  font-weight: 900;
  margin-top: 0;
  background: $colorSecondary;
  @media screen and (min-width: 678px) {
    background: $colorSecondary;
    font-size: 2.5em;
    padding-bottom: calc(1rem - 2px);
    padding-top: 1rem;
  }
}
.content {
  padding: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
