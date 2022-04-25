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
                  <ProductListRecipe :item="item" @changeId="getProductId" type="recommended" @type="getType" :unchecked='unchecked'/>
                </li>
              </ul>
              <div class="btn-wrap flexEnd">
                <button class="btn-small-solid blue" @click="toNextRecommended" :class="(type == 'radiochoice' || type == '') ? 'btn-disabled' : ''"  :disabled="recommendedDisabled">Next</button>
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
                  <ProductListRecipe :item="item" @changeId="getProductId" @type="getType" type="choice" :unchecked='unchecked'/>
                </li>
              </ul>
              <div class="btn-wrap flexEnd">
                <button class="btn-small-solid blue" :class="(type == 'radiorecommended' || type == '') ? 'btn-disabled' : ''" @click="toNextChoice" :disabled="choiceDisabled">Next</button>
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
    <Modal v-show="isItemSelectedVisible" @close="closeModalDelete" bodytext1="There are no items selected"
    btnText1="Confirm"/>
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
      //isNextDisable : true,
      recommendedBlendingData : [],
      myChoiceData : [],
      isRecommendedModalVisible : false,
      isChoiceModalVisible : false,
      isItemSelectedVisible : false,
      type :'',
      recommendedDisabled : true,
      choiceDisabled : true,
      unchecked : true,
    };
  },

  created(){
    this.myRecipe = new MyRecipeService()
    this.allRecommendedData();
    this.allChoiceData();
    
  },

  // updated(){
  //   if(this.product_id != false){
  //     this.isNextDisable = false
  //   }
  // },

  methods : {
    getType(name){
      this.type = name;
     if(name == 'radiochoice'){
         this.choiceDisabled = false;
      }else{
         this.choiceDisabled = true;
      }
      
      if(name == 'radiorecommended'){
         this.recommendedDisabled = false;
      }else{
         this.recommendedDisabled = true;
      }
      console.log(name)
    },

    getProductId(id){
      this.product_id = id;
      console.log(this.product_id)
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

    closeModalDelete(){
       this.isItemSelectedVisible = false;
    },
    
    deleteRecipeItemRecommended(){
      if(this.type !== 'radiorecommended'){
       //this.$swal('Any one of the products needs to be selected')
        this.isItemSelectedVisible = true;
       return
     }
      this.isRecommendedModalVisible = true;
      
    },

    deleteRecipeItemChoice(){
       if(this.type !== 'radiochoice'){
       //this.$swal('Any one of the products needs to be selected')
       this.isItemSelectedVisible = true;
       return
     }
      this.isChoiceModalVisible = true;
      
    },

    deleteRecipeRecommendedItem(id){
      
      this.deleteRecipeItem(id, this.type)
    },

    deleteRecipeChoiceItem(id){
      this.deleteRecipeItem(id, this.type)
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
          //this.$swal(`Delete ${res.message}`)

          if(type == 'radiorecommended'){
             this.allRecommendedData();
          }

          if(type == 'radiochoice'){
             this.allChoiceData();
          }
          
          this.product_id = '';
          this.type = '';
          this.recommendedDisabled = true;
          this.choiceDisabled = true;
          this.unchecked = true;
          
        } else {

          //this.$swal(res.message, "error");
          console.log(res.message)
        }
    })
   },

   toNextRecommended(){
     
     this.$router.push({ name : 'MyRecipeDetails', params : { id : this.product_id, type : 'recommended-blending'}})
   },

   toNextChoice(){
     if(!this.product_id && this.type !== 'radiochoice' ){
       this.$swal('Any one of the products needs to be selected')
       return;
     }
     this.$router.push({ name : 'MyRecipeDetails', params : { id : this.product_id, type : 'my-choice'}})
   }


  }
};
</script>