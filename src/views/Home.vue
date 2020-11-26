<template>
  <div class="example-3d">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swp"
        ><img
          src="https://ftp.bmp.ovh/imgs/2020/11/8af5cf9a2d77f24b.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://ftp.bmp.ovh/imgs/2020/11/8a4cc379aa2946d3.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://ftp.bmp.ovh/imgs/2020/11/6caf0551ed54959a.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://ftp.bmp.ovh/imgs/2020/11/3980c091a6a013ab.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://ftp.bmp.ovh/imgs/2020/11/7cf9ef0940af8cc1.jpg"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://ftp.bmp.ovh/imgs/2020/11/01abe6226b6c1574.jpg"
          alt=""
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "swiper-example-3d-cube",
  title: "3D Cube effect",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        speed: 500,
        //各种样式可以尝试一下
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        //分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        //上一张下一张
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
<style  lang="scss" scoped>
.swiper {
  width: 400px;
  height: 400px;
  img {
    width: 100%;
  }
}
.swp {
  width: 400px;
  height: 400px;
  img {
    width: 100%;
  }
}
</style>