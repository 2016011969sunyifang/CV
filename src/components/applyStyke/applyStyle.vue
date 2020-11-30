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
    <!-- <div class="main" v-title data-title="登录"></div> -->
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
            </li>
            <li>
              <a href="#siteWorks">经历</a>
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
            <h1>孙一钫</h1>
            <p>前端开发工程师</p>
            <hr />
            <dl>
              <dt>年龄</dt>
              <dd>23</dd>
              <dt>所在城市</dt>
              <dd>上海</dd>
              <dt>毕业院校</dt>
              <dd>东北师范大学</dd>
              <dt>邮箱</dt>

              <dd>sunyf0602@163.com</dd>
              <dt>手机</dt>
              <dd>15694302859</dd>
            </dl>
          </div>
        </div>
        <footer class="media"></footer>
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
        <li class="icon-list__item" @click="contacts1">
          <a target="_blank">
            <div class="box">
              <div class="box__face box__face--front">
                <svg
                  t="1606559450651"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6412"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="32"
                  height="32"
                >
                  <path
                    d="M512 67C266.265 67 67 266.262 67 512.008 67 757.753 266.236 956.985 512 957c245.735-0.015 445-199.262 445-445.007C957 266.247 757.764 67 512 67zM512 927.319c-229.019 0-415.333-186.297-415.333-415.312 0-229.03 186.314-415.342 415.333-415.313 229.019-0.015 415.334 186.282 415.334 415.313C927.334 741.022 741.019 927.319 512 927.319z"
                    p-id="6413"
                  ></path>
                  <path
                    d="M731.038 495.117c-24.583-16.991-37.04-41.153-37.04-71.818 0-134.846-108.846-183.792-181.998-183.792s-181.998 48.946-181.998 183.792c0 30.665-12.457 54.827-37.055 71.833-18.411 12.762-60.84 63.389-36.344 143.261l2.824 9.242 9.561-1.521c18.976-3.014 28.929-19.918 34.433-29.841 4.549 19.077 22.945 36.678 35.432 44.326 1.261 0.782 2.13 1.637 2.709 2.36-0.507 0.087-1.13 0.16-1.897 0.203-13.718 0.695-31.317 9.546-38.372 25.133-5.215 11.486-3.332 23.813 5.302 34.721 23.365 29.507 86.826 31.796 105.73 31.796 27.74 0 50.96-5.649 69.024-16.774 2.868-1.781 5.403-3.592 7.837-5.345 7.04-5.085 11.284-8.155 22.814-8.155s15.774 3.07 22.814 8.155c2.434 1.753 4.969 3.563 7.837 5.345 18.064 11.125 41.284 16.774 69.025 16.774 18.903 0 82.365-2.289 105.729-31.796 8.634-10.907 10.517-23.234 5.302-34.721-7.054-15.587-24.654-24.438-38.386-25.133-0.769-0.043-1.377-0.116-1.884-0.203 0.565-0.724 1.449-1.578 2.694-2.347 12.501-7.662 30.897-25.263 35.446-44.34 5.504 9.923 15.457 26.827 34.433 29.841l9.561 1.521 2.824-9.242C791.893 558.521 749.464 507.894 731.038 495.117zM749.493 619.084c-4.259-4.201-7.547-10.14-10.039-14.659-0.984-1.782-1.854-3.347-2.65-4.621-3.129-4.969-11.676-14.369-21.671-14.369-4.172 0-8.025 1.637-10.864 4.62-3.694 3.883-5.302 9.488-4.911 17.137 0.565 11.183-14.674 27.595-25.856 34.461-10.647 6.548-16.065 17.687-13.501 27.711 2.404 9.415 11.082 15.412 23.192 16.021 7.503 0.377 16.498 6.026 19.251 12.096 1.058 2.347 1.955 6.112-2.478 11.719-12.776 16.137-53.554 23.364-88.289 23.364-23.555 0-42.85-4.533-57.35-13.471-2.375-1.464-4.461-2.984-6.489-4.433-8.012-5.809-17.108-12.371-35.838-12.371s-27.826 6.563-35.838 12.371c-2.028 1.448-4.114 2.969-6.489 4.433-14.5 8.938-33.795 13.471-57.349 13.471-34.736 0-75.514-7.228-88.29-23.364-4.433-5.606-3.534-9.372-2.478-11.719 2.753-6.069 11.733-11.719 19.237-12.096 12.124-0.608 20.802-6.605 23.206-16.021 2.564-10.039-2.854-21.163-13.516-27.726-11.168-6.852-26.407-23.264-25.842-34.446 0.391-7.663-1.217-13.254-4.91-17.137-2.84-2.983-6.692-4.62-10.864-4.62-9.995 0-18.543 9.4-21.7 14.398-0.768 1.245-1.637 2.81-2.622 4.592-2.491 4.52-5.78 10.458-10.039 14.659-15.499-70.936 30.624-105.324 31.116-105.657 38.546-26.668 46.629-63.735 46.629-90.128 0-127.776 104.5-161.542 159.748-161.542s159.748 33.766 159.748 161.542c0 26.393 8.083 63.46 46.614 90.113C718.869 513.76 764.992 548.148 749.493 619.084z"
                    p-id="6414"
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
        <li class="icon-list__item" @click="contacts2">
          <a>
            <div class="box">
              <div class="box__face box__face--front">
                <svg
                  t="1606559565379"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="7222"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="32"
                  height="32"
                >
                  <path
                    d="M315.827597 316.694849c-9.555633 0-19.058055 3.88754-25.752524 10.635221-6.693446 6.745634-10.635221 16.142655-10.635221 25.752524 0 9.501398 3.883447 19.004843 10.635221 25.752524 6.747681 6.639211 16.196891 10.582009 25.752524 10.582009 9.504468 0 19.007913-3.942799 25.698289-10.635221 6.747681-6.747681 10.637268-16.249079 10.637268-25.699312 0-9.609869-3.889587-19.005866-10.637268-25.752524C334.83551 320.582389 325.332065 316.694849 315.827597 316.694849L315.827597 316.694849zM315.827597 316.694849"
                    p-id="7223"
                  ></path>
                  <path
                    d="M591.231017 512.674359c-7.452739 0-14.852266 3.076058-20.138666 8.316409-5.29254 5.234211-8.372691 12.633738-8.372691 20.136619 0 7.504928 3.080152 14.846126 8.318456 20.138666 5.234211 5.290493 12.739139 8.314363 20.191878 8.314363 7.450692 0 14.84408-3.078105 20.138666-8.314363 5.2864-5.238304 8.31027-12.633738 8.31027-20.138666 0-7.502881-3.076058-14.848173-8.31027-20.136619C606.126262 515.698229 598.623381 512.674359 591.231017 512.674359L591.231017 512.674359zM591.231017 512.674359"
                    p-id="7224"
                  ></path>
                  <path
                    d="M501.38985 389.416104c9.501398 0 19.004843-3.942799 25.756617-10.635221 6.691399-6.747681 10.580986-16.249079 10.580986-25.752524 0-9.609869-3.889587-19.006889-10.580986-25.752524-6.807033-6.694469-16.309454-10.582009-25.756617-10.582009-9.555633 0-19.002796 3.88754-25.753547 10.635221-6.747681 6.745634-10.635221 16.142655-10.635221 25.752524 0 9.501398 3.88754 19.004843 10.635221 25.752524C482.387054 385.473305 491.833193 389.416104 501.38985 389.416104L501.38985 389.416104zM501.38985 389.416104"
                    p-id="7225"
                  ></path>
                  <path
                    d="M803.840276 80.05836 220.104465 80.05836c-77.313853 0-139.941216 62.844304-139.941216 140.426263l0 583.030753c0 77.585029 62.627363 140.427286 139.941216 140.427286L803.892465 943.942663c77.3159 0 139.943262-62.841234 139.943262-140.427286L943.835727 220.484623C943.781492 142.901641 881.150036 80.05836 803.840276 80.05836L803.840276 80.05836zM404.263765 658.823973c-32.662911 0-59.013045-6.693446-91.732238-13.118785l-91.508133 45.89119 26.186406-78.768995c-65.543785-45.839001-104.740506-104.84693-104.740506-176.707584 0-124.666324 117.913527-222.707244 261.848707-222.707244 128.762619 0 241.547335 78.335113 264.168542 183.887101-8.312316-0.972141-16.73515-1.564635-25.213241-1.564635-124.390032 0-222.596727 92.862991-222.596727 207.209272 0 19.113313 2.967588 37.360909 8.042163 54.906517C420.621315 658.390092 412.470681 658.823973 404.263765 658.823973L404.263765 658.823973zM790.449291 750.551094l19.704784 65.382103-71.803349-39.355333c-26.184359 6.585999-52.5304 13.170974-78.606289 13.170974-124.557854 0-222.654033-85.140099-222.654033-190.041264 0-104.687294 98.097202-190.046381 222.654033-190.046381 117.692492 0 222.432998 85.305875 222.432998 190.046381C882.177436 658.823973 843.035974 711.088314 790.449291 750.551094L790.449291 750.551094zM790.449291 750.551094"
                    p-id="7226"
                  ></path>
                  <path
                    d="M733.869668 512.674359c-7.450692 0-14.85022 3.076058-20.138666 8.316409-5.294586 5.234211-8.318456 12.633738-8.318456 20.136619 0 7.504928 3.082198 14.846126 8.318456 20.138666 5.234211 5.290493 12.68695 8.314363 20.138666 8.314363s14.84408-3.078105 20.136619-8.314363c5.290493-5.238304 8.312316-12.633738 8.312316-20.138666 0-7.502881-3.076058-14.848173-8.312316-20.136619C748.772077 515.698229 741.320361 512.674359 733.869668 512.674359L733.869668 512.674359zM733.869668 512.674359"
                    p-id="7227"
                  ></path>
                </svg>
                <!-- <svg
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
                </svg> -->
              </div>
              <div class="box__face box__face--back"></div>
              <div class="box__face box__face--right"></div>
              <div class="box__face box__face--left"></div>
              <div class="box__face box__face--top"></div>
              <div class="box__face box__face--bottom"></div>
            </div>
          </a>
        </li>
        <li class="icon-list__item" @click="contacts3">
          <a href="https://github.com/2016011969sunyifang" target="_blank">
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
        <li class="icon-list__item" @click="contacts4">
          <a>
            <div class="box">
              <div class="box__face box__face--front">
                <svg
                  t="1606558826424"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5529"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="32"
                  height="32"
                >
                  <path
                    d="M967.04512 317.93152c-24.94976-58.96704-60.62592-111.91808-106.112-157.37344-45.45536-45.45536-98.4064-81.16224-157.37344-106.112-61.07136-25.84064-125.90592-38.90688-192.75264-38.90688-66.82112 0-131.68128 13.09696-192.75264 38.90688-58.96704 24.94976-111.91808 60.62592-157.37344 106.112-45.45536 45.45536-81.16224 98.4064-106.112 157.37344C28.73344 379.00288 15.63136 443.83744 15.63136 510.65344c0 66.816 13.09696 131.68128 38.9376 192.72192 24.94976 58.96704 60.62592 111.88736 106.112 157.37344 45.45536 45.45536 98.4064 81.16224 157.37344 106.112 61.07136 25.84064 125.90592 38.90688 192.75264 38.90688 66.82112 0 131.68128-13.09696 192.75264-38.90688 58.96704-24.94976 111.91808-60.62592 157.37344-106.112 45.45536-45.45536 81.16224-98.4064 106.112-157.37344 25.84064-61.07136 38.90688-125.90592 38.90688-192.72192S992.85504 379.00288 967.04512 317.93152zM510.83776 952.46336c-243.63008 0-441.83552-198.17472-441.83552-441.8048s198.20544-441.8048 441.83552-441.8048c243.59936 0.03072 441.8048 198.20544 441.8048 441.8048S754.43712 952.46336 510.83776 952.46336zM763.86816 384.2048c0-4.8896-1.26976-8.51456-1.26976-12.13952l-154.1632 138.58304 153.07776 138.58304c1.26976-3.62496 1.26976-7.2448 1.26976-12.13952L762.78272 384.2048 763.86816 384.2048zM510.79168 557.57312l233.87136-216.84224c-8.51456-5.98016-19.20512-9.6-34.96448-9.6L311.87968 331.13088c-14.49472 0-25.36448 3.62496-34.96448 10.86976L510.79168 557.57312zM583.07072 536.01792l-59.0592 59.0592c-3.62496 3.62496-8.51456 4.8896-13.22496 4.8896-4.7104 0-9.6-1.26976-13.22496-4.8896l0 0 0 0-59.0592-59.0592-160.32256 144.5632c8.51456 5.98016 19.20512 9.6 33.69472 9.6l397.63968 0c14.49472 0 25.36448-3.62496 33.69472-9.6L583.07072 536.01792zM260.0704 372.0704c-1.26976 3.62496-2.3552 7.2448-2.3552 12.13952l0 253.07648c0 4.8896 1.26976 8.51456 1.26976 12.13952l154.1632-138.58304L260.0704 372.0704z"
                    p-id="5530"
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
        <li class="icon-list__item" @click="contacts5">
          <a
            href="https://blog.csdn.net/s2422617864?spm=1000.2115.3001.5113"
            target="_blank"
          >
            <div class="box">
              <div class="box__face box__face--front">
                <svg
                  t="1606558787150"
                  class="icon"
                  viewBox="0 0 1141 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4020"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="35.65625"
                  height="32"
                >
                  <path
                    d="M1141.351404 39.055942l-28.91333 218.474629c-126.144728-19.927251-251.601043-38.376709-377.75495-27.674187-115.460564 9.802996-227.405635 32.180995-309.124802 122.987208-150.018878 166.696821-68.391499 396.461416 158.252293 437.463272 141.115408 25.52634 283.919721 11.785624 425.448176-8.123269-5.452228 112.440727-5.764308 95.303843-10.674985 205.229569-1.073924 24.057726 4.277337 14.612705-161.648461 31.914809-176.004159 9.004437-351.879815 11.189-520.550085-52.888447C156.545029 905.721534 30.675666 809.16019 5.176863 630.815428c-26.251468-183.595056 48.803865-331.796524 192.516883-446.128091C413.36883 13.098197 790.802521-47.271 1141.351404 39.055942z"
                    fill="#5B5C5C"
                    p-id="4021"
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
    <div class="contect-methodf">
      <div class="contect-method">
        <transition name="myadding1">
          <div class="neon" v-if="contact1">QQ : 2422617864</div>
        </transition>
        <transition name="myadding2">
          <div class="neon" v-if="contact2">WeChat : sunyifang535</div>
        </transition>
        <transition name="myadding">
          <div class="neon" v-if="contact3">练手小项目</div>
        </transition>
        <transition name="myadding">
          <div class="neon" v-if="contact4">e-mail : sunyf0602@163.com</div>
        </transition>
        <transition name="myadding">
          <div class="neon" v-if="contact5">平时的点滴记录</div>
        </transition>
        <transition name="myadding">
          <div class="neon" v-if="contact6">点击图标来联系我吧</div>
        </transition>
      </div>
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
          <li @click="portfolio1">大学</li>
          <li @click="portfolio2">工作</li>
          <li @click="portfolio3">生活</li>
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
      <div class="myadds">
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
        <transition name="myadd1">
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
        <transition name="myadd2">
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
      </div>
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
      // touxiang: "https://ftp.bmp.ovh/imgs/2020/11/fad32e940306e3bb.jpg",
      touxiang: "https://ftp.bmp.ovh/imgs/2020/11/a6f9c1e2187dda1b.jpg",
      // touxiang: "https://ftp.bmp.ovh/imgs/2020/11/ce70773d357fb069.jpg",
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
      contact1: false,
      contact2: false,
      contact3: false,
      contact4: false,
      contact5: false,
      contact6: true,
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
      this.addflag1 = true;
      this.addflag2 = false;
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
    contacts1() {
      this.contact1 = true;
      this.contact2 = false;
      this.contact3 = false;
      this.contact4 = false;
      this.contact5 = false;
      this.contact6 = false;
    },
    contacts2() {
      this.contact1 = false;
      this.contact2 = true;
      this.contact3 = false;
      this.contact4 = false;
      this.contact5 = false;
      this.contact6 = false;
    },
    contacts3() {
      this.contact1 = false;
      this.contact2 = false;
      this.contact3 = true;
      this.contact4 = false;
      this.contact5 = false;
      this.contact6 = false;
    },
    contacts4() {
      this.contact1 = false;
      this.contact2 = false;
      this.contact3 = false;
      this.contact4 = true;
      this.contact5 = false;
      this.contact6 = false;
    },
    contacts5() {
      this.contact1 = false;
      this.contact2 = false;
      this.contact3 = false;
      this.contact4 = false;
      this.contact5 = true;
      this.contact6 = false;
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


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Pacifico");
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

//悬浮联系
.box {
  width: 100%;
  height: 100%;
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
  cursor: pointer;
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
  background: #f3bc09;
}

.icon-list .icon-list__item:hover:nth-child(2) a .box__face--front svg path {
  fill: white;
}

.icon-list .icon-list__item:hover:nth-child(2) a .box__face--right {
  background: #f3bc09;
}

.icon-list .icon-list__item:hover:nth-child(2) a .box__face--bottom {
  background: #f3bc09;
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

.myadd-enter {
  opacity: 0;
  transform: translateX(500px);
}
.myadd-leave-to {
  opacity: 0;
  transform: translateY(-500px);
}
.myadd-enter-active,
.myadd-leave-active {
  transition: all 0.8s ease;
}

.myadd1-enter {
  opacity: 0;
  transform: translateX(500px);
}
.myadd1-leave-to {
  opacity: 0;
  transform: translateY(-500px);
}
.myadd1-enter-active,
.myadd1-leave-active {
  transition: all 0.8s ease;
}

.myadd2-enter {
  opacity: 0;
  transform: translateX(500px);
}
.myadd2-leave-to {
  opacity: 0;
  transform: translateY(-500px);
}
.myadd2-enter-active,
.myadd2-leave-active {
  transition: all 0.8s ease;
}

// .myadd,
// .myadd1,
// .myadd2 {
//   position: absolute;
// }
.myadds {
  // position: relative;
  display: flex;
}
.showadd {
  display: block !important;
}

//联系方式字体
.neon {
  color: #cce7f8;
  font-size: 2.5rem;
  font-family: "Pacifico", cursive;
  text-transform: uppercase;
  -webkit-animation: shining 0.1s alternate infinite;
  animation: shining 0.1s alternate infinite;
}

@-webkit-keyframes shining {
  from {
    text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
      0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
      0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
      0 0 54px rgba(15, 115, 223, 0.9);
  }

  to {
    text-shadow: 0 0 6px #b6d3cf, 0 0 30px rgba(182, 211, 207, 0.4),
      0 0 12px rgba(15, 115, 223, 0.6), 0 0 22px rgba(15, 115, 223, 0.8),
      0 0 38px rgba(15, 115, 223, 0.9), 0 0 60px #0f73df;
  }
}

@keyframes shining {
  from {
    text-shadow: 0 0 6px rgba(182, 211, 207, 0.9),
      0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
      0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8),
      0 0 54px rgba(15, 115, 223, 0.9);
  }

  to {
    text-shadow: 0 0 6px #b6d3cf, 0 0 30px rgba(182, 211, 207, 0.4),
      0 0 12px rgba(15, 115, 223, 0.6), 0 0 22px rgba(15, 115, 223, 0.8),
      0 0 38px rgba(15, 115, 223, 0.9), 0 0 60px #0f73df;
  }
}
.contect-methodf {
  display: flex;
  justify-content: center;
}
.contect-method {
  width: 800px;
  height: 80px;
  // overflow: hidden;
  position: relative;
  // display: flex;
  // justify-content: center;
}
.contect-method div {
  width: 800px;
  height: 80px;
  white-space: nowrap;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // top: 0px;
  // left: -200px;
}
.contect1 {
  display: none;
}
.myadding1-enter {
  opacity: 0;
  transform: translateX(500px);
}
.myadding1-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}
.myadding1-enter-active,
.myadding1-leave-active {
  transition: all 0.8s ease;
}
.myadding2-enter {
  opacity: 0;
  transform: translateX(500px);
}
.myadding2-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}
.myadding2-enter-active,
.myadding2-leave-active {
  transition: all 0.8s ease;
}
.myadding-enter {
  opacity: 0;
  transform: translateX(500px);
}
.myadding-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}
.myadding-enter-active,
.myadding-leave-active {
  transition: all 0.8s ease;
}
</style>
