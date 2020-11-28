<template>
  <div>
    <el-backtop :bottom="100">
      <div
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }
        "
      >
        ⏫
      </div>
    </el-backtop>
    <div :class="sticky ? 'sticky' : ''" id="topNavBar" class="topNavBar">
      <div class="topNavBar-inner clearfix">
        <a class="logo" href="#" alt="logo" style="float: left">
          <span class="rs">孙一钫</span>
          <span class="card">.CV</span>
        </a>
        <nav class="menu" style="float: right">
          <ul class="clearfix">
            <li>
              <a href="#">关于</a>
            </li>
            <li>
              <a href="#aboout-me">简介</a>
            </li>
            <li>
              <a href="#siteSkills">技能</a>
            </li>
            <li>
              <a href="#siteWorks1">作品</a>
              <ul class="submenu">
                <li>作品1</li>
                <li>作品2</li>
                <li>作品3</li>
              </ul>
            </li>
            <li>
              <a href="#siteWorks">经历</a>
              <ul class="submenu">
                <li>博客1</li>
                <li>博客2</li>
                <li>博客3</li>
              </ul>
            </li>
            <li>
              <a href="#contect" class="btn btn-primary btn-jittery"
                >联系方式</a
              >
            </li>
            <li>
              <a href="#">其他</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="banner">
      <ul class="ken-burns-slideshow">
        <li class="slide" id="slide1"></li>
        <li class="slide" id="slide2"></li>
        <li class="slide" id="slide3"></li>
        <li class="slide" id="slide4"></li>
      </ul>
      <!-- <div class="mask"></div> -->
    </div>
    <main>
      <div data-x id="siteAbout" class="userCard">
        <div class="pictureAndText clearfix">
          <div class="picture">
            <img v-lazy="touxiang" width="299" height="347" alt="头像" />
          </div>
          <div class="text">
            <span class="welcome"
              >Hello
              <span class="triangle"></span>
            </span>
            <h1>小贝</h1>
            <p>前端开发工程师</p>
            <hr />
            <dl>
              <dt>年龄</dt>
              <dd>18</dd>
              <dt>所在城市</dt>
              <dd>上海</dd>
              <dt>邮箱</dt>
              <dd>xiaobei@foxmail.com</dd>
              <dt>手机</dt>
              <dd>18888888888</dd>
            </dl>
          </div>
        </div>
        <footer class="media">
          <a href="#">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github"></use>
            </svg>
          </a>
          <a href="#">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Ankerwebicon-"></use>
            </svg>
          </a>
          <a href="#">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weibo"></use>
            </svg>
          </a>
        </footer>
      </div>

      <div class="zijigexinghuadingzhicode" id="aboout-me">
        <div class="downloadResume-wrapper">
          <div class="downloadResume" target="_blank">
            <div
              class="text-grad-underline text-left"
              data-text="Who  Am  I. "
            ></div>
          </div>
        </div>

        <p class="selfIntroduction">
          小贝， 资深前端工程师 精通vue react html JavaScript css3 小程序
          <br />
          技能：前端开发，php 开发，Node.js express, koa, koa2,eggjs,开发
          <br />骨灰级BAT前端架构师，广泛涉猎各种前沿的前端技术,对前端技术以及高并发有着深刻的研究！
        </p>
      </div>
    </main>
    <div class="contectt" id="contect">
      <ul class="icon-list">
        <li class="icon-list__item">
          <a target="_blank">
            <div class="box">
              <div class="box__face box__face--front">
                <svg
                  t="1580194450242"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9911"
                  width="40"
                  height="40"
                >
                  <path
                    d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"
                    p-id="9912"
                    fill="#545454"
                  ></path>
                </svg>
              </div>
              <div class="box__face box__face--back"></div>
              <div class="box__face box__face--right"></div>
              <div class="box__face box__face--left"></div>
              <div class="box__face box__face--top"></div>
              <div class="box__face box__face--bottom"></div>
            </div>
          </a>
        </li>
        <li class="icon-list__item">
          <a href="https://codepen.io/alphardex" target="_blank">
            <div class="box">
              <div class="box__face box__face--front">
                <svg
                  t="1580194836809"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="10289"
                  width="40"
                  height="40"
                >
                  <path
                    d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z"
                    p-id="10290"
                    fill="#545454"
                  ></path>
                </svg>
              </div>
              <div class="box__face box__face--back"></div>
              <div class="box__face box__face--right"></div>
              <div class="box__face box__face--left"></div>
              <div class="box__face box__face--top"></div>
              <div class="box__face box__face--bottom"></div>
            </div>
          </a>
        </li>
        <li class="icon-list__item">
          <a href="https://github.com/alphardex" target="_blank">
            <div class="box">
              <div class="box__face box__face--front">
                <svg
                  t="1580194880319"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="10619"
                  width="40"
                  height="40"
                >
                  <path
                    d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"
                    p-id="10620"
                    fill="#545454"
                  ></path>
                </svg>
              </div>
              <div class="box__face box__face--back"></div>
              <div class="box__face box__face--right"></div>
              <div class="box__face box__face--left"></div>
              <div class="box__face box__face--top"></div>
              <div class="box__face box__face--bottom"></div>
            </div>
          </a>
        </li>
        <li class="icon-list__item">
          <a
            href="https://www.linkedin.com/in/nameless-god-60970313a"
            target="_blank"
          >
            <div class="box">
              <div class="box__face box__face--front">
                <svg
                  t="1580194916849"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="10901"
                  width="40"
                  height="40"
                >
                  <path
                    d="M208.603429 808.009143l132.022857 0 0-396.580571-132.022857 0 0 396.580571zM349.110857 289.133714q-0.585143-29.696-20.553143-49.152t-53.174857-19.456-53.979429 19.456-20.845714 49.152q0 29.110857 20.260571 48.859429t52.882286 19.748571l0.585143 0q33.718857 0 54.272-19.748571t20.553143-48.859429zM683.446857 808.009143l132.022857 0 0-227.401143q0-87.990857-41.691429-133.12t-110.299429-45.129143q-77.677714 0-119.442286 66.852571l1.170286 0 0-57.709714-132.022857 0q1.682286 37.741714 0 396.580571l132.022857 0 0-221.696q0-21.723429 4.022857-32.036571 8.557714-19.968 25.746286-34.011429t42.276571-13.970286q66.267429 0 66.267429 89.746286l0 211.968zM950.857143 237.714286l0 548.571429q0 68.022857-48.274286 116.297143t-116.297143 48.274286l-548.571429 0q-68.022857 0-116.297143-48.274286t-48.274286-116.297143l0-548.571429q0-68.022857 48.274286-116.297143t116.297143-48.274286l548.571429 0q68.022857 0 116.297143 48.274286t48.274286 116.297143z"
                    p-id="10902"
                    fill="#545454"
                  ></path>
                </svg>
              </div>
              <div class="box__face box__face--back"></div>
              <div class="box__face box__face--right"></div>
              <div class="box__face box__face--left"></div>
              <div class="box__face box__face--top"></div>
              <div class="box__face box__face--bottom"></div>
            </div>
          </a>
        </li>
        <li class="icon-list__item">
          <a href="https://www.instagram.com/mumei_ouja" target="_blank">
            <div class="box">
              <div class="box__face box__face--front">
                <svg
                  t="1580194981209"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="11741"
                  width="40"
                  height="40"
                >
                  <path
                    d="M851.456 814.884571l0-370.322286-77.165714 0q11.410286 35.986286 11.410286 74.825143 0 71.972571-36.571429 132.827429t-99.401143 96.256-137.142857 35.401143q-112.566857 0-192.585143-77.458286t-80.018286-187.172571q0-38.838857 11.410286-74.825143l-80.603429 0 0 370.322286q0 14.848 10.020571 24.868571t24.868571 10.020571l610.889143 0q14.262857 0 24.576-10.020571t10.313143-24.868571zM689.152 510.317714q0-70.875429-51.712-120.832t-124.854857-50.029714q-72.557714 0-124.269714 50.029714t-51.712 120.832 51.712 120.832 124.269714 50.029714q73.142857 0 124.854857-50.029714t51.712-120.832zM851.456 304.566857l0-94.281143q0-16.018286-11.410286-27.721143t-28.013714-11.702857l-99.401143 0q-16.603429 0-28.013714 11.702857t-11.410286 27.721143l0 94.281143q0 16.603429 11.410286 28.013714t28.013714 11.410286l99.401143 0q16.603429 0 28.013714-11.410286t11.410286-28.013714zM950.857143 185.709714l0 652.580571q0 46.299429-33.133714 79.433143t-79.433143 33.133714l-652.580571 0q-46.299429 0-79.433143-33.133714t-33.133714-79.433143l0-652.580571q0-46.299429 33.133714-79.433143t79.433143-33.133714l652.580571 0q46.299429 0 79.433143 33.133714t33.133714 79.433143z"
                    p-id="11742"
                    fill="#545454"
                  ></path>
                </svg>
              </div>
              <div class="box__face box__face--back"></div>
              <div class="box__face box__face--right"></div>
              <div class="box__face box__face--left"></div>
              <div class="box__face box__face--top"></div>
              <div class="box__face box__face--bottom"></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <section data-x id="siteSkills" class="skills">
      <h2>技能</h2>
      <ol class="clearfix">
        <li>
          <h3>HTML 5 &amp; CSS 3</h3>
          <div class="progressBar">
            <div ref="html1" class="progress" :style="{ width: width1 }"></div>
          </div>
        </li>
        <li>
          <h3>JavaScript</h3>
          <div class="progressBar">
            <div class="progress" :style="{ width: width2 }"></div>
          </div>
        </li>
        <li>
          <h3>jQuery</h3>
          <div class="progressBar">
            <div class="progress" :style="{ width: width3 }"></div>
          </div>
        </li>
        <li>
          <h3>Vue.js</h3>
          <div class="progressBar">
            <div class="progress" :style="{ width: width4 }"></div>
          </div>
        </li>
        <li>
          <h3>React.js</h3>
          <div class="progressBar">
            <div class="progress" :style="{ width: width5 }"></div>
          </div>
        </li>
        <li>
          <h3>Node.js</h3>
          <div class="progressBar">
            <div class="progress" :style="{ width: width6 }"></div>
          </div>
        </li>
        <li>
          <h3>express</h3>
          <div class="progressBar">
            <div class="progress" :style="{ width: width7 }"></div>
          </div>
        </li>
        <li>
          <h3>mongoDB</h3>
          <div class="progressBar">
            <div class="progress" :style="{ width: width8 }"></div>
          </div>
        </li>
        <li>
          <h3>java</h3>
          <div class="progressBar">
            <div class="progress" :style="{ width: width9 }"></div>
          </div>
        </li>
        <li>
          <h3>python</h3>
          <div class="progressBar">
            <div class="progress" :style="{ width: width10 }"></div>
          </div>
        </li>
      </ol>
    </section>
    <div class="add" id="siteWorks1">
      <h2>作品集</h2>
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
    <section class="portfolio" id="siteWorks">
      <h2>个人经历</h2>
      <nav>
        <ol class="clearfix">
          <li @click="portfolio1">所有</li>
          <li @click="portfolio2">框架</li>
          <li @click="portfolio3">原生JS&amp;CSS</li>
        </ol>
        <div
          id="portfolioBar"
          :class="{
            bar: true,
            'state-1': bar1,
            'state-2': bar2,
            'state-3': bar3,
          }"
        >
          <div class="bar-inner"></div>
        </div>
      </nav>

      <transition name="myadd">
        <div v-if="addflag" class="works" style="height: 597px">
          <div class="big" style="top: 0; left: 0">
            <img
              src="https://ftp.bmp.ovh/imgs/2020/11/1ada6c681f4ff642.jpg"
              alt="作品1"
            />
          </div>
          <div class="small" style="top: 0; left: 645px">
            <img
              src="https://ftp.bmp.ovh/imgs/2020/11/66e27522ff9b4a04.jpg"
              alt="作品2"
            />
          </div>
          <div class="small" style="top: 312px; left: 645px">
            <img
              src="https://ftp.bmp.ovh/imgs/2020/11/0a79d95e76a6590f.jpg"
              alt="作品3"
            />
          </div>
        </div>
      </transition>
      <transition name="myadd">
        <div v-if="addflag1" class="works" style="height: 597px">
          <div class="big" style="top: 0; left: 0">
            <img
              src="https://ftp.bmp.ovh/imgs/2020/11/1ada6c681f4ff642.jpg"
              alt="作品1"
            />
          </div>
          <div class="small" style="top: 0; left: 645px">
            <img
              src="https://ftp.bmp.ovh/imgs/2020/11/66e27522ff9b4a04.jpg"
              alt="作品2"
            />
          </div>
          <div class="small" style="top: 312px; left: 645px">
            <img
              src="https://ftp.bmp.ovh/imgs/2020/11/0a79d95e76a6590f.jpg"
              alt="作品3"
            />
          </div>
        </div>
      </transition>
      <transition name="myadd">
        <div v-if="addflag2" class="works" style="height: 597px">
          <div class="big" style="top: 0; left: 0">
            <img
              src="https://ftp.bmp.ovh/imgs/2020/11/1ada6c681f4ff642.jpg"
              alt="作品1"
            />
          </div>
          <div class="small" style="top: 0; left: 645px">
            <img
              src="https://ftp.bmp.ovh/imgs/2020/11/66e27522ff9b4a04.jpg"
              alt="作品2"
            />
          </div>
          <div class="small" style="top: 312px; left: 645px">
            <img
              src="https://ftp.bmp.ovh/imgs/2020/11/0a79d95e76a6590f.jpg"
              alt="作品3"
            />
          </div>
        </div>
      </transition>
    </section>

    <div v-html="resStyleCode"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  //组件名字
  name: "comfilmlisttopnav",
  //接收父组件给的东西 type是接收什么东西  default 默认值
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    color: {
      type: String,
      default: "#000",
    },
  },
  //组件注册
  components: {
    swiper,
    swiperSlide,
  },
  // vue数据集中管理
  data() {
    return {
      value: "1",
      isbar: true,
      bar1: true,
      bar2: false,
      bar3: false,
      sticky: false,
      width1: 10 + "%",
      width2: 10 + "%",
      width3: 10 + "%",
      width4: 10 + "%",
      width5: 10 + "%",
      width6: 10 + "%",
      width7: 10 + "%",
      width8: 10 + "%",
      width9: 10 + "%",
      width10: 10 + "%",
      touxiang:
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3839069834,893282384&fm=26&gp=0.jpg",
      resStyleCode: "",
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
      addflag: true,
      addflag1: false,
      addflag2: false,
    };
  },
  //方法 函数写这里
  methods: {
    portfolio1() {
      // console.log("进入portfolio1");
      this.bar1 = true;
      this.bar2 = false;
      this.bar3 = false;
      this.addflag = true;
      this.addflag1 = false;
      this.addflag2 = false;
    },
    portfolio2() {
      console.log("进入portfolio2");
      this.bar1 = false;
      this.bar2 = true;
      this.bar3 = false;
      this.addflag = false;
      this.addflag1 = false;
      this.addflag2 = true;
    },
    portfolio3() {
      console.log("进入portfolio3");
      this.bar1 = false;
      this.bar2 = false;
      this.bar3 = true;
      this.addflag = false;
      this.addflag1 = false;
      this.addflag2 = true;
    },
    responseStyleCode: function (code) {
      this.resStyleCode = "<style>" + code + "</style>";
    },
    showHobby(name, cd) {
      setTimeout((name, cd) => {
        this.name = cd + "%";
      }, 1000);
    },
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {
    toUpcase(value) {
      return value ? value.toUpperCase() : "";
    },
  },
  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  created() {},
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {
    window.addEventListener(
      "scroll",
      (e) => {
        let top = document.documentElement.scrollTop;
        if (top > 490 && top < 1371) {
          this.width1 = Math.random() * 100 + "%";
          this.width2 = Math.random() * 100 + "%";
          this.width3 = Math.random() * 100 + "%";
          this.width4 = Math.random() * 100 + "%";
          this.width5 = Math.random() * 100 + "%";
          this.width6 = Math.random() * 100 + "%";
          this.width7 = Math.random() * 100 + "%";
          this.width8 = Math.random() * 100 + "%";
          this.width9 = Math.random() * 100 + "%";
          this.width10 = Math.random() * 100 + "%";
          // let that = this;
          // this.showHobby(that.width10, 90);
          setTimeout(() => {
            this.width1 = 90 + "%";
          }, 100);
          setTimeout(() => {
            this.width2 = 90 + "%";
          }, 200);
          setTimeout(() => {
            this.width3 = 90 + "%";
          }, 300);
          setTimeout(() => {
            this.width4 = 90 + "%";
          }, 400);
          setTimeout(() => {
            this.width5 = 90 + "%";
          }, 500);
          setTimeout(() => {
            this.width6 = 90 + "%";
          }, 600);
          setTimeout(() => {
            this.width7 = 90 + "%";
          }, 700);
          setTimeout(() => {
            this.width8 = 90 + "%";
          }, 800);
          setTimeout(() => {
            this.width9 = 90 + "%";
          }, 900);
          setTimeout(() => {
            this.width10 = 90 + "%";
          }, 900);
        }
        // else {
        //   if (this.width1 == "0%") return;
        //   this.width1 = 0 + "%";
        //   this.width2 = 0 + "%";
        //   this.width3 = 0 + "%";
        //   this.width4 = 0 + "%";
        //   this.width5 = 0 + "%";
        //   this.width6 = 0 + "%";
        //   this.width7 = 0 + "%";
        //   this.width8 = 0 + "%";
        //   this.width9 = 0 + "%";
        //   this.width10 = 0 + "%";
        //   console.log(123);
        // }
        if (top > 200) {
          this.sticky = true;
        } else {
          this.sticky = false;
        }
      },
      true
    );
  },
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //组件路由守卫enter
  beforeRouteEnter(to, from, next) {
    next((vm) => {});
    // 注意，在路由进入之前，组件实例还未渲染，所以无法获取this实例，只能通过vm来访问组件实例
  },
  //组件路由守卫update更新
  beforeRouteUpdate(to, from, next) {
    // 同一页面，刷新不同数据时调用，
    next();
  },
  //组件路由守卫离开
  beforeRouteLeave(to, from, next) {
    // 离开当前路由页面时调用
    next();
  },
};
</script>


<style lang="scss">
@import url("https://cdn.jsdelivr.net/gh/alphardex/aqua.css@master/dist/aqua.min.css");
@import url("https://cdn.jsdelivr.net/gh/alphardex/aqua.css@master/dist/aqua.css");
// .banner {
//   //   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/8af5cf9a2d77f24b.jpg");
//   //   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/8a4cc379aa2946d3.jpg");
//   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/6caf0551ed54959a.jpg");
//   //   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/3980c091a6a013ab.jpg");
//   //   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/7cf9ef0940af8cc1.jpg");
//   //   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/01abe6226b6c1574");
// }
.userCard > footer.media {
  background: #e6686a;
  text-align: center;
}
.userCard > footer.media > a {
  display: inline-block;
  width: 40px;
  line-height: 30px;
  padding: 5px 0;
  border-radius: 50%;
  margin: 16px;
}
.userCard > footer.media > a:hover {
  background: #cf5d5f;
}
.swiper {
  width: 100%;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
  }
}

//标题文档
.text-grad-underline {
  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  display: inline;
  font-size: 5.4rem;
  line-height: 1.5;
  font-weight: bold;
  font-style: italic;
}

.text-grad-underline::before,
.text-grad-underline::after {
  content: attr(data-text);
}

.text-grad-underline::before {
  position: absolute;
  color: transparent;
  background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(var(--primary-color)),
      color-stop(50%, var(--info-color-darker)),
      to(var(--primary-color))
    )
    0/500% no-repeat;
  background: linear-gradient(
      90deg,
      var(--primary-color) 0%,
      var(--info-color-darker) 50%,
      var(--primary-color) 100%
    )
    0/500% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-animation: flow 1s linear infinite;
  animation: flow 1s linear infinite;
}

.text-grad-underline::after {
  color: transparent;
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(70%, transparent),
      color-stop(0, var(--secondary-color)),
      color-stop(0, transparent)
    )
    0 0/0% 100% no-repeat;
  background: linear-gradient(
      transparent 70%,
      var(--secondary-color) 0 85%,
      transparent 0 100%
    )
    0 0/0% 100% no-repeat;
  -webkit-animation: stroke 1.6s 0.3s var(--ease-in-out-cubic) forwards;
  animation: stroke 1.6s 0.3s var(--ease-in-out-cubic) forwards;
}

@-webkit-keyframes flow {
  from {
    background-position: 0;
  }

  to {
    background-position: 100%;
  }
}

@keyframes flow {
  from {
    background-position: 0;
  }

  to {
    background-position: 100%;
  }
}

@-webkit-keyframes stroke {
  to {
    background-size: 100% 100%;
  }
}

@keyframes stroke {
  to {
    background-size: 100% 100%;
  }
}
//联系按钮
.btn {
  cursor: pointer;
}
.btn-jittery {
  -webkit-animation: jittery 4s infinite;
  animation: jittery 4s infinite;
}
@-webkit-keyframes jittery {
  5%,
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  15% {
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
  }

  20% {
    -webkit-transform: scale(1.15) rotate(-5deg);
    transform: scale(1.15) rotate(-5deg);
  }

  25% {
    -webkit-transform: scale(1.15) rotate(5deg);
    transform: scale(1.15) rotate(5deg);
  }

  30% {
    -webkit-transform: scale(1.15) rotate(-3deg);
    transform: scale(1.15) rotate(-3deg);
  }

  35% {
    -webkit-transform: scale(1.15) rotate(2deg);
    transform: scale(1.15) rotate(2deg);
  }

  40% {
    -webkit-transform: scale(1.15) rotate(0);
    transform: scale(1.15) rotate(0);
  }
}

@keyframes jittery {
  5%,
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  15% {
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
  }

  20% {
    -webkit-transform: scale(1.15) rotate(-5deg);
    transform: scale(1.15) rotate(-5deg);
  }

  25% {
    -webkit-transform: scale(1.15) rotate(5deg);
    transform: scale(1.15) rotate(5deg);
  }

  30% {
    -webkit-transform: scale(1.15) rotate(-3deg);
    transform: scale(1.15) rotate(-3deg);
  }

  35% {
    -webkit-transform: scale(1.15) rotate(2deg);
    transform: scale(1.15) rotate(2deg);
  }

  40% {
    -webkit-transform: scale(1.15) rotate(0);
    transform: scale(1.15) rotate(0);
  }
}
//底部联系导航栏

.icon-list {
  display: flex;
  list-style-type: none;
  margin: 0px auto;
}

.icon-list .icon-list__item {
  margin: 0 40px;
}

.icon-list .icon-list__item a .box {
  --box-width: 80px;
  --box-height: 80px;
  --box-depth: 20px;
  width: var(--box-width);
  height: var(--box-height);
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(55deg) rotateZ(45deg);
  transition: 0.5s;
}

.icon-list .icon-list__item a .box .box__face {
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.icon-list .icon-list__item a .box .box__face--front,
.icon-list .icon-list__item a .box .box__face--back {
  width: var(--box-width);
  height: var(--box-height);
  line-height: var(--box-height);
}

.icon-list .icon-list__item a .box .box__face--right,
.icon-list .icon-list__item a .box .box__face--left {
  width: var(--box-depth);
  height: var(--box-height);
  left: calc((var(--box-width) - var(--box-depth)) / 2);
  line-height: var(--box-height);
}

.icon-list .icon-list__item a .box .box__face--top,
.icon-list .icon-list__item a .box .box__face--bottom {
  width: var(--box-width);
  height: var(--box-depth);
  top: calc((var(--box-height) - var(--box-depth)) / 2);
  line-height: var(--box-depth);
}

.icon-list .icon-list__item a .box .box__face--front {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  transition: 0.5s;
}

.icon-list .icon-list__item a .box .box__face--front svg {
  transform: rotate(270deg);
}

.icon-list .icon-list__item a .box .box__face--front svg path {
  transition: 0.5s;
}

.icon-list .icon-list__item a .box .box__face--right {
  background: #e6e6e6;
  transition: 0.5s;
}

.icon-list .icon-list__item a .box .box__face--bottom {
  background: #b3b3b3;
  transition: 0.5s;
}

.icon-list .icon-list__item a .box .box__face--back {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.icon-list .icon-list__item a .box .box__face--front {
  transform: rotateY(0deg) translateZ(calc(var(--box-depth) / 2));
}

.icon-list .icon-list__item a .box .box__face--back {
  transform: rotateY(180deg) translateZ(calc(var(--box-depth) / 2));
}

.icon-list .icon-list__item a .box .box__face--right {
  transform: rotateY(90deg) translateZ(calc(var(--box-width) / 2));
}

.icon-list .icon-list__item a .box .box__face--left {
  transform: rotateY(-90deg) translateZ(calc(var(--box-width) / 2));
}

.icon-list .icon-list__item a .box .box__face--top {
  transform: rotateX(90deg) translateZ(calc(var(--box-height) / 2));
}

.icon-list .icon-list__item a .box .box__face--bottom {
  transform: rotateX(-90deg) translateZ(calc(var(--box-height) / 2));
}

.icon-list .icon-list__item:hover:nth-child(1) a .box {
  transform: rotateX(55deg) rotateZ(45deg) translateZ(20px);
}

.icon-list .icon-list__item:hover:nth-child(1) a .box .box__face--back {
  box-shadow: -30px 30px 50px rgba(0, 0, 0, 0.5);
}

.icon-list .icon-list__item:hover:nth-child(1) a .box__face--front {
  background: #00aced;
}

.icon-list .icon-list__item:hover:nth-child(1) a .box__face--front svg path {
  fill: white;
}

.icon-list .icon-list__item:hover:nth-child(1) a .box__face--right {
  background: #0099d4;
}

.icon-list .icon-list__item:hover:nth-child(1) a .box__face--bottom {
  background: #0087ba;
}

.icon-list .icon-list__item:hover:nth-child(2) a .box {
  transform: rotateX(55deg) rotateZ(45deg) translateZ(20px);
}

.icon-list .icon-list__item:hover:nth-child(2) a .box .box__face--back {
  box-shadow: -30px 30px 50px rgba(0, 0, 0, 0.5);
}

.icon-list .icon-list__item:hover:nth-child(2) a .box__face--front {
  background: black;
}

.icon-list .icon-list__item:hover:nth-child(2) a .box__face--front svg path {
  fill: white;
}

.icon-list .icon-list__item:hover:nth-child(2) a .box__face--right {
  background: black;
}

.icon-list .icon-list__item:hover:nth-child(2) a .box__face--bottom {
  background: black;
}

.icon-list .icon-list__item:hover:nth-child(3) a .box {
  transform: rotateX(55deg) rotateZ(45deg) translateZ(20px);
}

.icon-list .icon-list__item:hover:nth-child(3) a .box .box__face--back {
  box-shadow: -30px 30px 50px rgba(0, 0, 0, 0.5);
}

.icon-list .icon-list__item:hover:nth-child(3) a .box__face--front {
  background: #24292e;
}

.icon-list .icon-list__item:hover:nth-child(3) a .box__face--front svg path {
  fill: white;
}

.icon-list .icon-list__item:hover:nth-child(3) a .box__face--right {
  background: #191c20;
}

.icon-list .icon-list__item:hover:nth-child(3) a .box__face--bottom {
  background: #0e1011;
}

.icon-list .icon-list__item:hover:nth-child(4) a .box {
  transform: rotateX(55deg) rotateZ(45deg) translateZ(20px);
}

.icon-list .icon-list__item:hover:nth-child(4) a .box .box__face--back {
  box-shadow: -30px 30px 50px rgba(0, 0, 0, 0.5);
}

.icon-list .icon-list__item:hover:nth-child(4) a .box__face--front {
  background: #007bb6;
}

.icon-list .icon-list__item:hover:nth-child(4) a .box__face--front svg path {
  fill: white;
}

.icon-list .icon-list__item:hover:nth-child(4) a .box__face--right {
  background: #006a9d;
}

.icon-list .icon-list__item:hover:nth-child(4) a .box__face--bottom {
  background: #005983;
}

.icon-list .icon-list__item:hover:nth-child(5) a .box {
  transform: rotateX(55deg) rotateZ(45deg) translateZ(20px);
}

.icon-list .icon-list__item:hover:nth-child(5) a .box .box__face--back {
  box-shadow: -30px 30px 50px rgba(0, 0, 0, 0.5);
}

.icon-list .icon-list__item:hover:nth-child(5) a .box__face--front {
  background: #e4405f;
}

.icon-list .icon-list__item:hover:nth-child(5) a .box__face--front svg path {
  fill: white;
}

.icon-list .icon-list__item:hover:nth-child(5) a .box__face--right {
  background: #e12a4c;
}

.icon-list .icon-list__item:hover:nth-child(5) a .box__face--bottom {
  background: #d31e40;
}
.contectt {
  display: flex;
  height: 249px;
  align-items: center;
}
//作品动画效果
// @keyframes bounce-in {
//   0% {
//     transform: scale(0);
//   }
//   50% {
//     transform: scale(1.5);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
// .fmyadd-enter-active {
//   transform-origin: left center;
//   animation: bounce-in 1s;
// }
// .myadd-leave-active {
//   transform-origin: left center;
//   animation: bounce-in 1s reverse;
// }
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}
.myadd-enter,
.myadd-leave-to {
  opacity: 0;
  transform: translateY(150px);
}
.myadd-enter-active,
.myadd-leave-active {
  transition: all 0.8s ease;
}

.showadd {
  display: block !important;
}
</style>
