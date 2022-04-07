<template>
    <div class="menu-wrapper" :class="{ 'layout-sidebar-active': sidebarActive }" @click="onMenuClick" @mouseover="onSidebarMouseOver" @mouseleave="onSidebarMouseLeave">
        <div class="sidebar-logo">
            <router-link to="/">
                <img v-show="rend2" src="assets/layout/images/logo.png" style="height:35px;width:auto;" alt="Nutrabbit" />
                <img v-show="rend" src="assets/layout/images/logonutrabit.png" alt="Nutrabbit" style="width:auto;height:35px;" />
                <!-- <b style="padding-left: 15px; font-size: 23px;color:#728FCE">{{ title }}</b> -->
            </router-link>
            <a class="sidebar-pin" @click="onToggleMenu($event)">
                <span class="pin"></span>
            </a>
        </div>

        <div class="layout-menu-container">
            <AppSubmenu
                class="layout-menu"
                :items="nutrabit_menu"
                :layoutMode="layoutMode"
                :parentMenuItemActive="true"
                :menuActive="menuActive"
                :mobileMenuActive="mobileMenuActive"
                :root="true"
                @menuitem-click="onMenuItemClick"
                @root-menuitem-click="onRootMenuItemClick"
            />
        </div>
    </div>
</template>

<script>
import AppSubmenu from './AppSubmenu';
export default {
    name: 'AppMenu',
    emits: ['menu-click', 'menuitem-click', 'root-menuitem-click', 'toggle-menu', 'sidebar-mouse-over', 'sidebar-mouse-leave'],
    props: {
        sidebarActive: Boolean,
        sidebarStatic: Boolean,
        layoutMode: String,
        menuActive: Boolean,
        mobileMenuActive: Boolean,
    },
    data() {
        return {
            rend:false,
            rend2: true,
            
            superadmin: [
                // { label: 'Dashboard', icon: 'pi pi-home', to: '/' },
                { label: this.$t(`module.title.DFCMangement`), icon: 'pi pi-users', to: '/dfc-management' },
                // { label: this.$t(`module.title.BannerMangement`), icon: 'pi pi-images', to: '/banner-management' },
                { label: this.$t(`module.title.PopupMangement`), icon: 'pi pi-question-circle', to: '/popup-management' },
                { label: this.$t(`module.title.NFTMangement`), icon: 'pi pi-bell', to: '/nft-management' },
                { label: this.$t(`module.title.CardnewsMangement`), icon: 'pi pi-book', to: '/card-news' },
                { label: this.$t(`module.title.MediaPressMangement`), icon: 'pi pi-bell', to: '/media-press' },
                { label: this.$t(`module.title.GoogleformsMangement`), icon: 'pi pi-tags', to: '/google-form' },
            ],
            nutrabit_menu: [
                {
                    label: this.$t(`module.title.UserManagement`),
                    icon: 'pi pi-users',
                    items: [
                        { label: this.$t(`module.title.IndividualManagement`), to: '/individual-member',  },
                        { label: this.$t(`module.title.BusinessManagement`), to: '/business-member' },
                    ],
                },
                { label: this.$t(`module.title.BannerMangement`), icon: 'pi pi-images', to: '/banner-management' },
                // { label: this.$t(`module.title.Client-lookup`), icon: 'pi pi-users', to: '/client-lookup' },
                
                {
                    label: this.$t(`module.title.ProductRegistration`),
                    icon: 'pi pi-th-large',
                    items: [
                        { label: this.$t(`module.title.CategoryRegistration`),  to: '/category-registration' },
                        { label: this.$t(`module.title.RawRegistration`),  to: '/raw-material-registration' },
                     { label: this.$t(`module.title.RecommendedRegistration`),  to: '/nutri-blending' },
                    ],
                },
                { label: this.$t(`module.title.PilltypeManagement`), icon: 'pi pi-star', to: '/pill-type-management' },
                { label: this.$t(`module.title.Packagemanagement`), icon: 'pi pi-microsoft', to: '/package-management' },
                { label: this.$t(`module.title.Nutriblending`), icon: 'pi pi-search', to: '/nutri-management' },
                { label: this.$t(`module.title.ApplicationManagement`), icon: 'pi pi-money-bill', to: '/app-management' },
                {
                    label: this.$t(`module.title.Customercenter`),
                    icon: 'pi pi-play',
                    items: [
                        { label: this.$t(`module.title.Faq`),  to: '/faq' },
                        { label: this.$t(`module.title.Inquiry`),  to: '/inquiry' },
                        { label: this.$t(`module.title.Notice`),  to: '/notice' },
                    ],
                },
                
                 
            ],
            menu: [
                { label: 'Dashboard', icon: 'pi pi-home', to: '/' },
                { label: 'User management', icon: 'pi pi-users', to: '/user' },
                { label: 'Banner management', icon: 'pi pi-images', to: '/banner-management' },
                { label: 'FAQ', icon: 'pi pi-question-circle', to: '/faq' },
                { label: 'Notice', icon: 'pi pi-bell', to: '/notice' },
                { label: 'CMS', icon: 'pi pi-book', to: '/cms' },
                {
                    label: 'Inquiry',
                    icon: 'pi pi-inbox',
                    items: [
                        { label: 'Inquiry type', icon: 'pi pi-tags', to: '/inquiry-type' },
                        { label: '1:1 inquiry', icon: 'pi pi-comments', to: '/inquiry' },
                    ],
                },
                // onprogress ==> file not ready , when the file ll be ready change the path
                {
                    label: 'UI Kit',
                    icon: 'pi pi-star-o',
                    items: [
                        { label: 'Form Layout', icon: 'pi pi-id-card', to: '/formlayout' },
                        { label: 'Input', icon: 'pi pi-check-square', to: '/input' },
                        { label: 'Float Label', icon: 'pi pi-bookmark', to: '/floatlabel' },
                        { label: 'Invalid State', icon: 'pi pi-exclamation-circle', to: '/invalidstate' },
                        { label: 'Button', icon: 'pi pi-mobile', to: '/button', class: 'rotated-icon' },
                        { label: 'Table', icon: 'pi pi-table', to: '/table' },
                        { label: 'List', icon: 'pi pi-list', to: '/list' },
                        { label: 'Tree', icon: 'pi pi-share-alt', to: '/tree' },
                        { label: 'Panel', icon: 'pi pi-tablet', to: '/panel' },
                        { label: 'Overlay', icon: 'pi pi-clone', to: '/overlay' },
                        { label: 'Media', icon: 'pi pi-image', to: '/media' },
                        { label: 'Menu', icon: 'pi pi-bars', to: '/menu' },
                        { label: 'Message', icon: 'pi pi-comment', to: '/messages' },
                        { label: 'File', icon: 'pi pi-file', to: '/file' },
                        { label: 'Chart', icon: 'pi pi-chart-bar', to: '/chart' },
                        { label: 'Misc', icon: 'pi pi-circle-off', to: '/misc' },
                    ],
                },
                {
                    label: 'Utilities',
                    icon: 'pi pi-compass',
                    items: [
                        { label: 'Display', icon: 'pi pi-desktop', to: '/display' },
                        { label: 'Elevation', icon: 'pi pi-external-link', to: '/elevation' },
                        { label: 'Flexbox', icon: 'pi pi-directions', to: '/flexbox' },
                        { label: 'Icons', icon: 'pi pi-search', to: '/icons' },
                        { label: 'Text', icon: 'pi pi-pencil', to: '/text' },
                        { label: 'Widgets', icon: 'pi pi-star-o', to: '/widgets' },
                        { label: 'Grid System', icon: 'pi pi-th-large', to: '/grid' },
                        { label: 'Spacing', icon: 'pi pi-arrow-right', to: '/spacing' },
                        { label: 'Typography', icon: 'pi pi-align-center', to: '/typography' },
                    ],
                },
                {
                    label: 'Pages',
                    icon: 'pi pi-briefcase',
                    items: [
                        { label: 'Crud', icon: 'pi pi-pencil', to: '/crud' },
                        { label: 'Calendar', icon: 'pi pi-calendar-plus', to: '/calendar' },
                        { label: 'Timeline', icon: 'pi pi-calendar', to: '/timeline' },
                        { label: 'Landing', icon: 'pi pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
                        { label: 'Login', icon: 'pi pi-sign-in', to: '/login' },
                        { label: 'Invoice', icon: 'pi pi-dollar', to: '/invoice' },
                        { label: 'Help', icon: 'pi pi-question-circle', to: '/help' },
                        { label: 'Error', icon: 'pi pi-times-circle', to: '/error' },
                        { label: 'Not Found', icon: 'pi pi-exclamation-circle', to: '/notfound' },
                        { label: 'Access Denied', icon: 'pi pi-lock', to: '/access' },
                        { label: 'Empty', icon: 'pi pi-circle-off', to: '/empty' },
                    ],
                },
                {
                    label: 'Hierarchy',
                    icon: 'pi pi-align-left',
                    items: [
                        {
                            label: 'Submenu 1',
                            icon: 'pi pi-align-left',
                            items: [
                                {
                                    label: 'Submenu 1.1',
                                    icon: 'pi pi-align-left',
                                    items: [
                                        { label: 'Submenu 1.1.1', icon: 'pi pi-align-left' },
                                        { label: 'Submenu 1.1.2', icon: 'pi pi-align-left' },
                                        { label: 'Submenu 1.1.3', icon: 'pi pi-align-left' },
                                    ],
                                },
                                {
                                    label: 'Submenu 1.2',
                                    icon: 'pi pi-align-left',
                                    items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-align-left' }],
                                },
                            ],
                        },
                        {
                            label: 'Submenu 2',
                            icon: 'pi pi-align-left',
                            items: [
                                {
                                    label: 'Submenu 2.1',
                                    icon: 'pi pi-align-left',
                                    items: [
                                        { label: 'Submenu 2.1.1', icon: 'pi pi-align-left' },
                                        { label: 'Submenu 2.1.2', icon: 'pi pi-align-left' },
                                    ],
                                },
                                {
                                    label: 'Submenu 2.2',
                                    icon: 'pi pi-align-left',
                                    items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-align-left' }],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Start',
                    icon: 'pi pi-download',
                    items: [
                        { label: 'Buy Now', icon: 'pi pi-shopping-cart', command: () => window.open('https://www.primefaces.org/store', '_blank') },
                        { label: 'Documentation', icon: 'pi pi-info-circle', to: '/documentation' },
                    ],
                },
            ],
        };
    },
    // mounted() {
    //     if (localStorage.getItem('admin-type') === 'admin') {
    //         this.adminset = this.superadmin;
    //     }else{
    //         this.adminset = this.dfc_user;
    //     }
    // },
    methods: {
        onSidebarMouseOver() {
            if (this.layoutMode === 'sidebar' && !this.sidebarStatic) {
                this.$emit('sidebar-mouse-over');
                this.rend = true;
                this.rend2 = false ;
            }
        },
        onSidebarMouseLeave() {
            if (this.layoutMode === 'sidebar' && !this.sidebarStatic) {
                setTimeout(() => {
                    this.$emit('sidebar-mouse-leave');
                    this.rend = false;
                    this.rend2 = true ;
                }, 250);
            }
        },
        onToggleMenu(event) {
            this.$emit('toggle-menu', event);
        },
        onMenuClick(event) {
            this.$emit('menu-click', event);
        },
        onMenuItemClick(event) {
            this.$emit('menuitem-click', event);
        },
        onRootMenuItemClick(event) {
            this.$emit('root-menuitem-click', event);
        },
    },
    components: { AppSubmenu },
};
</script>
<style scoped>
/* .layout-menu-light .menu-wrapper{
    background: #666666;
   
} */
</style>