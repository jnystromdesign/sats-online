<template>
  <div class="menu">
    <div class="menu__button" :class="{ open: menuOpen }" @click="toggleMenu">
      <span class="menu__bar"></span>
      <span class="menu__bar"></span>
      <span class="menu__bar"></span>
    </div>

    <div class="menu__overlay" v-if="menuOpen">
      <div class="menu__overlay-container">
        <div class="menu__items">
          <a
            v-for="item in items"
            :key="item"
            class="menu__item"
            @click="menuItemClick(item)"
          >{{item}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuOpen: Boolean,
    items: Array,
    toggleMenu: Function,
    setItemsTo: Function,
  },
  data: () => ({}),
  methods: {
    menuItemClick: function (item) {
      this.setItemsTo(item);
      this.toggleMenu();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../colors.scss";
@keyframes borderOut {
  from {
    box-shadow: inset 0 0 0 20px #fff;
  }
  to {
    box-shadow: inset 0 0 0 0px #fff;
  }
}
.menu {
  &__button {
    flex: 0 0 auto;
    width: 40px;
    height: 30px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:active span {
      box-shadow: 0 0 0 1px #fff;
    }
    &.open {
      span {
        &:nth-child(1) {
          transform: rotate(45deg) translate(5px, -6px);
        }
        &:nth-child(2) {
          opacity: 0;
          /* transform: translateX(100%); */
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(5px, 4px);
        }
      }
    }
  }
  &__bar {
    opacity: 1;
    transition: all 200ms ease-out;
    transform-origin: 0px 0px;
    transform: rotate(0deg);
    background-color: #fff;
    width: 100%;
    height: 2px;
    display: block;
    border-radius: 4px;
    &:nth-child(2) {
      transform-origin: 50% 50%;
    }
  }
  &__overlay {
    background-color: $colorWhite;
    width: 100%;
    height: calc(100% - 50px);
    position: fixed;
    top: 132px;
    bottom: 0;
    left: 0;
  }
  &__items {
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  &__item {
    padding: 20px;
    font-size: 3em;
    text-decoration: none;
    color: $colorText;
    box-shadow: inset 0 0 0 0px #fff;
    &:hover {
      animation: borderOut 300ms;
      color: $colorMain;
      background: #f8f8f8;
    }
    &:active {
      background: #f0f0f0;
    }
  }
}
</style>