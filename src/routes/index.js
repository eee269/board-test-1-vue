import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.prototype.$http = axios;

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('@/views/index.vue')
        }
    ]
});