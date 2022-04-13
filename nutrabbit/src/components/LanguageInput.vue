<template>
  <div class="lang-dropdown">
    <select v-model="$i18n.locale" class="select-dropdown">
      <option v-for="lang in langs" :key="lang.code" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "LanguageInput",
  data() {
    return {
      langs: [
        {
          code: "en",
          name: "EN",
        },
        {
          code: "kr",
          name: "KO",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.lang-dropdown {
  display: flex;
  justify-content: center;
  select {
    height: 40px;
    width: 68px;
    padding-left: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: $black-33;
    appearance: none;
    background: $white-1 url("@/assets/icons/header-dropdown-arrow.png") no-repeat 70% center;
    background-size: auto 18px;
    &:focus {
      outline: none;
    }
  }
}
</style>
