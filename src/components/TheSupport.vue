<script setup>
import { onMounted } from 'vue';

// 是否已填入內容
function validateInput(inputId, errorSelector, errorMessage, eventType) {
  $(inputId).on(eventType, function () {
    if ($(this).val() === "") {
      $(errorSelector).html(errorMessage);
    } else {
      $(errorSelector).html("");
    }
  });
}

// 驗證 email 格式的函數
function emailAddress(value) {
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
}

onMounted(() => {
  // 使用通用函數進行驗證
  validateInput("#email", ".mail .error", "請輸入電子郵件", "keyup");
  validateInput("#names", ".names .error", "請輸入姓名", "keyup");
  validateInput("#textarea", ".form_med .error", "請輸入內容", "keyup");
  validateInput("#select_pgm", ".type .error", "請選擇問題類型", "change");

  // 送出前檢查()
  $(".sup_wrp form").submit(function (e) {
    // 停止預設行為
    e.preventDefault();

    let errors = {
      email: !emailAddress($("#email").val()) ? "信箱錯誤" : "",
      names: $("#names").val() === "" ? "姓名資料" : "",
      select_pgm: $("#select_pgm").val() === null ? "問題類型" : "",
      textarea: $("#textarea").val() === "" ? "未填寫內容" : "",
      agree: !$("#agree").is(":checked") ? "尚未同意" : "",
    };

    // 檢查是否有錯誤
    const errorMessages = Object.values(errors).filter((error) => error !== "");
    if (errorMessages.length === 0) {
      alert("資料成功送出");
    } else {
      $("#error").html(`${errorMessages.join("，")}， 請再次確認`);
    }
  });
})





</script>
<template>
  <div class="sup_wrp">
    <div class="sup_left">
      <h2>聯絡我們</h2>
      <p>
        所有標有
        <span class="red">*</span> 的字段均為必填項，必須填寫。
      </p>

      <form action="#">
        <div class="form_top">
          <div>
            <div class="names">
              <span>姓名<span class="red">*</span></span>
              <input type="text" name="" id="names" placeholder="Name" maxlength="10" />
              <div class="error"></div>
            </div>

            <div class="phone">
              <span>電話</span>
              <input type="text" name="" id="" placeholder="Phone" />
            </div>
          </div>

          <div>
            <div class="mail">
              <span>電子信箱<span class="red">*</span></span>
              <input type="text" name="" id="email" placeholder="example@mail.com" />
              <div class="error"></div>
            </div>

            <div class="city">
              <span>城市</span>
              <select name="pets">
                <option value="" disabled selected>請選擇城市</option>
                <option value="">台北市</option>
                <option value="">台中市</option>
                <option value="">高雄市</option>
                <option value="">其他</option>
                <option value="" disabled>其他地區請於留言註明</option>
              </select>
            </div>
          </div>

          <div>
            <div class="addr">
              <span>地址</span>
              <input type="text" name="" id="" />
            </div>

            <div class="type">
              <span>問題類型<span class="red">*</span></span>
              <select name="pets" id="select_pgm">
                <option value="請選擇" disabled selected>請選擇</option>
                <option value="註冊相關">註冊相關</option>
                <option value="交易問題">交易問題</option>
                <option value="安全疑慮">安全疑慮</option>
                <option value="配送方式">配送方式</option>
                <option value="法律規範">法律規範</option>
                <option value="安全問題">安全問題</option>
                <option value="其他">其他</option>
              </select>
              <div class="error"></div>
            </div>
          </div>
        </div>

        <div class="form_med">
          <span class="QA">問題/評論<span class="red">*</span></span>
          <textarea name="" id="textarea" cols="30" rows="10"></textarea>
          <div class="error"></div>
        </div>

        <div class="form_btm">
          <span class="file">檔案上傳</span>
          <div class="show_file">
            <img id="blah" src="#" />
            <p>請將檔案放於此處</p>
          </div>
          <input type="file" accept="image/*" id="imgInp" />
        </div>

        <div class="agree">
          <label for="agree"><input type="checkbox" id="agree" />本表單蒐集之個人資料，僅限於專題展示使用，非經當事人同意，不轉做其他用途。</label>

          <div class="submit">
            <input type="submit" value="送出" />
            <div id="error"></div>
          </div>
        </div>
      </form>
    </div>

    <div class="sup_right">
      <p>
        <span class="sup_r_t"> 營業時間 </span>
        <br />
        8:00 AM - 5:00 PM GMT <br />
        <br />

        <span class="sup_r_t"> 電話 </span>
        <br />
        (02)2345-6789 <br />
        <br />
        <br />

        我們的客戶服務友好而輕鬆。通過電話聯繫我們或通過我們的在線網絡表格在此處提交您的查詢。
        <br />
        <br />

        如果您正在尋找協助，我們有一系列工具和備件套件可能會有所幫助。
        <br />
        <br />

        有關服務信息以及活動的詳細信息可在我們的相關資訊頁面上找到。
        <br />
        <br />

        我們的平均回覆時間為 24 - 48
        小時。如果您在此時間範圍後沒有收到我們的消息，請隨時再次與我們聯繫，或是在我們的
        Facebook 頁面上聯繫我們。 <br />
        <br />

        我們將盡我們所能回覆所有電子郵件和評論。
      </p>
    </div>
  </div>
</template >

<style lang="scss">
label,
input,
div {
  font-size: 1rem;
}

.red {
  color: red;
  padding: 0 5px;
}


.sup_wrp {
  display: flex;
  width: 70%;
  margin: 50px auto;
  align-items: center;


  /* 左側表單 */
  .sup_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 70%;
  }
}

/* 表單 */
.sup_left form {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

form {
  .form_top {
    width: 100%;

    div {
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  .form_top>div {
    flex-direction: row;
  }

  .form_top div>div {
    display: flex;
    margin: 20px;
    width: 100%;
    height: 70px;
  }


  /* 左側中段 */
  .form_med {
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 100%;
    align-items: flex-start;
    height: 150px;

    textarea {
      width: 100%;
      resize: none;
    }
  }


  /* 左側下段 */
  .form_btm {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px;

    .show_file {
      position: relative;
      margin-top: 10px;
      border-radius: 5px;
      padding-left: 10px;
      border: 2px dashed rgb(255, 255, 255);
      width: 100%;
      height: 100px;
      background-color: rgba(255, 255, 255, 0.2);

      background-image: url(../assets/images/cloud.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 10%;

      text-align: center;
      cursor: pointer;
    }
  }

}

.form_btm .show_file p {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 0.7rem;
}

.form_btm input {
  display: none;
}

#blah {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: none;
}

/* 同意?? */
.agree {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px;
  font-size: 0.7rem;

  input {
    background-color: #ff7300;
    color: white;
  }
}

/* 輸入 */
/* 按鈕 */
input,
select,
textarea {
  margin-top: 10px;
  border-radius: 5px;
  padding-left: 10px;
  border: none;
  width: auto;
  height: 100%;
}

/* 右側 */
.sup_right {
  height: 100%;
  width: 30%;
  margin: 50px;

}

.sup_r_t {
  font-size: 1.5rem;
}

.names,
.mail,
.type,
.form_med,
.submit {
  position: relative;
}

.error,
#error {
  position: absolute;
  color: red;
}

.error {
  font-size: 0.9rem;
  top: 60px;
  left: -20px;
}

.form_med .error {
  top: 160px;
  left: 0;
}

.agree #error {
  text-align: right;
  width: 550px;
  top: 60px;
  right: 0px;
}
</style>
