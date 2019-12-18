require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

window.Vue = Vue;
Vue.use(VueRouter);

import router from './routes';
import Form from "./utilities/Form";

window.Form = Form;

new Vue({
    el: '#app',
    router: router
});
