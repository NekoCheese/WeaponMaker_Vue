<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

let OwlData = [
  { title: '項目1', img_src: 'head_bg1.jpg' },
  { title: '項目2', img_src: 'head_bg2.jpg' },
  { title: '項目3', img_src: 'head_bg3.jpg' },
]

let BannerData = [
  {
    title: '權利保護',
    sub_title: '關於我們',
    img_src: 'banner1.jpg',
    text: "我們本身就是熱情的垂釣者和獵人，所以我們完全積極地致力於支持尋求消費者最大利益的團體以及整個戶外運動用品​​行業。",
    router: "about",

  },
  {
    title: '都說我們是精品，讓你改槍一把罩！',
    sub_title: '瀏覽作品',
    img_src: 'banner2.jpg',
    text: "我們是徹底奉獻的機械狂人，能掌握精髓將設計草圖化作活生生的鋼與鐵。我們是注重細節的工匠，用心是基本態度，品質穩定是自我要求的最低標準。WeaponMaker將技術運用在玩具槍及改裝零件的設計，陸續推出一系列玩具槍及改裝零件，成為玩家愛不釋手的精品。",
    router: "media"
  },
  {
    title: '世界級分銷',
    sub_title: '了解更多',
    img_src: 'banner3.jpg',
    text: " Weapon Maker 擁有超過 190,000 個產品，並為美國、加拿大、加勒比地區和其他八個國家的 15,000 多家釣魚、射擊、露營、動物標本剝制和海洋零售商提供服務。",
    router: "comms"
  },
  {
    title: '改變遊戲規則的服務',
    sub_title: '立即聯絡',
    img_src: 'banner4.jpg',
    text: "儘管 Weapon Maker 是北美最大的戶外運動用品​​經銷商之一，但我們遠不止於此。我們提供一系列獨家工具和資源，旨在為零售商提供競爭優勢。",
    router: "support"
  },
]

// 輪播功能
const owl = function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
  });
}

onMounted(() => {
  owl();
})

onBeforeUnmount(() => {
  $(".owl-carousel").trigger('destroy.owl.carousel');
});
</script>



<template>
  <div class="home">
    <div class="owl-carousel owl-theme head-pic" id="home_for_pc">
      <div class="item" v-for="item in OwlData" :key="item.img_src">
        <img :src="'/public/' + item.img_src" />
      </div>
    </div>

    <main>
      <ul class="banner">
        <li v-for="item in BannerData">
          <img :src="'/public/' + item.img_src" />
          <div>
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.text }}
            </p>
            <RouterLink :to="'/' + item.router">{{ item.sub_title }}</RouterLink>
          </div>
        </li>
      </ul>
    </main>
    <aside>
      <h1>不要錯過最新消息</h1>
      <h2>訂閱 WEAPON MAKER 以獲取新聞、額外內容和特別優惠</h2>

      <div class="submit">
        <form action="#">
          <input type="email" class="email" placeholder="E-MAIL@EXAMPLE.COM" />
          <input type="submit" class="send" />
        </form>
      </div>
    </aside>
  </div>
</template >

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
}

/* 麵包屑 */
.top-nav a:first-child {
  color: #ff7300;
}

/* 麵包屑 */

main {
  margin: 0 auto;

  .banner {
    display: flex;
    flex-direction: column;
    max-width: 1602px;
    margin: auto;
    padding-top: 80px;
    padding-bottom: 80px;

    li {
      display: flex;
      justify-content: space-between;
      background-color: #4d4d4d;
      margin: auto;
      margin-bottom: 80px;
      overflow: hidden;
      box-shadow: 2px 2px rgb(0 0 0 / 50%);
      transition: all 0.2s 0s ease;
    }

    li:nth-child(odd) {
      flex-direction: row-reverse;
    }

    li:hover {
      background-color: rgb(48 48 48);

      a {
        transition: all 0.5s 0s ease;
        background-color: #ff7300;
        transform: scale(1.1);
      }
    }

    li:last-child {
      margin-bottom: 0;

    }

    img {
      height: 100%;
      margin: 0 auto;
    }

    div {
      position: relative;
      padding: 33px 53px;
    }

    h3 {
      line-height: 2;
    }

    p {
      overflow: hidden;
    }

    a {
      display: block;
      width: 180px;
      height: 36px;
      line-height: 36px;
      margin: 0 auto;
      text-align: center;
      // background-color: #ff7300;
      position: absolute;
      bottom: 50px;
      left: 0;
      right: 0;
    }
  }
}



aside {
  background-image: url("../assets/images/home_img/contact_bg.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  width: 100%;
  height: 460px;

  h1 {
    margin-top: 96px;
  }

  h2 {
    margin-top: 37px;
  }

  .submit {
    margin-top: 59px;

    input {
      font-size: 1.2rem;
      height: 36px;
      line-height: 1;
      outline: none;
      border: none;
      padding: 0 20px;
    }

    .email {
      width: 260px;
    }

    .email::placeholder {
      color: #ccc;
      text-align: center;
    }

    .send {
      width: 80px;
      margin-left: 27px;
      background-color: #ff7300;
      color: white;
    }

    .send:hover {
      background-color: white;
      color: #ff7300;
    }
  }
}
</style>
