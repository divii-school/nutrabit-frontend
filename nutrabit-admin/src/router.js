import { createRouter, createWebHistory } from 'vue-router';

function guest(to, from, next) {
    if (localStorage.token) {
        next({ name: 'dashboard' });
    } else next();
}

function guard(to, from, next) {
    if (localStorage.token) {
        next();
    } else {
        next({ name: 'login' });
    }
}

const routes = [
    // {
    //     path: '/',
    //     name: 'dashboard',
    //     exact: true,
    //     component: () => import('./components/Dashboard.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'Dashboard', label: 'Dashboard' }],
    //     },
    // },
    {
        path: '/',
        name: 'dashboard',
        exact: true,
        component: () => import(`./pages${localStorage.getItem('userType')=='admin'?'/IndividualMember/IndividualList.vue':'/dfc_user/ClientLookup.vue'}`),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Dashboard', label: 'Dashboard' }],
        },
    },
    //dfc_banner start
    {
        path: '/banner-management',
        name: 'BannerManagement',
        component: () => import('./pages/BannerManagemet/BannerList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'bannerlist' }],
        },
    },
    {
        path: '/add-banner',
        name: 'AddBanner',
        component: () => import('./pages/BannerManagemet/AddBanner.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'addbanner' }],
        },
    },
    {
        path: '/edit-banner/:id',
        name: 'EditBanner',
        component: () => import('./pages/BannerManagemet/EditBanner.vue'),
        beforeEnter: guard,
    },
    {
        path: '/view-banner/:id',
        name: 'ViewBanner',
        component: () => import('./pages/BannerManagemet/ViewBanner.vue'),
        beforeEnter: guard,
    },
    //dfc_banner end
    //Media_press start
    {
        path: '/media-press',
        name: 'MediaPressManagement',
        component: () => import('./pages/MediaPress/MediaPressList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'mediapress-list' }],
        },
    },
    {
        path: '/add-media-press',
        name: 'AddMediaPress',
        component: () => import('./pages/MediaPress/AddMediaPress.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'add-mediapress' }],
        },
    },
    {
        path: '/view-media-press/:id',
        name: 'ViewMediaPress',
        component: () => import('./pages/MediaPress/ViewMediaPress.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'view-mediapress' }],
        },
    },
    {
        path: '/edit-media-press/:id',
        name: 'EditMediaPress',
        component: () => import('./pages/MediaPress/EditMediaPress.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'edit-mediapress' }],
        },
    },
    //Media_press end
    //client-lookup start
    {
        path: '/client-lookup',
        name: 'ClientLookup',
        component: () => import('./pages/dfc_user/ClientLookup.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Client lookup' }],
        },
    },
    {
        path: '/uploaded-doclist',
        name: 'UploadedDoclist',
        component: () => import('./pages/dfc_user/UploadDoclist.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Upload Doclist' }],
        },
    },
    {
        path: '/upload-document',
        name: 'UploadDoc',
        component: () => import('./pages/dfc_user/UploadDoc.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Upload' }],
        },
    },
    {
        path: '/client-lookup/details/:id',
        name: 'Clientdetails',
        exact: true,
        component: () => import('./pages/dfc_user/ClientDetails.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'page', label: 'Client details' }],
        },
    },
    {
        path: '/dfc_user/personal-info',
        name: 'Personaldetails',
        exact: true,
        component: () => import('./pages/dfc_user/DfcPersonalinfo.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'page', label: 'personal details' }],
        },
    },
    //client-lookup end
    //Card-news start
    {
        path: '/card-news',
        name: 'CardNewsManagement',
        component: () => import('./pages/CardNews/CardNewsList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Card-News list' }],
        },
    },
    {
        path: '/add-card-news',
        name: 'AddCardNews',
        component: () => import('./pages/CardNews/AddCardNews.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Add-CardNews' }],
        },
    },
    {
        path: '/card-news/edit/:id',
        name: 'CardNewsedit',
        component: () => import('./pages/CardNews/EditCardNews.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Edit-cardnews' }],
        },
    },
    {
        path: '/card-news/view/:id',
        name: 'CardNewsView',
        component: () => import('./pages/CardNews/ViewCardNews.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'View-cardnews' }],
        },
    },
    //Card-news end
    //NFT_start
    {
        path: '/nft-management',
        name: 'NftManagement',
        component: () => import('./pages/NftManagement/NftList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Nftlist' }],
        },
    },
    {
        path: '/add-NFT',
        name: 'AddNft',
        component: () => import('./pages/NftManagement/AddNft.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Add-Nft' }],
        },
    },
    {
        path: '/edit-nft/:id',
        name: 'EditNft',
        component: () => import('./pages/NftManagement/EditNft.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Edit-Nft' }],
        },
    },
    {
        path: '/view-nft/:id',
        name: 'ViewNft',
        component: () => import('./pages/NftManagement/ViewNft.vue'),
        beforeEnter: guard,
        // meta: {
        //     breadcrumb: [{ parent: 'pages', label: 'View-Nft' }],
        // },
    },
    {
        path: '/edit-nft/:id',
        name: 'EditNft',
        component: () => import('./pages/NftManagement/EditNft.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Edit-Nft' }],
        },
    },
    //NFT_end
    //dfc_popup start
    {
        path: '/popup-management',
        name: 'PopupManagement',
        component: () => import('./pages/PopupManagement/Popup.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'popuplist' }],
        },
    },
    {
        path: '/view-popup/:id',
        name: 'ViewPopupManagement',
        component: () => import('./pages/PopupManagement/ViewPopup.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'popup-view' }],
        },
    },
    {
        path: '/edit-popup/:id',
        name: 'EditPopupManagement',
        component: () => import('./pages/PopupManagement/EditPopup.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'popup-edit' }],
        },
    },
    {
        path: '/change-password',
        name: 'ChangePassword',
        component: () => import('./pages/password/changePassword.vue'),
        beforeEnter: guard,
    },
    //dfc_popup end
    // {
    //     path: '/banner-management',
    //     name: 'BannerManagement',
    //     component: () => import('./pages/Banner/BannerManagement.vue'),
    //     beforeEnter: guard,
    // },
    {
        path: '/create-banner',
        name: 'CreateBanner',
        component: () => import('./pages/Banner/CreateBanner.vue'),
        beforeEnter: guard,
    },
    
    //dfc management start
    // {
    //     path: '/dfc-management', 
    //     name: 'Dfc',
    //     exact: true,
    //     component: () => import('./pages/DfcManagement/DfcList.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'pages', label: 'dfc' }],
    //     },
    // },
    // {
    //     path: '/view-dfc/:id',
    //     name: 'ViewDfc',
    //     exact: true,
    //     component: () => import('./pages/DfcManagement/Viewdfc.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'pages', label: 'view-dfc' }],
    //     },
    // },
    // {
    //     path: '/add-dfc',
    //     name: 'AddDfc',
    //     exact: true,
    //     component: () => import('./pages/DfcManagement/AddDfc.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'pages', label: 'Add-dfc' }],
    //     },
    // },
    // {
    //     path: '/edit-dfc/:id',
    //     name: 'EditDfc',
    //     exact: true,
    //     component: () => import('./pages/DfcManagement/EditDfc.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'pages', label: 'edit-dfc' }],
    //     },
    // },
    //dfc management end
    //google-form start
    {
        path: '/google-form',
        name: 'GoogleForm',
        exact: true,
        component: () => import('./pages/Googleform/GoogleFormList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'User', label: 'google form' }],
        },
    },
    //google-form end
    {
        path: '/user',
        name: 'User',
        exact: true,
        component: () => import('./pages/user/User.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'User', label: 'User' }],
        },
    },
    {
        path: '/add-user',
        name: 'Adduser',
        exact: true,
        component: () => import('./pages/user/Adduser.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'User', label: 'Add User' }],
        },
    },
    {
        path: '/user/view-user/:id',
        name: 'ViewUser',
        exact: true,
        component: () => import('./pages/user/ViewUser.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'User', label: 'View User' }],
        },
    },
    {
        path: '/edit-notice/:id',
        name: 'editNotice',
        exact: true,
        component: () => import('./pages/notice/EditNotice.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Notice', label: 'Edit Notice' }],
        },
    },
    {
        path: '/user/edit-user/:id',
        name: 'UpdateUser',
        exact: true,
        component: () => import('./pages/user/UpdateUser.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'User', label: 'Update User' }],
        },
    },
    {
        path: '/notice',
        name: 'NoticeList',
        component: () => import('./pages/notice/NoticeList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'NoticePage' }],
        },
    },
    {
        path: '/add-notice',
        name: 'Addnotice',
        exact: true,
        component: () => import('./pages/notice/AddNotice.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Notice', label: 'Add Notice' }],
        },
    },
    {
        path: '/view-notice/:id',
        name: 'ViewNotice',
        exact: true,
        component: () => import('./pages/notice/ViewNotice.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Notice', label: 'View Notice' }],
        },
    },
    {
        path: '/inquiry-type',
        name: 'InquiryType',
        exact: true,
        component: () => import('./pages/inquiry/InquiryType.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'InquiryType' }],
        },
    },
    {
        path: '/add-inquiry-type',
        name: 'AddInquiryType',
        exact: true,
        component: () => import('./pages/inquiry/AddInquiryType.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'AddInquiryType' }],
        },
    },
    {
        path: '/edit-inquiry-type/:id',
        name: 'EditInquiryType',
        exact: true,
        component: () => import('./pages/inquiry/EditInquiryType.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'EditInquiryType' }],
        },
    },
    {
        path: '/inquiry',
        name: 'Inquiry',
        exact: true,
        component: () => import('./pages/inquiry/Inquiry.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Inuery', label: 'inquiry list' }],
        },
    },
    {
        path: '/reply-inquiry/:id',
        name: 'ReplyInquiry',
        exact: true,
        component: () => import('./pages/inquiry/ReplyInquiry.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ReplyInquiry' }],
        },
    },
    {
        path: '/edit-inquiry/:id',
        name: 'EditInquiry',
        exact: true,
        component: () => import('./pages/inquiry/EditInquiry.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'EditInquiry' }],
        },
    },
    {
        path: '/formlayout',
        name: 'formlayout',
        component: () => import('./components/FormLayoutDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Form Layout' }],
        },
    },
    {
        path: '/input',
        name: 'input',
        component: () => import('./components/InputDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Input' }],
        },
    },
    {
        path: '/floatlabel',
        name: 'floatlabel',
        component: () => import('./components/FloatLabelDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Float Label' }],
        },
    },
    {
        path: '/invalidstate',
        name: 'invalidstate',
        component: () => import('./components/InvalidStateDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Invalid State' }],
        },
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('./components/ButtonDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Button' }],
        },
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('./components/TableDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Table' }],
        },
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('./components/ListDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'List' }],
        },
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import('./components/TreeDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Tree' }],
        },
    },
    {
        path: '/panel',
        name: 'panel',
        component: () => import('./components/PanelsDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Panel' }],
        },
    },
    {
        path: '/overlay',
        name: 'overlay',
        component: () => import('./components/OverlayDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Overlay' }],
        },
    },
    {
        path: '/media',
        name: 'media',
        component: () => import('./components/MediaDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Media' }],
        },
    },
    {
        path: '/menu',
        component: () => import('./components/MenuDemo.vue'),
        children: [
            {
                path: '',
                component: () => import('./components/menu/PersonalDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
            {
                path: '/menu/seat',
                component: () => import('./components/menu/SeatDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
            {
                path: '/menu/payment',
                component: () => import('./components/menu/PaymentDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
            {
                path: '/menu/confirmation',
                component: () => import('./components/menu/ConfirmationDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
        ],
    },
    {
        path: '/messages',
        name: 'messages',
        component: () => import('./components/MessagesDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Messages' }],
        },
    },
    {
        path: '/file',
        name: 'file',
        component: () => import('./components/FileDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'File' }],
        },
    },
    {
        path: '/chart',
        name: 'chart',
        component: () => import('./components/ChartDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Charts' }],
        },
    },
    {
        path: '/misc',
        name: 'misc',
        component: () => import('./components/MiscDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Misc' }],
        },
    },
    {
        path: '/icons',
        name: 'icons',
        component: () => import('./utilities/Icons.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Icons' }],
        },
    },
    {
        path: '/widgets',
        name: 'widgets',
        component: () => import('./utilities/Widgets.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Widgets' }],
        },
    },
    {
        path: '/grid',
        name: 'grid',
        component: () => import('./utilities/GridDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Grid System' }],
        },
    },
    {
        path: '/spacing',
        name: 'spacing',
        component: () => import('./utilities/SpacingDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Spacing' }],
        },
    },
    {
        path: '/elevation',
        name: 'elevation',
        component: () => import('./utilities/ElevationDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Elevation' }],
        },
    },
    {
        path: '/typography',
        name: 'typography',
        component: () => import('./utilities/Typography.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Typography' }],
        },
    },
    {
        path: '/display',
        name: 'display',
        component: () => import('./utilities/DisplayDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Display' }],
        },
    },
    {
        path: '/flexbox',
        name: 'flexbox',
        component: () => import('./utilities/FlexBoxDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Flexbox' }],
        },
    },
    {
        path: '/text',
        name: 'text',
        component: () => import('./utilities/TextDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Text' }],
        },
    },
    {
        path: '/crud',
        name: 'crud',
        component: () => import('./pages/CrudDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Crud' }],
        },
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: () => import('./pages/CalendarDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Calendar' }],
        },
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: () => import('./pages/TimelineDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Timeline' }],
        },
    },
    {
        path: '/invoice',
        name: 'invoice',
        component: () => import('./pages/Invoice.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Invoice' }],
        },
    },
    {
        path: '/help',
        name: 'help',
        component: () => import('./pages/Help.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Help' }],
        },
    },
    {
        path: '/empty',
        name: 'empty',
        component: () => import('./components/EmptyPage.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Empty Page' }],
        },
    },
    {
        path: '/documentation',
        name: 'documentation',
        component: () => import('./components/Documentation.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Documentation' }],
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue'),
        beforeEnter: guest,
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('./pages/Error.vue'),
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue'),
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('./pages/Access.vue'),
    },
    {
        path: '/cms',
        name: 'Cms',
        component: () => import('./pages/cms/Cms.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Cms' }],
        },
    },

    {
        path: '/faq',
        name: 'Faq',
        component: () => import('./pages/faq/FaqList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Faq' }],
        },
    },

    {
        path: '/faq/edit/:id',
        name: 'Faqedit',
        component: () => import('./pages/faq/EditFaq.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'EditFaq' }],
        },
    },
    {
        path: '/faq/view/:id',
        name: 'Faqview',
        component: () => import('./pages/faq/ViewFaq.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'ViewFaq' }],
        },
    },

    {
        path: '/faq/add',
        name: 'Faqadd',
        component: () => import('./pages/faq/AddFaq.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Faqadd' }],
        },
    },
    {
        path: '/cms/add',
        name: 'Cmsadd',
        component: () => import('./pages/cms/AddCms.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Add cms' }],
        },
    },
    {
        path: '/cms/view/:id',
        name: 'ViewCms',
        exact: true,
        component: () => import('./pages/cms/ViewCms.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Faq', label: 'View Cms' }],
        },
    },
    {
        path: '/cms/edit/:id',
        name: 'Cmsedit',
        component: () => import('./pages/cms/EditCms.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Cmsedit' }],
        },
    },
    //User Management Start
    {
        path: '/individual-member',
        name: 'IndividualMember',
        exact: true,
        component: () => import('./pages/IndividualMember/IndividualList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'IndividualMember' }],
        },
    },
    {
        path: '/business-member',
        name: 'BusinessMember',
        exact: true,
        component: () => import('./pages/BusinessMember/BusinessList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'BusinessMember' }],
        },
    },
    {
        path: '/individual-edit/:id',
        name: 'EditIndividual',
        exact: true,
        component: () => import('./pages/IndividualMember/EditIndividual.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'EditIndividual' }],
        },
    },
    {
        path: '/business-edit/:id',
        name: 'EditBusiness',
        exact: true,
        component: () => import('./pages/BusinessMember/EditBusiness.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'EditBusiness' }],
        },
    },
    {
        path: '/business-view/:id',
        name: 'ViewBusiness',
        exact: true,
        component: () => import('./pages/BusinessMember/ViewBusiness.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ViewBusiness' }],
        },
    },
    {
        path: '/individual-view/:id',
        name: 'ViewIndividual',
        exact: true,
        component: () => import('./pages/IndividualMember/ViewIndividual.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ViewIndividual' }],
        }
    },

   
    // Product Registration Start
    {
        path: '/category-registration', 
        name: 'CategoryProduct',
        exact: true,
        component: () => import('./pages/CategoryRegistration/CategoryList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'CategoryProduct' }],
        },
    },
    {
        path: '/edit-category/:id', 
        name: 'CategoryEdit',
        exact: true,
        component: () => import('./pages/CategoryRegistration/EditCategory.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'CategoryEdit' }],
        },
    },
    {
        path: '/addcategory', 
        name: 'CategoryAdd',
        exact: true,
        component: () => import('./pages/CategoryRegistration/AddCategory.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'CategoryAdd' }],
        },
    },
    {
        // path: '/view-banner/:id',
        path: '/view-category/:id', 
        name: 'CategoryView',
        exact: true,
        component: () => import('./pages/CategoryRegistration/ViewCategory.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'CategoryView' }],
        },
    },

    {
        path: '/excelcategory', 
        name: 'CategoryExcelUpload',
        exact: true,
        component: () => import('./pages/CategoryRegistration/ExceluploadCategory.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'CategoryExcelUpload' }],
        },
    },
   
    {
        path: '/raw-material-registration',
        name: 'RawProduct',
        exact: true,
        component: () => import('./pages/RawMaterialRegistration/RawMaterialList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'RawProduct' }],
        },
    },
    {
        path: '/viewraw-material-registration/:id',
        name: 'ViewRawProduct',
        exact: true,
        component: () => import('./pages/RawMaterialRegistration/ViewRawMaterial.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ViewRawProduct' }],
        },
    },
    {
        path: '/editraw-material-registration/:id',
        name: 'EditRawProduct',
        exact: true,
        component: () => import('./pages/RawMaterialRegistration/EditRawMaterial.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'EditRawProduct' }],
        },
    },
    {
        path: '/addrawmaterial',
        name: 'AddRawProduct',
        exact: true,
        component: () => import('./pages/RawMaterialRegistration/AddRawMaterial.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'AddRawProduct' }],
        },
    },
    {
        path: '/excelrawmaterial',
        name: 'ExcelRawProduct',
        exact: true,
        component: () => import('./pages/RawMaterialRegistration/ExcelRawMaterial.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ExcelRawProduct' }],
        },
    },
    
    // Pill type Management start
    {
        path: '/pill-type-management', 
        name: 'Pill',
        exact: true,
        component: () => import('./pages/PilltypeManagement/PilltypeList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Pill' }],
        },
    },
    {
        path: '/pilltypeView/:id', 
        name: 'PillView',
        exact: true,
        component: () => import('./pages/PilltypeManagement/ViewPilltype.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'PillView' }],
        },
    },
    {
        path: '/editpilltype/:id', 
        name: 'Pilledit',
        exact: true,
        component: () => import('./pages/PilltypeManagement/EditPilltype.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Pilledit' }],
        },
    },
    {
        path: '/addpilltype', 
        name: 'AddPill',
        exact: true,
        component: () => import('./pages/PilltypeManagement/AddPilltype.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'AddPill' }],
        },
    },

    // Package Management start
    {
        path: '/package-management',
        name: 'package',
        exact: true,
        component: () => import('./pages/Packagemanagement/PackageList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'User' }],
        },
    },
    {
        path: '/view-package-type/:id',
        name: 'viewpackage',
        exact: true,
        component: () => import('./pages/Packagemanagement/ViewPackageType.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'viewpackage' }],
        },
    },
    {
        path: '/edit-package-type/:id',
        name: 'editpackage',
        exact: true,
        component: () => import('./pages/Packagemanagement/EditPackageType.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'editpackage' }],
        },
    },
    {
        path: '/addpackagetype',
        name: 'AddPackageType',
        exact: true,
        component: () => import('./pages/Packagemanagement/AddPackageType.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'AddPackageType' }],
        },
    },

    // Nutri Blending start
    {
        path: '/nutri-blending', 
        name: 'nutri',
        exact: true,
        component: () => import('./pages/Nutriblending/NutriblendingList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'nutri' }],
        },
    },
    {
        path: '/addnutri-blending', 
        name: 'Addnutri',
        exact: true,
        component: () => import('./pages/Nutriblending/AddNutriblending.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Addnutri' }],
        },
    },
    {
        path: '/editnutri-blending/:id', 
        name: 'editnutri',
        exact: true,
        component: () => import('./pages/Nutriblending/EditNutriblending.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'editnutri' }],
        },
    },
    {
        path: '/viewnutri-blending/:id', 
        name: 'viewnutri',
        exact: true,
        component: () => import('./pages/Nutriblending/ViewNutriblending.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'viewnutri' }],
        },
    },
    {
        path: '/excelnutri-blending', 
        name: 'excelnutri',
        exact: true,
        component: () => import('./pages/Nutriblending/ExcelNutriblending.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'excelnutri' }],
        },
    },
    // Application Management start
    {
        path: '/app-management', 
        name: 'appmanagement',
        exact: true,
        component: () => import('./pages/ApplicationManagement/ApplicationManagementList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'appmanagement' }],
        },
    },

    // {
    //     path: '/app-managementadd', 
    //     name: 'appadd',
    //     exact: true,
    //     component: () => import('./pages/ApplicationManagement/AddApplicationManagement.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'pages', label: 'appadd' }],
    //     },
    // },

    {
        path: '/app-managementedit/:id', 
        name: 'appedit',
        exact: true,
        component: () => import('./pages/ApplicationManagement/EditApplicationManagement.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'appedit' }],
        },
    },

    {
        path: '/app-managementview/:id', 
        name: 'appview',
        exact: true,
        component: () => import('./pages/ApplicationManagement/ViewApplicationManagement.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'appview' }],
        },
    },

    
];

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
});

export default router;
