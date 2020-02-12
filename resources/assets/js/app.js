/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import { kFormatter, decimalFormat } from "@js/helpers/number-formatter.js";

Vue.component("app", require("@js/components/App.vue").default);

Vue.filter("imageUrl", function(fileName) {
	return fileName ? require("@svg/" + fileName) : "";
});

Vue.filter("kFormatter", kFormatter);

Vue.filter("decimalFormat", decimalFormat);

const app = new Vue({
	el: "#app"
});
