<template>
  <div class="card">
    <Toast />
    <form>
      <div class="p-grid p-fluid">
        <div class="p-col-12">
          <h5>{{ $t("Banner.addnew_banner") }}</h5>
          <div class="p-grid p-formgrid p-mb-3">
            <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
              <label for="title2">{{ $t("Banner.list.title") }}</label>
              <InputText :class="`${error.title ? 'p-invalid' : ''}`" type="text"
                :placeholder="$t('Banner.list.bannertitle')" id="title2" v-model="title"></InputText>
              <div class="text-red">{{ error.title }}</div>
            </div>
          </div>

          <div class="p-grid p-formgrid p-mb-3">
            <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
              <label for="subtitle2">
                {{ $t("Banner.list.deskbanner") }}
                <span class="img-info">(File Type jpg,jpeg,png )(Image width 1920px and hieght 828px )</span>
              </label>
              <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                <span v-if="!fileName">{{ $t("button.select_file") }}</span>
                <span v-else>{{ fileName }}</span>

                <input type="file" class="select-file p-inputtext p-component"
                  :class="`${error.file ? 'p-invalid' : ''}`" v-on:change="onFileChange" id="file" />

                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
              </div>
              <div class="text-red">{{ error.file }}</div>
              <div class="text-red" v-show="render1">
                {{ $t("validation.invalidFile") }}
              </div>
              <img id="frame" src width="100px" height="100px" />
            </div>
          </div>
          <div class="p-grid p-formgrid p-mb-3">
            <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
              <label for="subtitle2">
                {{ $t("Banner.list.mobbanner") }}
                <span class="img-info">(File Type jpg,jpeg,png )(Image width 1920px and hieght 828px )</span>
              </label>
              <div :class="`${error.file ? 'custom-select-invalid' : 'custom-select'}`">
                <span v-if="!filesName">{{ $t("button.select_file") }}</span>
                <span v-else>{{ filesName }}</span>
                <input type="file" class="select-file" v-on:change="onFileChanges" id="files" />
                <Button :label="$t('button.select_file')" class="SelectBtn n-wrap" />
              </div>
              <div class="text-red">{{ error.file }}</div>
              <div class="text-red" v-show="render2">
                {{ $t("validation.invalidFile") }}
              </div>
              <img id="frame" src width="100px" height="100px" />
            </div>
          </div>

          <div class="p-grid p-formgrid p-mb-3">
            <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
              <label for="title2">{{ $t("Banner.list.link") }}</label>
              <InputText :class="`${error.link ? 'p-invalid' : ''}`" type="text" :placeholder="$t('Banner.list.link')"
                id="title2" v-model="link"></InputText>

              <div class="text-red">{{ error.link }}</div>
            </div>
          </div>

          <div class="p-grid p-formgrid p-mb-3">
            <div class="p-col-12 p-mb-2 p-lg-6 p-mb-lg-0 p-field">
              <label for="state2">{{ $t("Banner.list.status") }}</label>
              <br />
              <!-- <Dropdown v-model="dropdownValue" modelValue="dropdownValues[0].name" :options="dropdownValues" optionLabel="code" :placeholder="status" /> -->
              <div :class="`${error.status ? 'p-invalid' : ''}`">
                <input type="radio" id="yes" value="active" name="status" v-model="status" />
                <label for="yes">Yes</label>

                <input type="radio" id="no" name="status" value="inactive" v-model="status" />
                <label for="no">No</label>
              </div>

              <div class="text-red">{{ error.status }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-d-flex p-jc-end p-ai-center" style="float: left">
        <Button :label="$t('button.confirm')" icon="pi pi-check" iconPos="left"
          class="p-button p-button-sm p-mr-2 p-mb-2" @click="addBanner"></Button>
      </div>
      <div class="p-d-flex p-jc-end p-ai-center">
        <div>
          <Button :label="$t('button.back')" icon="pi pi-replay" iconPos="left"
            class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import validateCreateBanner from "../../validations/banner/validateCreateBanner";
export default {
  name: "AddBanner",
  // props: ['dog', 'image'],
  data() {
    return {
      render1: false,
      render2: false,
      dropdownValues: [
        { name: "active", code: "활성" },
        { name: "inactive", code: "비활성" },
      ],
      // dropdownValueTypes: [{ name: 'nft',code:'NFT' }, { name: 'card_news',code:'Card News' }, { name: 'media_press',code:'Media press' }, { name: 'de_fi_services',code:'De-Fi Services' }],
      dropdownValue: "활동적인",
      // dropdownValueType: null,
      sorting_order: "1",
      title: "",
      subtitle: null,
      link: "",
      files: null,
      filesName: "",
      file: "",
      image: "",
      fileName: "",
      fileExtension: "",
      filesExtension: "",
      status: "",

      formData: new FormData(),
      error: {},
    };
  },
  methods: {
    reinitialize() {
      (this.dropdownValue = null),
        (this.title = null),
        (this.link = null),
        (this.fileName = null),
        (this.file = {});
    },
    open() {
      this.display = true;
    },
    close() {
      this.display = false;
    },
    onFileChange(e) {
      var _URL = window.URL || window.webkitURL;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.file = files[0];
      var sfile, simg;
      var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(this.file.name)) {
        this.render1 = true;
        return false;
      } else {
        this.render1 = false;
        let self = this;
        //  this.fileName = this.file.name;
        console.log("this.filename--", this.fileName);
        console.log("this.file--", this.file);
        if ((sfile = this.file)) {
          simg = new Image();
          simg.onload = function () {
            alert(this.width + " " + this.height);
            if (this.width >= 1920 && this.height >= 828) {

              self.fileName = files[0].name;
              console.log(self.fileName)
            } else {
              alert("작은 이미지에 더 큰 이미지를 추가하십시오 ")
            }
          };

          simg.onerror = function () {
            alert("not a valid file: " + sfile.type);
          };
          simg.src = _URL.createObjectURL(sfile);

          this.formData.append("desktop_banner", files[0]);

        }
      }

      this.fileExtension = this.fileName.replace(/^.*\./, "");
      console.log(this.fileName);
    },

    onFileChanges(e) {
      var _URL = window.URL || window.webkitURL;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.files = files[0];
      var sfiles, simgs;
      if (!files.length) return;
      this.files = files[0];
      var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(this.files.name)) {
        this.render2 = true;
        return false;
      } else {
        this.render2 = false;
        let self = this;
        // this.filesName = this.files.name;

        console.log("this.filesname--", this.filesName);
        console.log("this.files--", this.files);
        if ((sfiles = this.files)) {
          simgs = new Image();
          simgs.onload = function () {
            alert(this.width + " " + this.height);
            if (this.width >= 1920 && this.height >= 828) {

              self.filesName = files[0].name;
              console.log(self.filesName)
            } else {
              alert("작은 이미지에 더 큰 이미지를 추가하십시오 ")
            }
          };

          simgs.onerror = function () {
            alert("not a valid file: " + sfiles.type);
          };
          simgs.src = _URL.createObjectURL(sfiles);

          this.formData.append("mobile_banner", files[0]);
        }
      }
      this.filesExtension = this.filesName.replace(/^.*\./, "");
      console.log(this.filesName);
    },

    addBanner() {
      let vcheckData = {
        title: this.title,
        status: this.status,
        sorting_order: this.sorting_order,
        // type: this.dropdownValueType == null ? '' : 'something',
        link: this.link,
        file: this.fileName == "" ? "" : "something",
      };
      const { isInvalid, error } = validateCreateBanner(vcheckData);
      if (isInvalid) {
        this.error = error;
        console.log(error);
      } else {
        // console.log(this.file);
        this.formData.append("title", this.title);
        this.formData.append("link", this.link);
        this.formData.append("sorting_order", this.sorting_order);
        // this.formData.append('type', this.dropdownValueType?.name);
        this.formData.append("status", this.status);
        console.log(this.formData);
        return axios.post("/admin/banner/add", this.formData).then(() => {
          alert("성공적으로 저장");
          this.$toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "Succesfully Published.",
            life: 3000,
          });
          this.$router.push({ name: "BannerManagement" });
        });
      }
    },
  },
};
</script>

<style scoped>
.img-info {
  font-size: 11px;
  font-weight: 400;
  color: rgb(48, 48, 48);
}

.custom-select {
  position: relative;
  border: 1px solid #cecece;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
}

.p-inputtext.p-invalid.p-component {
  border-color: #f44336;
}

.custom-select-invalid {
  position: relative;
  border: 1px solid red;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
}

.select-file {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0%;
  z-index: 5;
  opacity: 0;
}

.SelectBtn {
  max-width: 100px;
}

.custom-select span {
  max-width: 140px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.p-button {
  background: #000000;
  border: 1px solid #0a0a0a;
  color: white;
}
</style>
