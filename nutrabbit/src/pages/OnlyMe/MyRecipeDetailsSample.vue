<template>
  <div class="main-body themeGreen">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>Sample application details</h2>
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
                  <tbody>
                    <tr>
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
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="fGroup">
                <label>Title</label>
                <input type="text" name="" placeholder="My own recipe made with guar gum hydrolyzate">
              </div>
              <div class="fGroup">
                <label>Additional Requests</label>
                <div class="ansBlock">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum adipiscing malesuada neque. Ut tincidunt vestibulum elementum leo scelerisque. Id consequat mi tempus etiam arcu neque, neque, diam tortor. Etiam amet commodo placerat elementum, laoreet ut scelerisque euismod. Pretium viverra id massa in eu vitae tellus. Nibh at ut tincidunt dignissim. Varius vulputate amet commodo netus. Consectetur proin convallis tincidunt sed tellus ornare diam dolor. Nulla nibh fringilla lacus consequat eget. Tellus mattis ullamcorper commodo, lacus. Aliquam feugiat id lectus aenean semper donec. Phasellus laoreet quis nulla placerat tempus vivamus. Libero tempor habitant pharetra, faucibus amet.</p>
                </div>
              </div>
              <div class="fGroup">
                <label>Answer</label>
                <div class="ansBlock">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum adipiscing malesuada neque. Ut tincidunt vestibulum elementum leo scelerisque. Id consequat mi tempus etiam arcu neque, neque, diam tortor. Etiam amet commodo placerat elementum, laoreet ut scelerisque euismod. Pretium viverra id massa in eu vitae tellus. Nibh at ut tincidunt dignissim. Varius vulputate amet commodo netus. Consectetur proin convallis tincidunt sed tellus ornare diam dolor. Nulla nibh fringilla lacus consequat eget. Tellus mattis ullamcorper commodo, lacus. Aliquam feugiat id lectus aenean semper donec. Phasellus laoreet quis nulla placerat tempus vivamus. Libero tempor habitant pharetra, faucibus amet.</p>
                </div>
              </div>
              <div class="product-list-wrap">
                <div class="btn-wrap flex-justify-end">
                  <button class="btn-small-solid grey">Previous</button>
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
export default {
  name: "MyRecipeDetails",
  components: {
    // Popper,
    ProductList,
  },
  data() {
    return {
      // rwaMaterialData: [
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
    };
  },
};
</script>