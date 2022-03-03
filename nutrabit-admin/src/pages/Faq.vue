<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card p-fluid">
				<h5>Search</h5>
				<div class="p-formgrid p-grid">
					<div class="p-field p-col">
						<label for="name2">question</label>
						<InputText id="name2" type="text" />
					</div>
					<div class="p-field p-col">
						<label for="state">state</label>
						<Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select One"></Dropdown>
					</div>
					<div class="p-field p-col">
						<label for="state">Start Date:</label>
						<Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>
					</div>
					
				</div>
				<div class="p-formgrid p-grid">
					<div class="p-field p-col-4">
						<label for="state">Last Date:</label>
						<Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>
					</div>
				</div>
				
				<div class="p-grid">
					<div class="p-col-12">
						<div class="p-formgrid p-grid">
							<div class="p-field p-col-6">
								<div class="p-formgrid p-grid">
									<div class="p-field p-col-3">
										<Button type="button" class="p-button-outlined p-mr-2 p-mb-2" label="today" icon="pi pi-calendar" />
									</div>
									<div class="p-field p-col-3">
										<Button type="button" class="p-button-outlined p-mr-2 p-mb-2" label="last week" icon="pi pi-calendar" />
									</div>
									<div class="p-field p-col-3">
										<Button type="button" class="p-button-outlined p-mr-2 p-mb-2" label="last month" icon="pi pi-calendar" />
									</div>
									
									</div>
									<div class="p-formgrid p-grid">
										<div class="p-field p-col-4">
										<Button type="button" class="p-button-outlined p-mr-2 p-mb-2" label="last 6 months" icon="pi pi-calendar" />
									</div>
										<div class="p-field p-col-4">
											<Button type="button" class="p-button-outlined p-mr-2 p-mb-2" label="last year" icon="pi pi-calendar" />
										</div>
									</div>
							</div>
							<div class="p-field p-col-6 p-d-flex p-jc-end">
								<Button type="button" class="p-button refresh-button p-button-outlined p-mr-2 p-mb-2" label=" initialization" icon="pi pi-refresh" />
								<Button type="button" class="p-button refresh-button p-mr-2 p-mb-2" label="Search" icon="pi pi-search" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="p-col-12">
			<div class="card">
				<div class="heading_wrap">
					<h5>Management | Frequently Asked Questions</h5>
					<router-link to="/Faq/add"><Button label="New" icon="pi pi-plus" class="p-mr-2 p-mb-2"></Button></router-link>
				</div>
				
			<DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" 
							v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1" responsiveLayout="scroll"
							:globalFilterFields="['name','country.name','representative.name','balance','status']" >
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>
                    <Column field="name" header="Number" style="min-width:12rem">
                        <template #body="{data}">
                            <span class="p-column-title">Number</span>
                            {{data.name}}
                        </template>
                    </Column>
                    <Column header="Questions" filterField="country.name" style="min-width:12rem">
                        <template #body="{data}">
                           <router-link to="/Faq/edit"><span class="p-column-title">Questions</span>
                            <span style="margin-left: .5em; vertical-align: middle" class="image-text">{{data.country.name}}</span></router-link>
                        </template>
                        <template #filterclear="{filterCallback}">
                            <Button type="button" icon="pi pi-times" @click="filterCallback()" class="p-button-secondary"></Button>
                        </template>
                        <template #filterapply="{filterCallback}">
                            <Button type="button" icon="pi pi-check" @click="filterCallback()" class="p-button-success"></Button>
                        </template>
                        <template #filterfooter>
                            <div class="p-px-3 p-pt-0 p-pb-3 p-text-center p-text-bold">Customized Buttons</div>
                        </template>
                    </Column>
                    <Column header="State" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" style="min-width:14rem">
                        <template #body="{data}">
                            <span class="p-column-title">State</span>
                            <!-- <img :alt="data.representative.name" :src="'assets/demo/images/avatar/' + data.representative.image" width="32" style="vertical-align: middle" /> -->
                            <span style="margin-left: .5em; vertical-align: middle" class="image-text">{{data.representative.name}}</span>
                        </template>
                    </Column>
                    <Column header="Creation Date" filterField="date" dataType="date" style="min-width:10rem">
                        <template #body="{data}">
                            <span class="p-column-title">Creation Date</span>
                            {{formatDate(data.date)}}
                        </template>
                    </Column>
                    <Column header="Management" filterField="balance" dataType="numeric" style="min-width:10rem">
                        <template #body="{data}">
                            <span class="p-column-title">Management</span>
                            <p style="display: none;">{{formatCurrency(data.balance)}}</p>
							<router-link to="/Faq/edit"><Button type="button" class="p-button-outlined p-mr-2 p-mb-2" label="Correction" icon="pi pi-user-edit" /></router-link>
							<Button type="button" class="p-button-outlined p-button-danger p-mr-2 p-mb-2" label="Delete" icon="pi pi-trash" />
						</template>
                    </Column>
				</DataTable>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import {FilterMatchMode,FilterOperator} from 'primevue/api';
	import CustomerService from "../service/CustomerService";
	import ProductService from '../service/ProductService';
	export default {
		name: "Faq",
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
			
				representatives: [
					{name: "Amy Elsner", image: 'amyelsner.png'},
					{name: "Anna Fali", image: 'annafali.png'},
					{name: "Asiya Javayant", image: 'asiyajavayant.png'},
					{name: "Bernardo Dominic", image: 'bernardodominic.png'},
					{name: "Elwin Sharvill", image: 'elwinsharvill.png'},
					{name: "Ioni Bowcher", image: 'ionibowcher.png'},
					{name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
					{name: "Onyama Limba", image: 'onyamalimba.png'},
					{name: "Stephen Shaw", image: 'stephenshaw.png'},
					{name: "XuXue Feng", image: 'xuxuefeng.png'}
				],
			}
		},
		customerService: null,
		productService: null,
		created() {
			this.customerService = new CustomerService();
			this.productService = new ProductService();
			this.initFilters1();
		},
		mounted() {
			this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
			this.customerService.getCustomersLarge().then(data => {
				this.customer1 = data; 
				this.loading1 = false;
				this.customer1.forEach(customer => customer.date = new Date(customer.date));
			});
			this.customerService.getCustomersLarge().then(data => this.customer2 = data);
			this.customerService.getCustomersMedium().then(data => this.customer3 = data);
			this.loading2 = false;
		},
		methods: {
			initFilters1() {
				this.filters1 = {
					'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
					'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
					'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
					'representative': {value: null, matchMode: FilterMatchMode.IN},
					'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
					'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
					'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
					'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
					'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
				}
			},
			clearFilter1() {
				this.initFilters1();
			},
			onRowExpand(event) {
				this.$toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
			},
			onRowCollapse(event) {
				this.$toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
			},
			expandAll() {
				this.expandedRows = this.products.filter(p => p.id);
				this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
			},
			collapseAll() {
				this.expandedRows = null;
				this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
			},
			formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			},
			formatDate(value) {
				return value.toLocaleDateString('en-US', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
				});
			},
			calculateCustomerTotal(name) {
				let total = 0;
				if (this.customer3) {
					for (let customer of this.customer3) {
						if (customer.representative.name === name) {
							total++;
						}
					}
				}

				return total;
			}
		}
	}
</script>

<style scoped>
.heading_wrap{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.p-field .refresh-button{
	width:auto;
}
.p-jc-end{
	align-items:flex-end;
}
</style>