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

Vue.component("app", require("@js/components/App.vue").default);

Vue.filter("imageUrl", function(fileName) {
	return fileName ? require("@svg/" + fileName) : "";
});

Vue.filter("decimalFormat", function(
	amount = 0,
	decimalCount = 0,
	decimal = ",",
	thousands = "."
) {
	try {
		decimalCount = Math.abs(decimalCount);
		decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

		const negativeSign = amount < 0 ? "-" : "";

		let i = parseInt(
			(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
		).toString();
		let j = i.length > 3 ? i.length % 3 : 0;

		return (
			negativeSign +
			(j ? i.substr(0, j) + thousands : "") +
			i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
			(decimalCount
				? decimal +
				  Math.abs(amount - i)
						.toFixed(decimalCount)
						.slice(2)
				: "")
		);
	} catch (e) {
		console.log(e);
	}
});

const app = new Vue({
	el: "#app"
});
