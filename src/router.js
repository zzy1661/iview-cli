const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/welcome.vue'], resolve)
},{
    path: '/test',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/test.vue'], resolve)
},{
    path: '/login',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/login.vue'], resolve)
},{
    path: '/index',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/index/home',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;