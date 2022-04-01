import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import Login from '../pages/Common/login.vue';
import MemberRegistrationTypeSelection from '../pages/Common/MemberRegistrationTypeSelection.vue';
import MemberRegistrationMethod from '../pages/Common/MemberRegistrationMethod.vue';
import MemberRegistrationIndividuals from '../pages/Common/MemberRegistrationIndividual.vue';
import MembershipRegistrationBusiness from '../pages/Common/MembershipRegistrationBusiness.vue';
import RegistrationCompleted from '../pages/Common/MemberRegistrationCompleted.vue';
import FindID from '../pages/Common/FindId.vue';
import ForgotPassword from '../pages/Common/ForgotPassword.vue';
import ChangePassword from '../pages/Common/ChangePassword.vue';
import SearchResult from '../pages/GNB/SearchResult.vue';
import PersonalInformation from '../pages/Personalinfo/PersonalInformationManagement.vue';
import PersonalInformationBusiness from '../pages/Personalinfo/PersonalInformationBusiness.vue';
import WithdrawalOfMembership from '../pages/Personalinfo/WithdrawalOfMembership.vue';
import Main from '../pages/Main/Main.vue';
import MyChoice from '../pages/MyChoice/MyChoice.vue';
import MyChoiceCategorySelection from '../pages/MyChoice/MyChoiceCategorySelection.vue'
import InquiryContactUs from '../pages/CustomerCenter/InquiryContactUs.vue'
import MyChoiceRecomandedBlending from '../pages/MyChoice/MyChoiceRecomandedBlending.vue';
import SampleMaking from '../pages/SampleMaking.vue';
import MobileSearch from '../pages/GNB/MobileSearch.vue';
import ChoiceRecommendedBlendingDetailedPage from '../pages/MyChoice/ChoiceRecommendedBlendingDetailedPage.vue';
import ChoiceRecommendedBlendingPackageSelection from '../pages/MyChoice/ChoiceRecommendedBlendingPackageSelection.vue';
import Notice from '../pages/CustomerCenter/Notice.vue';
import NoticeDetailPage from '../pages/CustomerCenter/NoticeDetailPage.vue';
import FAQ from '../pages/CustomerCenter/FAQ.vue';
import RawMaterialEstimation from '../pages/MyChoice/RawMaterialEstimation.vue';
import RawMMaterialPackage from '../pages/MyChoice/RawMMaterialPackage.vue';
import IngredientFormulation from '../pages/MyChoice/IngredientFormulation.vue';
import AddIngredient from '../pages/MyChoice/AddIngredient.vue';
import MyChoiceRecomandedBlendingFinalQuote from '../pages/MyChoice/MyChoiceRecomandedBlendingFinalQuote.vue';
import MyChoiceRawMaterialDetailedPage from '../pages/MyChoice/MyChoiceRawMaterialDetailedPage.vue';

import MyRecipeDetail from '../pages/MyRecipeDetail.vue';
// function guest(to, from, next) {
//     if (localStorage.token) {
//         next({ name: 'home' });
//         Toast.fire({
//             icon: "info",
//             title: 'You already logged in',
//         });
//     } else next();
// }

// function guard(to, from, next) {
//     if (localStorage.token) {
//         next();
//     } else {
//         next({ name: 'login' });
//         Toast.fire({
//             icon: "info",
//             title: 'Please login to access',
//         });
//     }
// }

const routes = [
    // {
    //     name: 'home',
    //     path: '/',
    //     component: Home,
    //     meta: {
    //         name: 'topnav',
    //         ShowText: true
    //     }
    // },
    {
        name: 'Main',
        path: '/',
        component: Main,
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
        
    },
    {
        name: 'MemberRegistrationTypeSelection',
        path: '/member-registration-type-selection',
        component: MemberRegistrationTypeSelection,
        // beforeEnter: guest,
    },
    {
        name: 'MemberRegistrationIndividual',
        path: '/member-registration-individuals',
        component: MemberRegistrationIndividuals
    },
    {
        name: 'MembershipRegistrationBusiness',
        path: '/membership-registration-business',
        component: MembershipRegistrationBusiness
    },

    {
        name: 'personal-information',
        path: '/personal-information',
        component:  PersonalInformation
    },
    {
        name: 'PersonalInformationBusiness',
        path: '/personal-information-business',
        component:  PersonalInformationBusiness
    },
    {
        name: 'WithdrawalOfMembership',
        path: '/withdrawal-of-membership',
        component: WithdrawalOfMembership
    },
    {
        name: 'InquiryContactUs',
        path: '/inquiry-contactUs',
        component: InquiryContactUs,
    },
    {
        name: 'MemberRegistrationMethod',
        path: '/method-selection',
        component:MemberRegistrationMethod,
        // beforeEnter: guest,
    },
    {
        name: 'MemberRegistrationCompleted',
        path: '/member-registration-completed',
        component: RegistrationCompleted
    },
    {
        name: 'FindId',
        path: '/find-id',
        component:FindID,
        // beforeEnter: guest,
    },
    {
        name: 'ForgotPassword',
        path: '/forgot-password',
        component: ForgotPassword
    },
    {
        name: 'ChangePassword',
        path: '/change-password',
        component:ChangePassword,
        // beforeEnter: guest,
    },
    {
        name: 'SearchResult',
        path: '/search-result',
        component: SearchResult,
        // beforeEnter: guest,
    },
    {
        name: 'MyChoice',
        path: '/my-choice',
        component: MyChoice,
        // beforeEnter: guest,
    },
    {
        name: 'MyChoiceCategorySelection',
        path: '/my-choice-category-selection/:id',
        component: MyChoiceCategorySelection,
    },
    {
        name: 'MyChoiceRecomandedBlending',
        path: '/my-choice-recomanded-blending',
        component: MyChoiceRecomandedBlending,
    },
    {
        name: 'MyChoiceRecomandedBlendingFinalQuote',
        path: '/my-choice-recomanded-blending-fquote',
        component: MyChoiceRecomandedBlendingFinalQuote,
    },
    {
        name: 'sample-making',
        path: '/sample-making',
        component: SampleMaking,
    },
    {
        name: 'MobileSearch',
        path: '/mobile-search',
        component: MobileSearch,
    },
    {
        name: 'ChoiceRecommendedBlendingDetailedPage',
        path: '/choice-recommended-blending-detailed-page',
        component: ChoiceRecommendedBlendingDetailedPage,
    },
    {
        name: 'ChoiceRecommendedBlendingPackageSelection',
        path: '/choice-recommended-blending-package-selection',
        component: ChoiceRecommendedBlendingPackageSelection,
    },
    {
        name: 'MyChoiceRawMaterialDetailedPage',
        path: '/mychoice-rawMaterial-detailed-page',
        component: MyChoiceRawMaterialDetailedPage,
    },
    {
        name: 'RawMaterialEstimation',
        path: '/raw-material-estimation',
        component: RawMaterialEstimation,
    },
    {
        name: 'RawMMaterialPackage',
        path: '/raw-material-package',
        component: RawMMaterialPackage,
    },
    {
        name: 'IngredientFormulation',
        path: '/ingredient-formulation',
        component: IngredientFormulation,
    },
    {
        name: 'AddIngredient',
        path: '/add-ingredient',
        component: AddIngredient,
    },
    {
        name: 'notice',
        path: '/notice',
        component: Notice,
        
    },
    {
        name: 'noticeDetailPage',
        path: '/notice-detail-page',
        component:NoticeDetailPage,
        
    },
    {
        name: 'Faq',
        path: '/faq',
        component: FAQ,
        
    },
  
    {
        name: 'MyRecipeDetail',
        path: '/my-recipe-detail',
        component: MyRecipeDetail,
        
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;