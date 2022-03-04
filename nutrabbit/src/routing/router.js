import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../components/NotFound.vue';
import Home from '../pages/Home.vue';
import Login from '../pages/login.vue';
import Register from '../pages/Register.vue';
import Membership from '../pages/member-registration-type-selection.vue';
import Method from '../pages/member-registration-method.vue';
import RegistrationIndividuals from '../pages/member-registration-individual.vue';
import RegistrationBusiness from '../pages/membership-registration-business.vue';
import Business from '../pages/Business.vue';
import RegistrationComp from '../pages/RegistrationComp.vue';
import FindID from '../pages/FindID.vue';
import ChangePassword from '../pages/ChangePassword.vue';
import FindPassword from '../pages/FindPassword.vue';
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
        name: 'membership',
        path: '/membership',
        component: Membership,
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
        name: 'method',
        path: '/method',
        component:Method,
        // beforeEnter: guest,
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        // beforeEnter: guest,
    },
    {
        name: 'business',
        path: '/business',
        component: Business,
        // beforeEnter: guest,
    },
    {
        name: 'registrationComp',
        path: '/registrationComp',
        component: RegistrationComp,
        // beforeEnter: guest,
    },
    {
        name: 'findID',
        path: '/findID',
        component:FindID,
        // beforeEnter: guest,
    },
    {
        name: 'changePassword',
        path: '/changePassword',
        component:ChangePassword,
        // beforeEnter: guest,
    },
    {
        name: 'findPassword',
        path: '/findPassword',
        component:FindPassword,
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