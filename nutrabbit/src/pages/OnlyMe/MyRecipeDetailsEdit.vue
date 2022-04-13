<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>My choice</h2>
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
                      <td>One</td>
                      <td>Raw material</td>
                      <td>aloe gel</td>
                    </tr>
                    <tr>
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
                <input
                  type="text"
                  name=""
                  placeholder="My own recipe made with guar gum hydrolyzate"
                  v-model="title"
                />
              </div>
              <div class="fGroup">
                <label>Additional Requests</label>
                <span
                  >The more detailed you are, the more accurate your estimate
                  will be.</span
                >
                <textarea
                  placeholder="Please write freely"
                  v-model="add_req"
                ></textarea>
              </div>
              <div class="fGroup mb0">
                <label class="mb0"
                  >Select service
                  <span
                    >* Duplicate selection possible (package is excluded when
                    requesting a sample.)</span
                  >
                </label>
              </div>
              <div class="product-list-wrap">
                <div class="product-item recipeCheck">
                  <div class="form-group">
                    <div class="check-box-wrap">
                      <label class="custom-check">
                        <input
                          type="checkbox"
                          v-model="services"
                          value="2"
                        /><span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div class="material-details">
                    <h2>Get a quote</h2>
                  </div>
                </div>
                <div class="product-item recipeCheck">
                  <div class="form-group">
                    <div class="check-box-wrap">
                      <label class="custom-check">
                        <input
                          type="checkbox"
                          v-model="services"
                          value='1'
                        /><span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div class="material-details">
                    <h2>
                      sample application
                      <span>(Sample cost 300,000 won/paid)</span>
                    </h2>
                  </div>
                </div>
                <ul>
                  <li>
                    * The quotation will be sent to the registered email address
                    within 2 business days.
                  </li>
                  <li>
                    * Unit price may vary depending on quantity & package
                    design.
                  </li>
                  <li>
                    * It may differ from the detailed estimate at the time of
                    completion.
                  </li>
                </ul>
                <div class="btn-wrap">
                  <button class="btn-small-solid grey" @click="$router.push('/my-recipe')">Cancel</button>
                  <div class="btnWrapRight">
                    <button class="btn-small-solid blue ml-4" @click="saveRecipeDetails(product_id, title, add_req, services)">Save</button>
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
  name: "MyRecipeDetailsEdit",
  components: {
    // Popper,
    ProductList,
  },
  data() {
    return {
       rwaMaterialData: [],
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

      title: "",
      add_req: "",
      services: [],
      product_id: this.$route.params.id,
      application_type : ( this.$route.params.type == 'my-choice') ? 'my_choice' : 'recommended_blending',
      option_items : [],
      
    };
  },

  created() {
    this.myRecipe = new MyRecipeService();
    console.log(
      `product id is : ${this.product_id} and type is ${this.application_type}`
    );
  },

  mounted(){
      this.recipeSingleProductDetails(this.product_id, this.application_type);
  },

  updated() {
    //console.log(this.services);
  },

  methods: {

     recipeSingleProductDetails(_productID, _type){
      this.myRecipe.getSingleRecipeProductDetails(_productID, _type)
    .then((res)=>{
     console.log(res.data[0])
        if (res.status == 200) {
          
          this.rwaMaterialData = res.data
          this.add_req = res.data[0].additional_request;
          this.title = res.data[0].title;
         

         Array.from(res.data[0].options).forEach((ele)=>{
               //console.log(Object.keys(ele)[0], Object.values(ele)[0])
               let op_type = Object.keys(ele)[0].toString();
               let op_val = Object.values(ele)[0].toString();

               this.myRecipe.getOptionDetails(op_type, op_val).then(res => {
                 //  console.log(res.data[0])
                 if(res.status == 200){
                      this.option_items.push( res.data[0] )
                    //  console.log(this.option_items)
                 }else{
                   this.$swal(res.message, "error");
                 }
               }
              
               
               )
         
         })
      
        } else {

          this.$swal(res.message, "error");
        }
    })
    },

    saveRecipeDetails(_id, _title, _additional_req, _services) {
      if(!_id || !_title || !_additional_req || _services.length < 0){
          // this.$swal('Need to fill all the fields')
          return
      }
      
      let ser_tp = (_services.length > 1) ? '3' : _services[0]

      console.log(_id, _title, _additional_req, ser_tp)
      this.myRecipe.editRecipeDetail(_id, _title, _additional_req, ser_tp).then(res => {
        // console.log(_id, _title, _additional_req, ser_tp)
        // console.log(res)
        if(res.status == 200){
           this.$router.go(-1);
          console.log(res.message)
        } else {

          this.$swal(res.message, "error");
        }
    
      })
    },

    
  },
};
</script>