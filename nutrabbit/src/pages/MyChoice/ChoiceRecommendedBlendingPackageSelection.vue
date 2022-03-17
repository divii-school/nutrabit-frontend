<template>
  <div class="main-body">
    <div class="container-medium">
      <div class="my-choce-wrap my-choice-selection package-list-section">
        <div class="my-choice-heading">
          <h2>Recommended blending</h2>
          <ul class="recomanded-status-wrap">
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>Raw material selection</p>
              </div>
            </li>
            <li class="recomanded-status visited">
              <div class="d-item">
                <span></span>
                <p>Formulation selection</p>
              </div>
            </li>
            <li class="recomanded-status active">
              <div class="d-item">
                <span></span>
                <p>Choose a package</p>
              </div>
            </li>
            <li class="recomanded-status">
              <div class="d-item">
                <span></span>
                <p>final quote</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="choice-selection-item-wrap">
          <div class="choice-selection-item raw-material">
            <div class="heading-wrap">
              <div class="heading">
                <h2>Choose a package</h2>
                <div class="tolltip-outer">
                  <Popper>
                    <button><i class="icon-info"></i></button>
                    <template #content>
                      <div class="heading-tooltip-content">
                        <ul>
                          <li>Please select the desired package.</li>
                          <li>
                            When requesting a sample, please check 'Not
                            Selected' for package selection.
                          </li>
                          <li>
                            Subpackages are the most used packages. If there is
                            a separate package you want, please indicate it on
                            the next page.
                          </li>
                        </ul>
                      </div>
                    </template>
                  </Popper>
                </div>
              </div>
            </div>
            <div class="package-list-wrap">
              <ul class="raw-material-list package-list">
                <li v-for="data in rwaMaterialData" :key="data">
                  <div class="list-left" :class="data.img ? '' : 'with-input' ">
                    <div class="radio-wrap">
                      <label class="custom-radio">
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                      </label>
                      <div class="img-wrap" v-if="data.img">
                        <img :src="data.img" alt="" />
                      </div>
                    </div>
                    <div
                      class="material-details">
                      <h2>{{ data.title }}</h2>
                      <div class="description" v-if="data.desc">
                        <p
                          v-for="(description, index) in data.desc"
                          :key="index"
                        >
                          {{ description }}
                        </p>
                      </div>
                      <div class="input-group" v-if="data.inputField">
                        <input
                          :type="data.inputField.type"
                          :value="data.inputField.value"
                          :placeholder="data.inputField.placeholder"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="btn-wrap">
                <button class="btn-small-solid grey">Previous</button>
                <button class="btn-small-solid blue">next</button>
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
export default {
  name: "ChoiceRecommendedBlendingPackageSelection",
  components: {
    Popper,
  },
  data() {
    return {
      rwaMaterialData: [
        {
          img: "../../../src/assets/images/pkgSelection.png",
          title: "Bottle",
          desc: [
            "Choose from a variety of sizes and shapes of bottles and caps.",
          ],
        },
        {
          img: "../../../src/assets/images/pkgSelection.png",
          title: "PTP",
          desc: [
            "It is hygienic and convenient.",
            "The packaging volume is slightly larger.",
          ],
        },
        {
          title: "Etc",
          inputField: {
            type: "text",
            value: "",
            placeholder: "Direct input",
          },
        },
        {
          title: "unchecked",
        },
      ],
    };
  },
};
</script>