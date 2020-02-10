<template>
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<img src="@images/logo.png" />
			</div>
			<div class="col-md-9">
				<nav>
					<ul>
						<li
							v-for="(menuItem, idx) in menus"
							:key="'menu' + idx"
						>
							{{ menuItem || "Menu text" }}
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
import menus from "@json/Header/menus.json";
export default {
	data() {
		return {
			menus: menus || []
		};
	},
	mounted() {
		console.log("Component mounted.");
	}
};
</script>
