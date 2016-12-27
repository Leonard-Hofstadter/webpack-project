const Vue = require('vue');
const VueRouter = require('vue-router');
const list = require('./components/list.vue')
Vue.use(VueRouter);
const Foo = {
	template: '<div>foo</div>'
};
const routes = [{
	path: '/foo',
	component: Foo
}, {
	path: '/list',
	component: list,
}, {
	path: "*",
	redirect: '/list'
}];

const router = new VueRouter({
	routes // （缩写）相当于 routes: routes
});

module.exports = router;


