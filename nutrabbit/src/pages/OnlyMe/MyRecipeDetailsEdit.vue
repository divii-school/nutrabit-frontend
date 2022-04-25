<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>{{ page_header }}</h2>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material-product">
            <div class="heading-wrap">
              <div class="heading">
                <h2>{{$t("onlyme.title.Options")}}</h2>
              </div>
            </div>
            <div class="materialForm">
              <div class="tableWrap">
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>{{$t("onlyme.tableCaption.Category")}}</th>
                      <th>{{$t("onlyme.tableCaption.Description")}}</th>
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
                <label>{{$t("onlyme.title.Title")}}</label>
                <input
                  type="text"
                  name=""
                  disabled
                  :placeholder="$t('onlyme.placeholder.title')"
                  v-model="title"
                />
              </div>
              <div class="fGroup">
                <label>{{$t('onlyme.title.AdditionalRequest')}}</label>
                <span
                  >{{$t('onlyme.add_req_caption.Caption')}}</span
                >
                <textarea
                  placeholder="Please write freely"
                  v-model="add_req"
                ></textarea>
              </div>
              <div class="fGroup mb0">
                <label class="mb0"
                  >{{$t('onlyme.title.Service')}}
                  <span
                    >{{$t('onlyme.service_caption.Caption')}}</span
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
                          v-model="isQuote"
                          value="2"
                        /><span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div class="material-details">
                    <h2>Get an estimate</h2>
                  </div>
                </div>
                <div class="product-item recipeCheck">
                  <div class="form-group">
                    <div class="check-box-wrap">
                      <label class="custom-check">
                        <input
                          type="checkbox"
                          v-model="isSample"
                          value='1'
                        /><span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div class="material-details">
                    <h2>
                      샘플 신청
                      <span>(샘플비용 300,000원/유료)</span>
                    </h2>
                  </div>
                </div>
                <ul>
                  <li>
                    {{$t("onlyme.service_info.ContentOne")}}
                  </li>
                  <li>
                    {{$t("onlyme.service_info.ContentTwo")}}
                  </li>
                  <li>
                    {{$t("onlyme.service_info.ContentThree")}}
                  </li>
                </ul>
                <div class="btn-wrap">
                  <button class="btn-small-solid grey" @click="$router.push('/my-recipe')">{{$t('onlyme.button.Cancel')}}</button>
                  <div class="btnWrapRight">
                    <button class="btn-small-solid blue ml-4" @click="saveRecipeDetails(product_id, title, add_req, services)">{{$t('onlyme.button.Save')}}</button>
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
import validator from "validator";

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
      isSample : false,
      isQuote : false,
      product_id: this.$route.params.id,
      application_type : ( this.$route.params.type == 'my-choice') ? 'my_choice' : 'recommended_blending',
      option_items : [],
      page_header : (this.$route.params.type == "my-choice") ? "My Choice" : "Recommended Blending",
      // emptyTitle : false,
      // emptyReq : false,
      // emptyService : false,
      // errMsg : '',
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
          if(res.data[0].is_temporary_storage == 'N'){
              this.$router.push('/my-recipe')
              return;
          }
          this.rwaMaterialData = res.data
          this.add_req = res.data[0].additional_request;
          this.title = (_type == 'my_choice') ? res.data[0].title : res.data[0].name_ko;

         if(res.data[0].service_type == 1){
           this.isSample = true;
         }
          
          if(res.data[0].service_type == 2){
           this.isQuote = true;
         }

         if(res.data[0].service_type == 3){
           this.isSample = true;
           this.isQuote = true;
         }


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
                   //this.$swal(res.message, "error");
                   console.log(res.message)
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
      if(!_id || !_title || !_additional_req || (!this.isSample && !this.isQuote)){
      this.$swal('All fields required to be filled')

      // this.emptyTitle = (!_title) ? true : false;
      // this.emptyReq = (!_additional_req) ? true : false;
      // this.emptyService = (!this.isSample && !this.isQuote) ? true : false;
      //this.errMsg = 'Needs to fill all the fields'

      return
      }
      
      //let ser_tp = (_services.length > 1) ? '3' : _services[0]

      let ser_tp;

      if(this.isSample){
        ser_tp = '1';
      }

      if(this.isQuote){
        ser_tp = '2';
      }

      if(this.isSample && this.isQuote){
        ser_tp = '3';
      }

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