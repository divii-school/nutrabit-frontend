import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import Login from '../pages/login.vue';
import MembershipSelection from '../pages/MemberRegistrationTypeSelection.vue';
import MethodSelection from '../pages/MemberRegistrationMethod.vue';
import RegistrationIndividuals from '../pages/MemberRegistrationIndividual.vue';
import RegistrationBusiness from '../pages/MembershipRegistrationBusiness.vue';
import RegistrationCompleted from '../pages/MemberRegistrationCompleted.vue';
import FindID from '../pages/FindId.vue';
import ForgotPassword from '../pages/ForgotPassword.vue';
import ChangePassword from '../pages/ChangePassword.vue';
import SearchResult from '../pages/SearchResult.vue';
import PersonalInformation from '../pages/PersonalInformationManagement.vue';
import PersonalInformationBusiness from '../pages/PersonalInformationBusiness.vue';
import WithdrawalOfMembership from '../pages/WithdrawalOfMembership.vue';
import Main from '../pages/Main.vue';
import MyChoice from '../pages/MyChoice.vue';
import MyChoiceCategorySelection from '../pages/MyChoiceCategorySelection.vue'
import InquiryContactUs from '../pages/InquiryContactUs.vue'
import MyChoiceRecomandedBlending from '../pages/MyChoiceRecomandedBlending.vue';
import SampleMaking from '../pages/SampleMaking.vue';
import MobileSearch from '../pages/MobileSearch.vue';
import ChoiceRecommendedBlendingDetailedPage from '../pages/ChoiceRecommendedBlendingDetailedPage.vue';
import ChoiceRecommendedBlendingPackageSelection from '../pages/ChoiceRecommendedBlendingPackageSelection.vue';
import Notice from '../pages/Notice.vue';
import NoticeDetailPage from '../pages/NoticeDetailPage.vue';
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
        name: 'main',
        path: '/',
        component: Main,
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        
    },
    {
        name: 'membership-selection',
        path: '/membership-selection',
        component: MembershipSelection,
        // beforeEnter: guest,
    },
    {
        name: 'registration-ndividuals',
        path: '/registration-ndividuals',
        component: RegistrationIndividuals
    },
    {
        name: 'registration-business',
        path: '/registration-business',
        component: RegistrationBusiness
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
        name: 'method-selection',
        path: '/method-selection',
        component:MethodSelection,
        // beforeEnter: guest,
    },
    {
        name: 'registration-completed',
        path: '/registration-completed',
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
        name: 'search-result',
        path: '/search-result',
        component: SearchResult,
        // beforeEnter: guest,
    },
    {
        name: 'my-choice',
        path: '/my-choice',
        component: MyChoice,
        // beforeEnter: guest,
    },
    {
        name: 'my-choice-category-selection',
        path: '/my-choice-category-selection',
        component: MyChoiceCategorySelection,
    },
    {
        name: 'my-choice-recomanded-blending',
        path: '/my-choice-recomanded-blending',
        component: MyChoiceRecomandedBlending,
    },
    {
        name: 'sample-making',
        path: '/sample-making',
        component: SampleMaking,
    },
    {
        name: 'mobile-search',
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