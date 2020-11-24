<template>
  <div>
    <div :class="sticky ? 'sticky' : ''" id="topNavBar" class="topNavBar">
      <div class="topNavBar-inner clearfix">
        <a class="logo" href="#" alt="logo" style="float: left">
          <span class="rs">孙一钫</span>
          <span class="card">.CV</span>
        </a>
        <nav class="menu" style="float: right">
          <ul class="clearfix">
            <li>
              <a href="#siteAbout">关于</a>
            </li>
            <li>
              <a href="#siteSkills">技能</a>
            </li>
            <li>
              <a href="#siteWorks">作品</a>
              <ul class="submenu">
                <li>作品1</li>
                <li>作品2</li>
                <li>作品3</li>
              </ul>
            </li>
            <li>
              <a href="#">博客</a>
              <ul class="submenu">
                <li>博客1</li>
                <li>博客2</li>
                <li>博客3</li>
              </ul>
            </li>
            <li>
              <a href="#">日历</a>
            </li>
            <li>
              <a href="#">联系方式</a>
            </li>
            <li>
              <a href="#">其他</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="banner">
      <div class="mask"></div>
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

      <div class="zijigexinghuadingzhicode">
        <div class="downloadResume-wrapper">
          <div class="downloadResume" target="_blank">
            自己个性化定制书写内容区域
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
            <div class="progress" style="width: 20%"></div>
          </div>
        </li>
        <li>
          <h3>jQuery</h3>
          <div class="progressBar">
            <div class="progress" style="width: 30%"></div>
          </div>
        </li>
        <li>
          <h3>Vue.js</h3>
          <div class="progressBar">
            <div class="progress" style="width: 40%"></div>
          </div>
        </li>
        <li>
          <h3>React.js</h3>
          <div class="progressBar">
            <div class="progress" style="width: 50%"></div>
          </div>
        </li>
        <li>
          <h3>Node.js</h3>
          <div class="progressBar">
            <div class="progress" style="width: 60%"></div>
          </div>
        </li>
        <li>
          <h3>express</h3>
          <div class="progressBar">
            <div class="progress" style="width: 60%"></div>
          </div>
        </li>
        <li>
          <h3>mongoDB</h3>
          <div class="progressBar">
            <div class="progress" style="width: 60%"></div>
          </div>
        </li>
        <li>
          <h3>java</h3>
          <div class="progressBar">
            <div class="progress" style="width: 60%"></div>
          </div>
        </li>
        <li>
          <h3>python</h3>
          <div class="progressBar">
            <div class="progress" style="width: 60%"></div>
          </div>
        </li>
      </ol>
    </section>
    <section class="portfolio" id="siteWorks">
      <h2>作品集</h2>
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

      <div class="works" style="height: 597px">
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
    </section>
    <div class="continue">
      <h1>继续写....</h1>
      <h1>继续写未完待续</h1>
    </div>
    <div v-html="resStyleCode"></div>
  </div>
</template>

<script>
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
  components: {},
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
      touxiang:
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3839069834,893282384&fm=26&gp=0.jpg",
      resStyleCode: "",
    };
  },
  //方法 函数写这里
  methods: {
    portfolio1() {
      console.log("进入portfolio1");
      this.bar1 = true;
      this.bar2 = false;
      this.bar3 = false;
    },
    portfolio2() {
      console.log("进入portfolio2");
      this.bar1 = false;
      this.bar2 = true;
      this.bar3 = false;
    },
    portfolio3() {
      console.log("进入portfolio3");
      this.bar1 = false;
      this.bar2 = false;
      this.bar3 = true;
    },
    responseStyleCode: function (code) {
      this.resStyleCode = "<style>" + code + "</style>";
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
        if (top > 300) {
          this.width1 = 90 + "%";
          // console.log(this.$refs)
          // this.$refs.html1.style.width = 200 +'px'
          // this.$refs.html1.style.width = 95 +'%'
        }
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
.banner {
  //   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/8af5cf9a2d77f24b.jpg");
  //   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/8a4cc379aa2946d3.jpg");
  background-image: url("https://ftp.bmp.ovh/imgs/2020/11/6caf0551ed54959a.jpg");
  //   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/3980c091a6a013ab.jpg");
  //   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/7cf9ef0940af8cc1.jpg");
  //   background-image: url("https://ftp.bmp.ovh/imgs/2020/11/01abe6226b6c1574");
}
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
</style>
