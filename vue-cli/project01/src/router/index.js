import Router from 'vue-router'
import Content from '../components/Content.vue'
import Login from '../views/Login.vue'
export default new Router({
    routes: [
        {
            path: '/content',
            component: Content,
            name: 'content'
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        },
    ]
})
