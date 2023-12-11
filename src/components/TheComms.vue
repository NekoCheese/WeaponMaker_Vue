<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

let GoodSayData = [
  {
    title: "~ Edwin Louis Cole", text: `“You don’t drown by falling in the water. You drown by staying
          there.”`}, {
    title: "", text: `“Move swift as the Wind & closely-formed as the Wood. Attack like
          the Fire and be still as ​the Mountain.”`}, {
    title: "-The Way 武士道", text: `"Live a life worth living, die a death worth dying for."`
  },
]

let CommData = [
  { title: "步入精密步槍第 1 部分", text: "從步槍製造到第一次全國精密步槍比賽", src: "com_A1.jpg" },
  { title: "Vang Comp", text: "使用高效的 Vang Comp 系統構建霰彈槍", src: "com_A2.jpg" },
  { title: "Lorem", text: "從基礎知識、您可以進行的升級，到練習適當的槍支安全，我們為您提供保障。", src: "com_A3.jpg" },
  { title: "Lorem", text: "作為首次購買槍支的人的熱門選擇，我們製作了一些包含獵槍選擇、設置和彈藥的信息豐富的視頻。", src: "com_A4.jpg" }
]

const owl = function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    loop: true,
    nav: false,
    dots: false
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
  <div class="top_img">
    <img src="../assets/images/comms_img/com_tp_bg.jpg" alt="" />
  </div>

  <!-- 好像很厲害的名言 -->
  <div class="good_saying">
    <div class="owl-carousel owl-theme good_saying">
      <div class="item" v-for="item in GoodSayData">
        <h2>
          {{ item.text }}
        </h2>
        <h3 v-if="item.title != ''">{{ item.title }}</h3>
      </div>
    </div>
  </div>

  <!-- 指南~ -->
  <div class="intel">
    <h4>指南</h4>
    <ul>
      <li class="product1" v-for="item in CommData">
        <img :src="'./src/assets/images/comms_img/' + item.src" />
        <h2>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
        <a href="#">閱讀更多</a>
      </li>
    </ul>
  </div>

  <!-- 影片 -->
  <div class="com_video">
    <h4>影片</h4>
    <ul>
      <li>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FJFolf1id1w"></iframe>
      </li>
      <li>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RYhlh_guZI0"></iframe>
      </li>
      <li>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FXvqFnr7FtU"></iframe>
      </li>
    </ul>
  </div>

  <!-- ＊API＊ -->
  <div class="wmcomms">
    <h4>#WMCOMMS</h4>
    <ul>
      <li class="social1">
        <div>
          <p>戴著防護眼鏡和頭盔的氣槍隊員，帶著氣槍</p>
        </div>
      </li>
      <li class="social2">
        <div>
          <p>氣槍狙擊手，等待和瞄準，偽裝的玩家</p>
        </div>
      </li>
      <li class="social3">
        <div>
          <p>軍人，軍隊，穿著戰術制服的士兵，戴著卡賓槍和戰術手套。</p>
        </div>
      </li>
      <li class="social4">
        <div>
          <p>黑布上的黑色手槍，帶彈藥</p>
        </div>
      </li>
      <li class="social5">
        <div>
          <p>突擊步槍靠在森林裡的一棵樹上</p>
        </div>
      </li>
      <li class="social6">
        <div>
          <p>氣槍準備就緒.</p>
        </div>
      </li>
    </ul>
  </div>
</template >
<style lang="scss">

.page-wrapper {}

h4 {
  position: relative;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
}

h4::before {
  content: "";
  position: absolute;
  right: 60%;
  top: 50%;
  background: #ff7300;
  width: 30%;
  height: 1px;
}

h4::after {
  content: "";
  position: absolute;
  left: 60%;
  top: 50%;
  background: #ff7300;
  width: 30%;
  height: 1px;
}

/* 大圖 */
.top_img img {
  display: block;
  width: 100%;
}

/* 名言 */
.good_saying {
  margin-top: 30px;
  font-family: "IM Fell Double Pica", serif;
  text-align: center;
  height: 300px;
  line-height: 3;
}

/* 指南 */
.intel {
  max-width: 1800px;
  margin: 30px auto;
}

.intel ul {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.intel ul li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #878787;
  width: 510px;
  height: 530px;
  margin: 50px auto;
  overflow: hidden;
}

.intel h2 {
  font-size: 2.5rem;
}

.intel p {
  font-size: 1.4rem;
  margin: 0 20px;
  line-height: 1.6;
}

.intel a {
  font-weight: bold;
  margin-bottom: 20px;
}

/* 影片 */
.com_video {
  max-width: 100%;
  margin: 0 auto;
}

.com_video ul {
  display: flex;
  justify-content: space-evenly;
}

.com_video iframe {
  margin: 80px 20px;
}

/* 社群 */
.wmcomms {
  max-width: 1800px;
  margin: auto;
}

.wmcomms ul {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.wmcomms ul li {
  width: 568px;
  height: 380px;
  margin: 50px;
}

.wmcomms ul li {
  outline: 3px solid black;
  outline-offset: -3px;
  text-align: center;
}

.wmcomms ul li div {
  display: none;
  position: relative;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.wmcomms ul li p {
  position: absolute;
  left: 0;
  right: 0;
  top: 48%;
  margin: 0 30px;
  /* display: none; */
}

// .wmcomms .social1 {
//   background-image: url("../img/comms_img/com_soc01.jpg");
// }

// .wmcomms .social2 {
//   background-image: url("../img/comms_img/com_soc02.jpg");
// }

// .wmcomms .social3 {
//   background-image: url("../img/comms_img/com_soc03.jpg");
// }

// .wmcomms .social4 {
//   background-image: url("../img/comms_img/com_soc04.jpg");
// }

// .wmcomms .social5 {
//   background-image: url("../img/comms_img/com_soc05.jpg");
// }

// .wmcomms .social6 {
//   background-image: url("../img/comms_img/com_soc06.jpg");
// }
</style>