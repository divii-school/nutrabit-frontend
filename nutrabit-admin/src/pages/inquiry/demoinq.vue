<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4><strong>Search</strong></h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Start Date:</label>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" placeholder="YYYY.MM.DD"></Calendar>
                    </div>
                    <div class="p-field p-col">
                        <label for="nameuser">Content/Author</label>
                        <InputText id="nameuser" type="text" placeholder="Search" />
                    </div>
                   
                   
                    <div class="p-field p-col">
                        <label for="state">type</label>
                        <Dropdown id="state" v-model="dropdownItem" :options="dropdownItems" optionLabel="name" placeholder="Select Type"></Dropdown>
                    </div>
                </div>
                 <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">Last Date:</label>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue2" placeholder="YYYY.MM.DD"></Calendar>
                    </div>
                      <div class="p-field p-col">
                        <label for="s-state">type</label>
                        <Dropdown id="s-state" v-model="state" :options="states" optionLabel="name" placeholder="Select State"></Dropdown>
                    </div>
                    <div class="p-field p-col">
                        <label for="language">language</label>
                        <Dropdown id="language" v-model="language" :options="languages" optionLabel="name" placeholder="Select Language"></Dropdown>
                    </div>
                </div>

                <div class="p-d-flex p-mt-2">
                    <Button label="Primary" class="p-mr-2 p-mb-2"><i class="pi pi-search p-mr-2"></i> search</Button>
                    <Button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"><i class="pi pi-refresh p-mr-2"></i> redo</Button>
                    
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>

export default {
    name: 'Inquiry',
    data() {
        return {
			
            calendarValue:null,
            calendarValue2:null,
            dropdownItems: [
                { name: 'Member information related enquries', code: 'Member information related enquries' },
                { name: 'HJCBT mobile app error', code: 'HJCBT mobile app error' },
                { name: 'Medical angel request', code: 'Medical angel request' },
                { name: 'pre-cream report', code: 'pre-cream report' },
                { name: 'payment related inquries', code: 'payment related inquries' },
            ],
            dropdownItem: null,
            state:null,
            states: [
                { name: 'open', code: 'open' },
                { name: 'close', code: 'close' },
               
            ],
            language:null,
            languages: [
                { name: 'English', code: 'English' },
                { name: 'Hindi', code: 'Hindi' },
                { name: 'Korean', code: 'Korean' },
                { name: 'Japanese', code: 'Japanese' },
               
            ],
           
        };
    },
    
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
