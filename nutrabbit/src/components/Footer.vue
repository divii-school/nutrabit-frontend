<template>
  <footer>
    <div class="footer-inner">
      <div class="footer-links">
        <div class="footer-container">
          <div class="footer-links-inner">
            <div class="link-left">
              <ul>
                <li><router-link to="/terms">Terms of Use</router-link></li>
                <li class="active"><router-link to="/privacy">privacy policy</router-link></li>
              </ul>
            </div>
            <div class="link-right">
              <div class="footer-dropdown">
                <div class="lang-dropdown">
                  <select v-model="$i18n.locale" class="select-dropdown">
                    <option
                      v-for="lang in langs"
                      :key="lang.code"
                      :value="lang.code"
                    >
                      {{ lang.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-container">
        <div class="footer-address">
          <a class="footer-logo" href="">
            <img src="../assets/images/footer-logo.svg" alt="" />
          </a>
          <div class="address">
            <ul>
              <li>Newtrabit Co., Ltd.</li>
              <li>CEO: Min Kyung-ran</li>
              <li class="active">Business registration number: 603-88-01301</li>
            </ul>
            <p>
              Headquarters: 1st floor, 15, Hyoryeong-ro 33-gil, Seocho-gu, Seoul
            </p>
            <a href="">Copyright 2020 Nutrabbit. All right saved.</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import VueNextSelect from "vue-next-select";

export default {
  name: "Footer",
  data() {
    return {
      langs: [
        {
          code: "en",
          name: "English",
        },
        {
          code: "kr",
          name: "Korean",
        },
      ],
    };
  },
};
</script>