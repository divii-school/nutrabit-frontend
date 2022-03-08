import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/login.vue';
import MembershipSelection from '../pages/MemberRegistrationTypeSelection.vue';
import Method from '../pages/MemberRegistrationMethod.vue';
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
import MyChoiceCategorySelection from '../pages/MyChoiceCategorySelection.vue';
import MyChoiceRecomandedBlending from '../pages/MyChoiceRecomandedBlending.vue';
import SampleMaking from '../pages/SampleMaking.vue';

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
    {
        name: 'home',
        path: '/',
        component: Home,
        // beforeEnter: guard,
        meta: {
            name: 'topnav',
            ShowText: true
        }
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        // beforeEnter: guest,
        
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
        path: '/PersonalInformationBusiness',
        component:  PersonalInformationBusiness
    },
    {
        name: 'WithdrawalOfMembership',
        path: '/WithdrawalOfMembership',
        component: WithdrawalOfMembership
    },
    {
        name: 'InquiryContactUs',
        path: '/InquiryContactUs',
        component: InquiryContactUs
    },
    
   
   
   
    {
        name: 'method',
        path: '/method',
        component:Method,
        // beforeEnter: guest,
    },
    {
        name: 'registration-completed',
        path: '/registration-completed',
        component: RegistrationCompleted
    },
    {
        name: 'find-id',
        path: '/find-id',
        component:FindID,
        // beforeEnter: guest,
    },
    {
        name: 'forgot-password',
        path: '/forgot-password',
        component: ForgotPassword
    },
    {
        name: 'change-password',
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
        name: 'main',
        path: '/main',
        component: Main,
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