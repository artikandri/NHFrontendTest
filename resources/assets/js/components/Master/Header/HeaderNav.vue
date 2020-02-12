<template>
	<section class="header-nav">
		<div class="container">
			<div class="row">
				<div class="col-md-2 header-nav__logo">
					<!-- <img src="@images/logo.png" class="logo__image" /> -->
				</div>

				<div class="col-md-10">
					<nav
						class="header-nav__navbar navbar-header nav navbar-inverse navbar-static-top"
					>
						<button
							type="button"
							class="navbar-toggle collapsed header-nav__button"
							data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1"
						>
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</nav>

					<nav
						class="header-nav__navbar-collapse collapse navbar-collapse"
						id="bs-example-navbar-collapse-1"
					>
						<ul class="nav navbar-nav header-nav__list">
							<li
								class=""
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
