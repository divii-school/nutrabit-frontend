<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>My Choice</h2>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product">
            <div class="heading-wrap">
              <div class="heading">
                <h2>Options</h2>
              </div>
            </div>
            <div class="materialForm">
              <div class="tableWrap">
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>category</th>
                      <th>Explanation</th>
                    </tr>
                  </thead>
                  <tbody v-for="(option_item, index) in option_items" :key="index">
                    <tr>
                      <td>{{index + 1 }}</td>
                      <td>{{ option_item.category }}</td>
                      <td>{{ option_item.explanation }}</td>
                    </tr>
                    <!-- <tr>
                      <td>2</td>
                      <td>Raw material</td>
                      <td>aloe gel</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Raw material</td>
                      <td>aloe gel</td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
              <div class="fGroup">
                <label>Title</label>
                <input type="text" name="" placeholder="My own recipe made with guar gum hydrolyzate" v-model="title">
              </div>
              <div class="fGroup">
                <label>Additional Requests</label>
                <textarea placeholder="Please write freely" v-model="additionalRequest" ></textarea>
              </div>
              <div class="fGroup mb0">
                <label class="mb0">Service</label>
              </div>
              <div class="product-list-wrap">
                <div class="product-item with-input without-input">
                  <div class="material-details">
                    <h2 v-if="serviceType.length < 2" >{{serviceType[0]}}</h2>
                    <div v-else>
                      <h2 v-for="(service, index) in serviceType"  :key="index">{{service}}</h2>
                    </div>
                  </div>
                </div>
                <div class="btn-wrap">
                  <button class="btn-small-solid grey" @click="deleteRecipeDetail(product_id)">Delete</button>
                  <div class="btnWrapRight">
                    <button class="btn-green-outline blue" @click="toEditRecipeDetails(product_id)">Edit</button>
                    <button class="btn-small-solid blue ml-4">Next</button>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

          

<script>
// import Popper from "vue3-popper";
import ProductList from "../../components/ProductList.vue";
import MyRecipeService from "../../services/MyRecipeService";
export default {
  name: "MyRecipeDetails",
  components: {
    // Popper,
    ProductList,
  },
  data() {
    return {
      rwaMaterialData: [],
      additionalRequest : '',
      title : '',
      serviceType : [],
      option_items : [],
      //   {
      //     img: "../../../src/assets/images/pkgSelection.png",
      //     title: "Bottle",
      //     desc: [
      //       "Choose from a variety of sizes and shapes of bottles and caps.",
      //     ],
      //   },
      //   {
      //     img: "../../../src/assets/images/pkgSelection.png",
      //     title: "PTP",
      //     desc: [
      //       "It is hygienic and convenient.",
      //       "The packaging volume is slightly larger.",
      //     ],
      //   },
      // ],

      product_id : this.$route.params.id,
      application_type : ( this.$route.params.type == 'my-choice') ? 'my_choice' : 'recommended_blending'
    };
  },
  
  created(){
    this.myRecipe = new MyRecipeService();
    console.log(`product id is : ${this.product_id} and type is ${this.application_type}`)
    
  },
  mounted(){
      this.recipeSingleProductDetails(this.product_id, this.application_type);
  },
  methods : {
      recipeSingleProductDetails(_productID, _type){
      this.myRecipe.getSingleRecipeProductDetails(_productID, _type)
    .then((res)=>{
     console.log(res.data[0])
        if (res.status == 200) {
          
          this.rwaMaterialData = res.data
          this.additionalRequest = res.data[0].additional_request;
          this.title = res.data[0].title;
          if(res.data[0].service_type == 1){
              this.serviceType = ["Sample Application"]
          }else if(res.data[0].service_type == 2){
              this.serviceType = ["Get A Quote"]
          }
          else{
               this.serviceType = ["Sample Application", "Get A Quote"]
          }
         Array.from(res.data[0].options).forEach((ele)=>{
               //console.log(Object.keys(ele)[0], Object.values(ele)[0])
               let op_type = Object.keys(ele)[0].toString();
               let op_val = Object.values(ele)[0].toString();

               this.myRecipe.getOptionDetails(op_type, op_val).then(res => 
               //console.log(res.data[0])
               this.option_items.push( res.data[0] ),
               console.log(this.option_items)
               )
         
         })
      
        } else {

          this.$swal(res.data.message, "error");
        }
    })
    },

    toEditRecipeDetails(_id){
     if(!this.product_id){
       return;
     }
     //console.log(`to next id ${_id}`)
     this.$router.push({ name : 'MyRecipeDetailsEdit', params : { id : _id, type : this.application_type}})
   },

   deleteRecipeDetail(id){
     if(!this.product_id){
       return;
     }
     console.log(`delete item product id : ${id}`)
      this.myRecipe.deleteRecipeData(id)
    .then((res)=>{
        if (res.status == 200) {
          console.log(res)
        } else {

          this.$swal(res.data.message, "error");
        }
    })
   },
  }
};
</script>