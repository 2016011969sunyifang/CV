<template>
  <div id="root">
    <!-- 被transition标签包裹的元素会有动画效果(自动会添加css样式以及删除)，transition标签没有name属性则默认为样式名以v开头，若有如name是tran的则样式为tran-enter，tran-enter-active
    <transition>
      <div v-if="show">hello world</div>
    </transition>
    <button @click="handleClick">切换</button> -->

    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-2guanbi"></use>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleClick: function () {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
/* 显示动画效果 */
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 3s;
}
/* 隐藏动画效果 */
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: opacity 3s;
}
</style>