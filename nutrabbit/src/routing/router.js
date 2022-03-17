import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import Login from '../pages/login.vue';
import MemberRegistrationTypeSelection from '../pages/MemberRegistrationTypeSelection.vue';
import MemberRegistrationMethod from '../pages/MemberRegistrationMethod.vue';
import MemberRegistrationIndividuals from '../pages/MemberRegistrationIndividual.vue';
import MembershipRegistrationBusiness from '../pages/MembershipRegistrationBusiness.vue';
import RegistrationCompleted from '../pages/MemberRegistrationCompleted.vue';
import FindID from '../pages/FindId.vue';
import ForgotPassword from '../pages/ForgotPassword.vue';
import ChangePassword from '../pages/ChangePassword.vue';
import SearchResult from '../pages/SearchResult.vue';
import PersonalInformation from '../Personalinfo/PersonalInformationManagement.vue';
import PersonalInformationBusiness from '../Personalinfo/PersonalInformationBusiness.vue';
import WithdrawalOfMembership from '../Personalinfo/WithdrawalOfMembership.vue';
import Main from '../pages/Main.vue';
import MyChoice from '../pages/MyChoice.vue';
import MyChoiceCategorySelection from '../pages/MyChoiceCategorySelection.vue'
import InquiryContactUs from '../CustomerCenter/InquiryContactUs.vue'
import MyChoiceRecomandedBlending from '../pages/MyChoiceRecomandedBlending.vue';
import SampleMaking from '../pages/SampleMaking.vue';
import MobileSearch from '../pages/MobileSearch.vue';
import ChoiceRecommendedBlendingDetailedPage from '../pages/ChoiceRecommendedBlendingDetailedPage.vue';
import ChoiceRecommendedBlendingPackageSelection from '../pages/ChoiceRecommendedBlendingPackageSelection.vue';
import Notice from '../CustomerCenter/Notice.vue';
import NoticeDetailPage from '../CustomerCenter/NoticeDetailPage.vue';
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
        path: '/member-registration-ndividuals',
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
        path: '/my-choice-category-selection',
        component: MyChoiceCategorySelection,
    },
    {
        name: 'MyChoiceRecomandedBlending',
        path: '/my-choice-recomanded-blending',
        component: MyChoiceRecomandedBlending,
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