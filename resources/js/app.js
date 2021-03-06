require('./bootstrap');

window.Vue = require('vue');


// Dependencies --------------------------------------

import Toasted from 'vue-toasted';
import VueClip from 'vue-clip'
import Multiselect from 'vue-multiselect'
import swal from 'sweetalert';
import VueContentPlaceholders from 'vue-content-placeholders'

Vue.use(require('vue-moment'));
Vue.use(Toasted)
Vue.toasted.register('error', message => message, {
	position : 'bottom-center',
	duration : 1000
})
Vue.use(VueClip)
Vue.component('multiselect', Multiselect)
Vue.use(VueContentPlaceholders)


 // Layout
 Vue.component('sidebar', require('./components/layout/Sidebar.vue'));

// Dashboard
Vue.component('users-count', require('./components/dashboard/UsersCount.vue'));
Vue.component('roles-count', require('./components/dashboard/RolesCount.vue'));

// Profile
Vue.component('profile', require('./components/profile/Profile.vue'));
Vue.component('profile-password', require('./components/profile/Password.vue'));

// Users
	Vue.component('users-index', require('./components/users/Index.vue'));
	Vue.component('users-create', require('./components/users/Create.vue'));
	Vue.component('users-edit', require('./components/users/Edit.vue'));

// Roles
	Vue.component('roles-index', require('./components/roles/Index.vue'));
	Vue.component('roles-create', require('./components/roles/Create.vue'));
	Vue.component('roles-edit', require('./components/roles/Edit.vue'));

// ressources
	// regions
	Vue.component('regions-index', require('./components/regions/Index.vue'));
	Vue.component('regions-create', require('./components/regions/Create.vue'));
	Vue.component('regions-edit', require('./components/regions/Edit.vue'));
	// villes
	Vue.component('villes-index', require('./components/villes/Index.vue'));
	Vue.component('villes-create', require('./components/villes/Create.vue'));
	Vue.component('villes-index', require('./components/villes/Edit.vue'));
	// communes
	Vue.component('communes-index', require('./components/communes/Index.vue'));
	Vue.component('communes-create', require('./components/communes/Create.vue'));
	Vue.component('communes-edit', require('./components/communes/Edit.vue'));
	// quartiers
	Vue.component('quartiers-index', require('./components/quartiers/Index.vue'));
	Vue.component('quartiers-create', require('./components/quartiers/Create.vue'));
	Vue.component('quartiers-edit', require('./components/quartiers/Edit.vue'));


const app = new Vue({
	el: '#app'
});
