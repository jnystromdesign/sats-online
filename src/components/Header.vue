<template>
  <header>
    <h1>
      <strong>SATS</strong> online
    </h1>
    <div class="search" v-if="menuOpen">
      <input type="text" placeholder="Sök efter pass" />
    </div>
    <Menu :menuOpen="menuOpen" :items="items" :toggleMenu="toggleMenu" :setItemsTo="setSelected" />
  </header>
</template>

<script>
import Menu from "./Menu";
export default {
  name: "Header",
  props: {
    setSelected: Function,
  },
  data: () => ({
    menuOpen: false,
    items: ["yoga", "bodyjam", "pilates"],
  }),
  methods: {
    toggleMenu: function () {
      this.menuOpen = !this.menuOpen;
    },
  },
  components: {
    Menu,
  },
};
</script>

<style scoped lang="scss">
@import "../colors.scss";
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 200ms ease-in;
  letter-spacing: -0.1em;
  font-weight: 900;
  margin-top: 0;
  background: $colorMain;

  @media screen and (min-width: 678px) {
    background: #fc2;
  }
}
h1 {
  color: #fff;
  font-size: 1.5em;
  margin-bottom: 0.5em;
  padding-left: 20px;
  padding-bottom: calc(0.5rem - 2px);
  padding-top: 0.5rem;
  flex: 0 0 auto;
  font-weight: 200;
  strong {
    font-weight: 900;
  }

  @media screen and (min-width: 678px) {
    font-size: 2.5em;
    padding-bottom: calc(1rem - 2px);
    padding-top: 1rem;
  }
}

.search {
  flex: 1 1 auto;
  padding: 0 40px;
  input {
    font-size: 1.4em;
    width: 100%;
    padding: 15px;
    display: block;
    margin-right: 20px;
    border-radius: 3px;
    border: 1px solid $colorMain;
  }
}
</style>