<template>
 <router-link to="/faq">
        <Button label="Go Back" icon="pi pi-angle-left" iconPos="left" 
        class="p-button back-button p-button-sm p-mr-2 p-mb-2"></Button>
    </router-link>
<div class="p-grid cms_wrap">
        <div class="p-col-12">
            <div class="card">
                <h5>New</h5>
                <div class="p-fluid">
                        <div class="p-formgrid p-grid m-0">
                            <div class="p-field p-col-4">
                                <label for="name2">question</label>
                                <InputText id="name2" type="text" />
                            </div>
                            <div class="p-field p-col-4">
                                <label for="state">state</label>
                                <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
                            </div>
                        </div>
                   
                </div>
                 <p>Answer</p>
                <div class="p-field p-col-12">
                    <Textarea class="descrition_edit" id="address" rows="4"/>
                </div>
                <div class="p-field p-col-12 p-d-flex p-jc-end">
                    <Button type="button" class="p-button-outlined p-mr-2 p-mb-2" label=" initialization" icon="pi pi-refresh" />
                    <Button type="button" class="p-mr-2 p-mb-2" label="Confirm" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
         name: 'Faqadd',
         data() {
			return {
				customer1: null,
				customer2: null,
				customer3: null,
				filters1: null,
				filters2: {},
				loading1: true,
				loading2: true,
				idFrozen: false,
				products: null,
				expandedRows: [],
				statuses: [
					'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
				],
			
				dropdownItems: [
					{name: 'Activation', code: 'activete'},
					{name: 'Inactivation', code: 'inactivete'}
				],
				dropdownItem: null,
			
				
			}
		},
        
}
</script>
<style scoped>
    .descrition_edit{
        width: 100%;
    }
    .p-field{
        padding:0 1rem 1rem 0;
    }
    .align-right{
        text-align: right;
        width: 100%;
    }
    .m-0{
        margin: 0;
    }
    .back-button{
        background-color: transparent;
        border:0;
        color:#000;
        outline: none;
    }
    .back-button:hover{
         background-color: transparent;
        border:0;
        color:#000;
    }
</style>