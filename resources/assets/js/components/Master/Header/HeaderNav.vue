<template>
	<section class="header-nav">
		<div class="container">
			<div class="row header-nav__row">
				<div class="col-md-2 header-nav__logo">
					<!-- <img src="@images/logo.png" class="logo__image" /> -->
				</div>
				<nav class="col-md-9 col-md-offset-1 header-nav__menus">
					<ul class="menus-list">
						<li
							class="menus-list__item"
							v-for="(menu, idx) in menus"
							:key="'menu' + idx"
						>
							<a href="menu.url || '#'">
								{{ menu.text || "Menu" }}
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</section>
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
