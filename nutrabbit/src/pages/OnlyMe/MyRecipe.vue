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
                  <button class="deleteBtn" @click="deleteRecipeItemRecommended">delete selection <i class="icon-menu-delete"></i></button>
                </li>
              </ul>
              <ul class="raw-material-list">
                <li v-for="(item, index) of recommendedBlendingData" :key="index">
                  <ProductListRecipe :item="item" @changeId="getProductId"/>
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
                  <button class="deleteBtn" @click="deleteRecipeItemChoice">delete selection <i class="icon-menu-delete"></i></button>
                </li>
              </ul>
              <ul class="raw-material-list">
                <li v-for="(item, index) of myChoiceData" :key="index">
                  <ProductListRecipe :item="item" @changeId="getProductId"/>
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
    <Modal v-show="isRecommendedModalVisible" @close="closeModalRecommended" bodytext1="Are you sure?"
    btnText1="Cancel"  btnText2 = "Confirm"  link="/my-recipe" @confirm="deleteRecipeRecommendedItem(product_id)"/>
    <Modal v-show="isChoiceModalVisible" @close="closeModalChoice" bodytext1="Are you sure?"
    btnText1="Cancel"  btnText2 = "Confirm"  link="/my-recipe" @confirm="deleteRecipeChoiceItem(product_id)"/>
  </div>
</template>

          

<script>
import Popper from "vue3-popper";
import Button from '../../components/Button.vue';
import ProductListRecipe from "../../components/ProductListRecipe.vue";
import MyRecipeService from "../../services/MyRecipeService";
import Modal from "../../components/Modal.vue";

export default {
  inject : ['common'],
  name: "ChoiceRecommendedBlendingPackageSelection",
  components: {
    Popper,
    ProductListRecipe,
    Button,
    Modal,
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
      isRecommendedModalVisible : false,
      isChoiceModalVisible : false,
      
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
          console.table(res.data.recipeData)
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

          this.$swal(res.message, "error");
        }
    })
    },
    
    deleteRecipeItemRecommended(){
      if(!this.product_id){
       this.$swal('Any one of the products needs to be selected')
       return
     }
      this.isRecommendedModalVisible = true;
      
    },

    deleteRecipeItemChoice(){
       if(!this.product_id){
       this.$swal('Any one of the products needs to be selected')
       return
     }
      this.isChoiceModalVisible = true;
      
    },

    deleteRecipeRecommendedItem(id){
      
      this.deleteRecipeItem(id, 'recommended')
    },

    deleteRecipeChoiceItem(id){
      this.deleteRecipeItem(id, 'choice')
    },

    closeModalRecommended(){
       this.isRecommendedModalVisible = false;
    },

    closeModalChoice(){
       this.isChoiceModalVisible = false;
    },

   deleteRecipeItem(id, type){
     
     //console.log(`delete item product id : ${id}`)
      this.myRecipe.deleteRecipeData(id)
    .then((res)=>{
        if (res.status == 200) {
          this.$swal(`Delete ${res.message}`)

          if(type == 'recommended'){
             this.allRecommendedData();
          }

          if(type == 'choice'){
             this.allChoiceData();
          }
          
          
        } else {

          this.$swal(res.message, "error");
        }
    })
   },

   toNextRecommended(){
     if(!this.product_id){
       this.$swal('Any one of the products needs to be selected')
       return;
     }
     this.$router.push({ name : 'MyRecipeDetails', params : { id : this.product_id, type : 'recommended-blending'}})
   },

   toNextChoice(){
     if(!this.product_id){
       this.$swal('Any one of the products needs to be selected')
       return;
     }
     this.$router.push({ name : 'MyRecipeDetails', params : { id : this.product_id, type : 'my-choice'}})
   }


  }
};
</script>