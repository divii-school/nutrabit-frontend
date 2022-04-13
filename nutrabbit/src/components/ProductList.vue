<template>
  <div class="product-item" :class="item.name_ko == 'ETC' ? 'with-input' : ''">
    <div class="radio-wrap">
      <label class="custom-radio">
        <input type="radio" name="radio" id="radio" :value="item.id" @click="getPackageId" />
        <span class="checkmark"></span>
      </label>
      <div class="img-wrap" v-if="item.name_ko != 'ETC' && item.name_ko != 'Unchecked'">
        <img v-bind:src="'http://api-nutrabbit-dev.dvconsulting.org' + item.image_path" alt />
      </div>
    </div>
    <div class="material-details">
      <h2>{{ item.name_ko }}</h2>
      <div v-if="item.name_ko != 'ETC' && item.name_ko != 'Unchecked'" class="description">
        <p>{{ item.description_ko }}</p>
        <!-- <p v-for="(description, ind) of item.desc" :key="ind">{{description}}</p> -->
        <!-- <table>
          <tr>
            <th><p>Raw material</p></th>
            <td><p>{{ item.raw_material_name }}</p></td>
          </tr>
          <tr>
            <th><p>Formulation</p></th>
            <td><p>{{ item.formulation }}</p></td>
          </tr>
          <tr>
            <th><p>Package</p></th>
            <td><p>{{ item.package }}</p></td>
          </tr>
          <tr>
            <th><p>Additional Request</p></th>
            <td><p>{{ item.additional_request }}</p></td>
          </tr>
          <tr>
            <th><p>Service</p></th>
            <td><p>{{ item.service }}</p></td>
          </tr>
          </table> -->
      </div>
      <div v-if="item.name_ko == 'ETC'" class="input-group">
        <input type="text" @keyup="getEtc" placeholder="Etc input" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: ["item"],
  methods: {
    getPackageId(event) {
      this.$emit('changeId', event.target.value);
      if (this.item.name_ko == 'ETC') {
        this.$emit('etcChecked', 'ETC');
      }
      else {
        this.$emit('etcChecked', '');
      }
      //console.log(event.target.value)
    },
    getEtc(event) {
      this.$emit('etcInput', event.target.value);
      //console.log(event.target.value)
    }
  }
};
</script>