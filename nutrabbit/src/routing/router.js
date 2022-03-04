import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/login.vue';
import MembershipSelection from '../pages/member-registration-type-selection.vue';
import Method from '../pages/member-registration-method.vue';
import RegistrationIndividuals from '../pages/member-registration-individual.vue';
import RegistrationBusiness from '../pages/membership-registration-business.vue';
import RegistrationCompleted from '../pages/member-registration-completed.vue';
import FindID from '../pages/find-id.vue';
import ForgotPassword from '../pages/forgot-password.vue';
import ChangePassword from '../pages/change-password.vue';

import Main from '../pages/Main.vue';


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
        name: 'Membership-selection',
        path: '/Membership-selection',
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
        name: 'personal-information-management',
        path: '/personal-information-management',
        component: Personal-information-management
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
        name: 'main',
        path: '/main',
        component:Main,
        // beforeEnter: guest,
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