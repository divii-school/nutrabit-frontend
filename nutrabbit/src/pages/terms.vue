<template>
  <div class="main-body terms-comp">
    <div class="container-medium">
      <div class="my-recipe-section">
        <template v-for="(item, index) of Terms" :key="index">
          <div class="heading">
            <h1>{{item.title}}</h1>
          </div>
          <div class="my-recipe-body" v-html="item.description"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      terms: "terms",
      Terms: [],
    };
  },
  mounted() {
    this.getTerms();
  },
  methods: {
    async getTerms() {
      try {
        const actualData = await axios.post("/cms", {key: this.terms});
        this.Terms = actualData.data.data;
       } catch (error) {
        return;
      }
    },
  },
};
</script>

<style lang="scss">
.terms-comp{
.row-type {
  margin-bottom: 30px;
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    color: #666666;
    margin-bottom: 5px;
  }
  p,
  ul li,
  ol li {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #666666;
  }
  &.type-2 {
    ul {
      padding-left: 35px;
    }
  }
}
.pad-bottom-15 {
  padding-bottom: 15px;
}
.my-recipe-body {
  padding-bottom: 50px;
  ol {
    list-style-type: auto;
    padding-left: 20px;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
    margin-bottom: 30px;
  }
}
}
</style>