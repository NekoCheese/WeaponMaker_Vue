<script setup>
import { useRoute, RouterLink, RouterView } from 'vue-router'
import Logo from './components/icons/IconLogo.vue'

var DarkTheme = {
  MainColor: '#ff7300',
  SubColor: "#444444",
  BackGroundColor: "#303030",
}

let SocialData = [
  { title: "twitter", url: "https://twitter.com/" },
  { title: "instagram", url: "https://www.instagram.com/" },
  { title: "facebook", url: "https://www.facebook.com/" },
  { title: "weibo", url: "https://weibo.com/" },
  { title: "discord", url: "https://discord.com/" },
  { title: "youtube", url: "https://www.youtube.com/" }
]
</script>

<template>
  <header>
    <Logo />
    <div>
      <i class="bi bi-list"></i>
      <nav>
        <RouterLink to="/">首頁</RouterLink>
        <RouterLink to="/about">關於我們</RouterLink>
        <RouterLink to="/media">作品一覽</RouterLink>
        <RouterLink to="/comms">相關資訊</RouterLink>
        <RouterLink to="/support">客戶服務</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="footerUp">
      <div class="social">
        <ul>
          <li v-for="item in SocialData">
            <a :href="item.url" target="_blank" class="icon" :title=item.title>
              <i :class="'fa-brands fa-' + item.title"></i>
            </a>
          </li>
        </ul>
        <Logo />
      </div>

      <div class="footText">
        <p>本網站為個人學習測試用，無任何營利行為，若有任何侵權行為請通知作者立刻為您處理。</p>
        <a
          href="https://docs.google.com/document/d/1Wal81HCRa6K-mIXBTk5mfkgDfcVPtH4L/edit?usp=sharing&ouid=103183741791649941899&rtpof=true&sd=true">參考資源</a>
      </div>

      <div class="info">
        <p class="number">Phone : (02) 2345-6789</p>
        <p class="sup_time">8:00 AM - 5:00 PM GMT</p>
        <p class="addr">100台北市中正區重慶南路一段122號</p>
      </div>
    </div>

    <div class="copyright">
      <p>© 2023 All rights reserved.</p>

      <RouterLink to="/support" >
        <i class="fa-solid fa-circle-info"></i>
      </RouterLink>
      <RouterLink to="/" >
        <i class="fa-solid fa-house"></i>
      </RouterLink>
    </div>
  </footer>
</template>

<style lang="scss">
header {
  display: flex;
  flex-grow: 0;
  justify-content: space-between;
  position: relative;
  background-color: v-bind('DarkTheme.BackGroundColor');
  height: 80px;
  width: 100%;
  align-items: center;

  svg {
    margin-left: 90px;
    display: block;
  }

  a {
    color: white;
    margin: 0 23px;
    text-decoration: none;
  }

  a:hover {
    padding-bottom: 5px;
    border-bottom: 4px solid v-bind('DarkTheme.MainColor');
  }

  nav .router-link-active {
    color: v-bind('DarkTheme.MainColor');
  }

  nav:last-child {
    margin-right: 120px;
  }

  /* 漢堡線 */
  .bi-list {
    display: none;
    font-size: 2rem;
  }
}

footer {
  background-color: v-bind('DarkTheme.SubColor');

  .footerUp {
    display: flex;
    align-items: center;
    height: 300px;
    width: auto;

    div {
      width: 33.333333%;
    }
  }
}

.social {
  ul {
    display: flex;
    width: 50%;
    justify-content: center;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
    margin: auto;

    li {
      width: 100%;
      text-align: center;
    }

    li i {
      font-size: 25px;
    }

    li a {
      transition: all 0.5s;
    }

    li a:hover {
      color: v-bind('DarkTheme.MainColor');
    }
  }

  svg {
    display: block;
    border: 1px solid white;
    margin: auto;
    margin-top: 10px;
  }
}

.footText {
  text-align: center;

  p {
    font-size: 1rem;
  }

  a {
    font-size: 1rem;
    display: block;
    width: 100px;
    margin: auto;
    color: v-bind('DarkTheme.MainColor');
  }
}

.info {
  p {
    width: 50%;
    font-size: 0.9rem;
    margin: auto;
    position: relative;

  }

  p::before,
  p::after {
    font-weight: 900;
    margin-right: 10px;
    position: absolute;
    left: -30px;
  }

  .number::before {
    content: "\f095";
  }

  .sup_time::before {
    content: "\f0c0";
  }
}

.copyright {
  height: 50px;
  background-color: v-bind('DarkTheme.BackGroundColor');
  display: flex;
  position: relative;

  p {
    font-size: 0.7rem;
    margin: auto;
  }

  i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }

  .fa-house {
    right: 60px;
  }

}

/* 導覽列 */
.RWD_list i {
  transition: all 0.4s;
}

#RWD_list.-on .forRWD {
  display: block;
}

#RWD_list.-on i {
  transform: rotate(90deg);
}
</style>
