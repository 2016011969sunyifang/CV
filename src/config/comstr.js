export const str = {
  code: `
  .ken-burns-slideshow {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 700px;
    overflow: hidden;
    list-style-type: none;
  }
  
  .ken-burns-slideshow .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transform: scale(1.2);
    animation: kenburns 24s linear infinite;
  }
  
  .ken-burns-slideshow .slide:nth-child(1) {
    animation-delay: 0s;
  }
  
  .ken-burns-slideshow .slide:nth-child(2) {
    animation-delay: 6s;
  }
  
  .ken-burns-slideshow .slide:nth-child(3) {
    animation-delay: 12s;
  }
  
  .ken-burns-slideshow .slide:nth-child(4) {
    animation-delay: 18s;
  }
  
  #slide1 {
    background-image: linear-gradient(
        rgba(16, 16, 16, 0.8),
        rgba(16, 16, 16, 0.8)
      ),
      url("https://ftp.bmp.ovh/imgs/2020/11/a4df9b7b03754a0a.jpg");
  }
  
  #slide2 {
    background-image: linear-gradient(
        rgba(16, 16, 16, 0.8),
        rgba(16, 16, 16, 0.8)
      ),
      url("https://ftp.bmp.ovh/imgs/2020/11/8a4cc379aa2946d3.jpg");
  }
  
  #slide3 {
    background-image: linear-gradient(
        rgba(16, 16, 16, 0.8),
        rgba(16, 16, 16, 0.8)
      ),
      url("https://ftp.bmp.ovh/imgs/2020/11/7ef758f6adfa294b.jpg");
  }
  
  #slide4 {
    background-image: linear-gradient(
        rgba(16, 16, 16, 0.8),
        rgba(16, 16, 16, 0.8)
      ),
      url("https://ftp.bmp.ovh/imgs/2020/11/f49d8982c1ae749c.jpg");
  }
  
  @keyframes kenburns {
    10% {
      opacity: 1;
    }
  
    25% {
      opacity: 1;
      transform: scale(1);
    }
  
    40% {
      opacity: 0;
      transform: scale(1);
    }
  }
  
    .topNavBar {
        padding: 20px 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        transition: all 0.5s;
        color: #b7b7b7;
        z-index: 999999 !important;
      }
      .topNavBar.sticky {
        background: white;
        padding: 10px 0;
        z-index: 1;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        color: #3d4451;
      }
      .topNavBar-inner {
        padding: 0 16px;
      }
      .topNavBar nav {
        padding-top: 5px;
      }
      .topNavBar nav > ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .topNavBar nav > ul > li {
        float: left;
        margin-left: 17px;
        margin-right: 17px;
        position: relative;
      }
      .topNavBar nav > ul > li > a {
        font-size: 12px;
        color: inherit;
        font-weight: bold;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        padding-top: 5px;
        padding-bottom: 5px;
        display: block;
        position: relative;
      }
      .topNavBar nav > ul > li.active > a::after,
      .topNavBar nav > ul > li.highlight > a::after {
        content: "";
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #e06567;
        height: 3px;
        animation: menuSlide 0.3s;
      }
      @keyframes menuSlide {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }
      .topNavBar .submenu {
        display: none;
        position: absolute;
        right: 0;
        top: 100%;
        background: white;
        color: #3d4451;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      }
      .topNavBar li.active > .submenu {
        display: block;
        animation: submenuSlide 0.3s;
      }
      @keyframes submenuSlide {
        0% {
          margin-right: 100%;
        }
        100% {
          margin-right: 0%;
        }
      }
      .topNavBar .submenu > li {
        white-space: nowrap;
        padding: 5px 10px;
      }
      
      .topNavBar .logo {
        font-size: 24px;
        font-family: "Arial Black";
        padding-top: 3px;
        padding-bottom: 4px;
      }
      .topNavBar .logo .rs {
        margin-right: 4px;
        color: #e6686a;
      }
      .topNavBar .logo .card {
        color: #9a9da2;
      }
      .banner {
        height: 515px;
        //   background-image: url(/img/rs-cover.jpg);https://ftp.bmp.ovh/imgs/2020/11/8af5cf9a2d77f24b.jpg
        background-image: url("https://ftp.bmp.ovh/imgs/2020/11/8af5cf9a2d77f24b.jpg");
        background-position: center center;
        background-size: cover;
      }
      .banner .mask {
        height: 515px;
        background-color: rgba(0, 0, 0, 0.8);
      }
      
      .userCard {
        max-width: 940px;
        margin-left: auto;
        margin-right: auto;
        background-color: #ffffff;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
      }
      .userCard .welcome {
        background: #e6686a;
        color: white;
        display: inline-block;
        padding: 4px 16px;
        line-height: 22px;
        position: relative;
        margin-bottom: 10px;
      }
      .userCard .welcome .triangle {
        display: block;
        border: 10px solid transparent;
        width: 0px;
        border-left-color: #e6686a;
        border-top-width: 0px;
        position: absolute;
        left: 4px;
        top: 100%;
      }
      .userCard .picture {
        float: left;
      }
      .userCard .text {
        float: left;
        margin-left: 65px;
        width: 470px;
      }
      .userCard .text h1 {
        margin-top: 18px;
      }
      .userCard .text hr {
        margin: 20px 0;
      }
      .userCard .pictureAndText {
        padding: 50px;
      }
      .userCard dl dt,
      .userCard dl dd {
        float: left;
        padding: 5px 0;
      }
      .userCard dl dt {
        width: 30%;
        font-weight: bold;
      }
      .userCard dl dd {
        width: 70%;
        color: #9da0a7;
      }
      
      .userCard > footer.media {
        height:55px;
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
      .userCard svg {
        width: 30px;
        height: 30px;
        fill: white;
        vertical-align: top;
      }
      main {
        margin-top: -150px;
      }
      main .downloadResume-wrapper {
        text-align: center;
      }
      main .downloadResume {
        font-size: 14px;
        line-height: 16px;
        padding: 21px 55px;
        border: 1px solid #e6686a;
        // background: #e6686a;
        display: inline-block;
        border-radius: 2px;
        color: #3d4451;
        font-weight: bold;
        margin: 32px 0;
        transition: box-shadow 0.2s;
      }
      main .downloadResume:hover {
        box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.2);
      }
      
      .selfIntroduction {
        margin-top:40px;
        max-width: 940px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        font-family: kai;
        line-height: 2.8;
        font-size: 22px;
      }
      .add {
        width:1180px;
        margin: 0px auto;
      }
      .add h2 {
        margin-top: 65px;
        margin-bottom: 32px;
        text-align: center;
        color: #3d4451;
        font-size: 34px;
        line-height: 1.2;
        font-weight: 600;
      }

      
      section.skills,
      section.portfolio {
        max-width: 940px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 60px;
      }
      section.skills > h2,
      section.portfolio > h2 {
        text-align: center;
        color: #3d4451;
        font-size: 34px;
        line-height: 1.2;
        font-weight: 600;
      }
      section.skills h3 {
        font-size: 14px;
        line-height: 1.1;
        padding-right: 40px;
      }
      section.skills > ol {
        background: white;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
        padding: 42px 50px 10px;
        margin-top: 30px;
      }
      section.skills > ol > li {
        float: left;
        width: 48%;
        box-sizing: border-box;
      }
      section.skills > ol > li:nth-child(even) {
        float: right;
      }
      section.skills .progressBar {
        height: 5px;
        background: #fae1e1;
        border-radius: 2px;
        margin: 4px 0 40px;
        overflow: hidden;
      }
      section.skills .progressBar > .progress {
        height: 100%;
        background: #e6686a;
        width: 70%;
        border-radius: 2px;
        transform: translateX(0);
        transition: all 1s;
      }
      section.skills.offset .progress {
        transform: translateX(-100%);
      }
      
      section.portfolio {
        text-align: center;
        margin-bottom: 100px;
      }
      section.portfolio > nav {
        text-align: center;
      }
      section.portfolio > nav > ol {
        margin: 0 auto;
        display: inline-block;
        vertical-align: top;
      }
      section.portfolio > nav > ol > li {
        float: left;
        margin-left: 40px;
        cursor: pointer;
      }
      section.portfolio > nav > ol > li:first-child {
        margin-left: 0;
      }
      section.portfolio > nav {
        display: inline-block;
        vertical-align: top;
        margin-top: 32px;
      }
      section.portfolio > nav .bar {
        height: 5px;
        background: white;
        margin-top: 5px;
        margin-bottom: 28px;
        border-radius: 2px;
      }
      section.portfolio > nav .bar-inner {
        height: 100%;
        background: #e6686a;
        border-radius: 2px;
        transition: all 0.3s;
      }
      section.portfolio > nav .bar.state-1 .bar-inner {
        margin-left: 0;
        width: 50px;
      }
      section.portfolio > nav .bar.state-2 .bar-inner {
        margin-left: 65px;
        width: 50px;
      }
      section.portfolio > nav .bar.state-3 .bar-inner {
        margin-left: 140px;
        width: 96px;
      }
      section.portfolio .works {
      
        position: relative;
      }
      section.portfolio .works > .big,
      section.portfolio .works > .small {
        position: absolute;
      }
      
      // .zijigexinghuadingzhicode {
      //     // border: 5px solid red;
      
      // }
      
      .continue {
        height: 2000px;
        border: 3px solid red;
        margin: 0 auto;
        h1 {
          text-align: center;
        }
      }
     
      // 渲染完毕感谢观看
      
      // 点击右上角即可关闭~
    `
}