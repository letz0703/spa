import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        name: 'Home',
        component: require('./views/Home.vue').default
    },
    {
        path: '/about',
        name: 'About Us',
        component: require('./views/About.vue').default
    },
    {
        path: '/contact',
        component: require('./views/Contact.vue').default
    }
];

export default new VueRouter({
    routes: routes,
    linkActiveClass: 'is-active'
});
