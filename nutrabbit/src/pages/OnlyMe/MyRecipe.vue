<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>my recipe</h2>
        </div>
        <div class="choice-selection-item-wrap recipeGap">
          <div class="choice-selection-item raw-material-product addWrap">
            <div class="heading-wrap">
              <div class="heading">
                <h2>Recommended blending</h2>
              </div>
            </div>
            <div class="product-list-wrap">
              <ul class="selectAllHeader">
                <li class="flex-justify-end">
                  <button class="deleteBtn" @click="deleteRecipeItem(product_id)">delete selection <i class="icon-menu-delete"></i></button>
                </li>
              </ul>
              <ul class="raw-material-list">
                <li v-for="(item, index) of recommendedBlendingData" :key="index">
                  <ProductList :item="item" @changeId="getProductId"/>
                </li>
              </ul>
              <div class="btn-wrap flexEnd">
                <button class="btn-small-solid blue" @click="toNextRecommended">Next</button>
              </div>
            </div>
          </div>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product addWrap">
            <div class="heading-wrap">
              <div class="heading">
                <h2>My Choice</h2>
              </div>
            </div>
            <div class="product-list-wrap">
              <ul class="selectAllHeader">
                <li class="flex-justify-end">
                  <button class="deleteBtn" @click="deleteRecipeItem(product_id)">delete selection <i class="icon-menu-delete"></i></button>
                </li>
              </ul>
              <ul class="raw-material-list">
                <li v-for="(item, index) of myChoiceData" :key="index">
                  <ProductList :item="item" @changeId="getProductId"/>
                </li>
              </ul>
              <div class="btn-wrap flexEnd">
                <button class="btn-small-solid blue" @click="toNextChoice">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

          

<script>
import Popper from "vue3-popper";
import Button from '../../components/Button.vue';
import ProductList from "../../components/ProductList.vue";
import { inject } from "vue";
import MyRecipeService from "../../services/MyRecipeService";
export default {
  inject : ['common'],
  name: "ChoiceRecommendedBlendingPackageSelection",
  components: {
    Popper,
    ProductList,
    Button,
  },
  
  data() {
    return {
      rwaMaterialData: [
        // {
        //   img: "../../../src/assets/images/pkgSelection.png",
        //   title: "Bottle",
        //   desc: [
        //     "Choose from a variety of sizes and shapes of bottles and caps.",
        //   ],
        // },
        // {
        //   img: "../../../src/assets/images/pkgSelection.png",
        //   title: "PTP",
        //   desc: [
        //     "It is hygienic and convenient.",
        //     "The packaging volume is slightly larger.",
        //   ],
        // },
      ],
      user_id : this.common.state.userId,
      product_id : '',
      recommendedBlendingData : [],
      myChoiceData : [],
      
    };
  },

  created(){
    this.myRecipe = new MyRecipeService()
    this.allRecommendedData();
    this.allChoiceData();
  },

  methods : {
    getProductId(id){
      this.product_id = id;
      //console.log(`product id is : ${this.product_id}`)
    },

    allRecommendedData(){
      this.myRecipe.getMyRecomendedBlendingData(this.user_id)
    .then((res)=>{
      
        if (res.status == 200) {
          this.recommendedBlendingData = res.data.recipeData;
          //console.table(res.data.recipeData)
        } else {

          this.$swal(res.data.message, "error");
        }
    })
    },
   
   allChoiceData(){
      this.myRecipe.getMyChoiceData(this.user_id)
    .then((res)=>{
      //console.log(res)
        if (res.status == 200) {
          this.myChoiceData = res.data.recipeData;
          console.table(res.data.recipeData)
        } else {

          this.$swal(res.data.message, "error");
        }
    })
    },
   

   deleteRecipeItem(id){
     if(!this.product_id){
       return
     }
     //console.log(`delete item product id : ${id}`)
      this.myRecipe.deleteRecipeData(id)
    .then((res)=>{
        if (res.status == 200) {
          this.$swal(`Delete ${res.message}`)
          setTimeout(()=>{
            window.location.reload()
          }, 2500)
          console.log(res)
        } else {

          this.$swal(res.data.message, "error");
        }
    })
   },

   toNextRecommended(){
     if(!this.product_id){
       return;
     }
     this.$router.push({ name : 'MyRecipeDetails', params : { id : this.product_id, type : 'recommended-blending'}})
   },

   toNextChoice(){
     if(!this.product_id){
       return;
     }
     this.$router.push({ name : 'MyRecipeDetails', params : { id : this.product_id, type : 'my-choice'}})
   }


  }
};
</script>