<script setup>
let AvatarData = [
  { title: "創始人兼首席執行官", name: "傑瑞德·泰勒", src: "ab_ava1.jpg" },
  { title: "首席技術官", name: "安德魯·麥考密克", src: "ab_ava2.jpg" },
  { title: "總法律顧問", name: "托比·約翰遜", src: "ab_ava3.jpg" }

]
</script>

<template>
  <div class="about wrapper">
    <div class="banner1 wrapper">
      <h1>ABOUT</h1>
    </div>
    <div class="banner2 wrapper">

      <h2>WEAPON MAKER 是開創性的、以目標為導向的品牌，為那些對自己有更高要求、為了更大利益的人製造專門的裝備。</h2>
      <div>
        <p>
          我們的客戶所做的一切以及我們為他們所做的一切都是指數級的。
          他們越是自力更生，
          就越能被依賴。
          他們建立的力量越多，
          他們就越能保護他人。
          他們越響應服務的號召，
          就越尊重服務的人。
          我們越多地傾聽、實地測試、設計、建造和優化，以幫助他們為任何事情做好準備，
          他們就越能過上比自己更偉大的生活。
          這就是一生的使命。
        </p>

        <img src="../assets/images/about_img/ab_pic1.jpg" alt="">

      </div>

    </div>

    <div class="banner3 wrapper">

      <h2>“沒有人是無敵的，因此沒有人能完全理解使他無敵的東西”</h2>

    </div>

    <div class="banner4 wrapper">

      <ul class="avater">
        <li class="ava" v-for="item in AvatarData">
          <img :src="'/public/' + item.src">
          <h4>{{ item.name }}</h4>
          <p>{{ item.title }}</p>
        </li>

      </ul>

    </div>

    <div class="banner5 wrapper">

      <ul class="youtube">
        <li class="videoL">
          <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/ireTjAmTQ_A"></iframe> -->
        </li>
        <li class="videoM">
          <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/Igr4TgNzvPM"></iframe> -->
        </li>
        <li class="videoR">
          <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/MJHDVMkZuaE"></iframe> -->
        </li>
      </ul>

    </div>

    <div class="banner6 wrapper">

      <h3>訂閱 WEAPON MAKER</h3>

      <form action="#">
        <ul>
          <li>
            <h4>名字</h4>
            <input type="text">
          </li>

          <li>
            <h4>姓氏</h4>
            <input type="text">
          </li>

          <li>
            <h4>電子郵件<span>
                *</span></h4>
            <input type="email" id="email">

            <p>
              <span>*
              </span>表示必填字段
            </p>
          </li>
        </ul>

        <input type="submit" value="送出">
        <div class="error"></div>
      </form>

    </div>

  </div>
</template >

<style lang="scss">
/* 麵包屑 */
.top-nav a:nth-child(2) {
  color: #ff7300;
}

/* 麵包屑 */

.page-wrapper .wrapper {
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

/* ABOUT */
.banner1 {
  background-image: url(../assets/images/about_img/ab_ba1.jpg);
}

.banner1 h1 {
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;
  font-size: 10rem;
  letter-spacing: 30px;
}

/* 理念 */
.banner2 {
  height: 800px;
  background-color: #fff;
  color: black;
  text-align: center;
  padding: 150px 0;
  box-sizing: border-box;
  font-weight: bold;
}

.banner2 div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner2 h3 {
  font-size: 2rem;
}

.banner2 p {
  margin: 60px;
  line-height: 1.6;
}

.banner2 img {
  overflow: hidden;
  height: 100%;
  margin: 60px;
}

/* 名言 */
.banner3 {
  background-image: url(../assets/images/about_img/ab_ba2.jpg);
}

.banner3 h2 {
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;
}

/* 人人人人人人人人人人人人 */
.banner4 {
  box-sizing: border-box;
  background-color: #fff;
  color: black;
  font-weight: bold;
  line-height: 1.6;
}

.banner4 ul {
  display: flex;
  height: 800px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.banner4 ul li {
  margin: 0 120px;
}

.banner4 ul li img {
  box-shadow: 1px 1px 8px;
}

.banner4 h4 {
  font-size: 2rem;
}

/* YOOOOOOOOOOOOOOOOOOOOOUTUBE */

.banner5 {
  overflow: hidden;
}

.banner5 ul {
  display: flex;
  justify-content: space-evenly;
  height: 800px;
}

.banner5 ul li {
  display: flex;
  align-items: center;
  color: rgb(235 235 235 / 50%);
  font-weight: 800;
  font-size: 4rem;
}

.banner5 iframe {
  width: 100vh;
  height: 56.25vh;
  margin: 0 80px;
}

.videoM::after {
  content: "\f138";
}

.videoM::before {
  content: "\f137";
}

/* 訂閱訂閱訂閱訂閱訂閱訂閱訂閱訂閱訂閱訂閱訂閱訂閱訂閱 */

.banner6 {
  height: 800px;
  background-image: url(../assets/images/about_img/ab_ba3.jpg);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.banner6 ul {
  display: flex;
  text-align: left;
}


.banner6 ul li {
  margin: 0 35px;
}

.banner6 ul li:last-child {
  margin-top: -12px;
}

.banner6 li input {
  width: 300px;
  height: 50px;
  margin: 10px 0;
  background-color: rgb(255 255 255 / 0%);
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  font-size: 1.5rem;
}

.banner6 h3 {
  font-size: 4rem;
  font-weight: bold;
}

.banner6 h4 {
  font-size: 1.3rem;
}

.banner6 p {
  font-size: 1.2rem;
}

.banner6 form {
  position: relative;
}

.banner6 form>input {
  background-color: #ff7300;
  color: white;
  width: 100px;
  height: 50px;
  font-size: 1.6rem;
  border: none;
  /* font-weight: bold; */
}

.banner6 span {
  color: red;
  font-size: 2rem;
}

.banner6 .error {
  position: absolute;
  font-size: 1.5rem;
  font-weight: bold;
  left: 0;
  right: 0;
  top: 220px;
  color: red;
}
</style>