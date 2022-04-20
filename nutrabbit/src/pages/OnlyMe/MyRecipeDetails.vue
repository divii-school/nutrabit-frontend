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
                  <tbody
                    v-for="(option_item, index) in option_items"
                    :key="index"
                  >
                    <tr>
                      <td>{{ index + 1 }}</td>
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
                <input
                  type="text"
                  name=""
                  placeholder="My own recipe made with guar gum hydrolyzate"
                  v-model="title"
                />
              </div>
              <div class="fGroup">
                <label>Additional Requests</label>
                <textarea
                  placeholder="Please write freely"
                  v-model="additionalRequest"
                ></textarea>
              </div>
              <div class="fGroup mb0">
                <label class="mb0">Service</label>
              </div>
              <div class="product-list-wrap">
                <div v-if="serviceType.length < 2">
                  <div class="product-item with-input without-input">
                    <div class="material-details">
                      <h2>{{ serviceType[0] }}</h2>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div
                    v-for="(service, index) in serviceType"
                    :key="index"
                    class="product-item with-input without-input"
                  >
                    <div class="material-details">
                      <h2>{{ service }}</h2>
                    </div>
                  </div>
                </div>
                <div class="btn-wrap">
                  <button class="btn-small-solid grey" @click="openModal">
                    Delete
                  </button>
                  <div class="btnWrapRight">
                    <button
                      class="btn-green-outline blue"
                      @click="toEditRecipeDetails(product_id, app_type)"
                    :disabled="isDisabled">
                      Edit
                    </button>
                    <button
                      class="btn-small-solid blue ml-4"
                      @click="toPaymentGateway(product_id)"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-show="isModalVisible" @close="closeModal" bodytext1="Are you sure?"
    btnText1="Cancel"  btnText2 = "OK"  link="/my-recipe" @confirm="deleteRecipeDetail"/>
  </div>
</template>

          

<script>
// import Popper from "vue3-popper";
import ProductList from "../../components/ProductList.vue";
import MyRecipeService from "../../services/MyRecipeService";
import Modal from "../../components/Modal.vue";

export default {
  name: "MyRecipeDetails",
  components: {
    // Popper,
    ProductList,
    Modal,
  },
  data() {
    return {
      rwaMaterialData: [],
      additionalRequest: "",
      title: "",
      serviceType: [],
      option_items: [],
      isModalVisible: false,
      serviceNum: "",
      isDisabled : false,
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

      product_id: this.$route.params.id,
      application_type:
        this.$route.params.type == "my-choice"
          ? "my_choice"
          : "recommended_blending",
      app_type: this.$route.params.type,
    };
  },

  created() {
    this.myRecipe = new MyRecipeService();
    // console.log(
    //   `product id is : ${this.product_id} and type is ${this.application_type}`
    // );
  },
  mounted() {
    this.recipeSingleProductDetails(this.product_id, this.application_type);
  },
  methods: {
    recipeSingleProductDetails(_productID, _type) {
      this.myRecipe
        .getSingleRecipeProductDetails(_productID, _type)
        .then((res) => {
          console.log(res.data[0]);
          if (res.status == 200) {

            if(res.data[0].is_temporary_storage == 'N'){
              this.$router.push('/my-recipe')
              this.isDisabled = true;
              return;
          }

            this.rwaMaterialData = res.data[0];
            console.log(this.rwaMaterialData)
            this.additionalRequest = res.data[0].additional_request;
            this.title = res.data[0].name_ko;
            this.serviceNum = res.data[0].service_type;
            if (this.serviceNum == 1) {
              this.serviceType = ["Sample Application"];
            } else if (this.serviceNum == 2) {
              this.serviceType = ["Get A Quote"];
            } else {
              this.serviceType = ["Sample Application", "Get A Quote"];
            }
            Array.from(res.data[0].options).forEach((ele) => {
              console.log(Object.keys(ele)[0], Object.values(ele)[0])
              let op_type = Object.keys(ele)[0].toString();
              let op_val = Object.values(ele)[0].toString();

              this.myRecipe.getOptionDetails(op_type, op_val).then((res) => {
                //console.log(res.data[0])
                if (res.status == 200) {
                  this.option_items.push(res.data[0]),
                    console.log(this.option_items);
                } else {
                 // this.$swal(res.message, "error");
                 console.log(res.message)
                }
              });
            });
          } else {
            this.$swal(res.message, "error");
          }
        });
    },

    openModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
      //this.deleteRecipeDetail(this.product_id);
    },

    toEditRecipeDetails(_id, _type) {
      if (!_id) {
        return;
      }
      //console.log(`to next id ${_id}`)
      this.$router.push({
        name: "MyRecipeDetailsEdit",
        params: { id: _id, type: _type },
      });
    },

    toPaymentGateway(_id) {
      //console.log(this.serviceNum)

      this.myRecipe.submitRecipeApplication(_id).then((res) => {
        if (res.status == 200) {
         // console.log(`application submit status : ${res.message}`);

          if (this.serviceNum == 1 || this.serviceNum == 3) {
            // for payment gatteway
            console.log(`product id for payment is  : ${_id}`);
          }else{
              // if service is quote
              this.$router.replace('/my-application-detail')
          }


        } else {
          this.$swal(res.message, "error");
        }
      });
    },

    deleteRecipeDetail() {
      //console.log(`delete item product id : ${id}`);

      this.myRecipe.deleteRecipeData(this.product_id).then((res) => {
        if (res.status == 200) {
          console.log(res.message);
          this.additionalRequest = "";
          this.title = "";
          this.serviceType = [];
          this.option_items = [];
        } else {
          this.$swal(res.message, "error");
        }
      });
    },
  },
};
</script>