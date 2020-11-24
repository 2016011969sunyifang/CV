<template>
  <div :class="{ disp: flag }" id="show-style">
    <svg @click="closeWindow" aria-hidden="true" class="icons">
      <use xlink:href="#icon-guanbi"></use>
    </svg>
    <div class="style-content" id="style_content">
      <pre class="style-code" v-html="styleMsg"></pre>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      msg: "hello vue",
      styleMsg: "",
      flag: false,
    };
  },
  methods: {
    writeStyleCode: function (code) {
      this.styleMsg = code;
      // 每写一行 code ，滚动条滚动到最下面
      document.getElementById(
        "style_content"
      ).scrollTop = document.getElementById("style_content").scrollHeight;
    },
    closeWindow() {
      this.flag = true;
      console.log(this.flag);
    },
  },
};
</script>

<style>
#show-style {
  position: fixed;
  right: 0px;
  /* float: left; */
  top: 20%;
  z-index: 999;
  width: 25%;
  height: 400px;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  background-image: url("https://ftp.bmp.ovh/imgs/2020/11/f08ebcce8cafd715.jpg");
  /* background: blueviolet; */
}
.style-content {
  position: relative;
  width: 100%;
  height: 99%;
  overflow: auto;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.5);
}
.style-content::-webkit-scrollbar {
  display: none;
}
.style-code {
  margin: 1rem 0;
}

.icons {
  position: absolute;
  top: 16px;
  right: 24px;
  width: 50px;
  height: 50px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  opacity: 0.5;
  cursor: pointer;
  z-index: 999;
}
.disp {
  opacity: 0;
  transition: all 0.5s;
  z-index: -1 !important;
}
</style>
