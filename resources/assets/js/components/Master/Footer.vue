<template>
	<div class="container-fluid">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-6">
					<strong class="text-uppercase">HUBUNGI KAMI</strong>
					<address>
						<span class="display-block">0274-5305505</span>
						<span class="display-block">Senin - Minggu</span>
						<span class="display-block">24 Jam Nonstop</span>
					</address>
					<address>
						Jl. Selokan Mataram Monjali Karangjati MT I/304 RT 019
						RW 042 Sindudadi Mlati Sleman
					</address>
				</div>
				<div class="col-md-3 col-sm-6">
					<strong class="text-uppercase display-block"
						>LAYANAN</strong
					>
					<ul>
						<li v-for="(service, idx) in list.niagaServices">
							<a :href="service.url || '#'">
								{{ service.text }}
							</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6">
					<strong class="text-uppercase display-block"
						>SERVICE HOSTING</strong
					>
					<ul>
						<li v-for="(service, idx) in list.hostingServices">
							<a :href="service.url || '#'">
								{{ service.text }}
							</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6">
					<strong class="text-uppercase display-block"
						>TUTORIAL</strong
					>
					<ul>
						<li v-for="(service, idx) in list.tutorial">
							<a :href="service.url || '#'">
								{{ service.text }}
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3 col-sm-6">
					<strong class="text-uppercase display-block"
						>TENTANG KAMI</strong
					>
					<ul>
						<li v-for="(service, idx) in list.about">
							<a :href="service.url || '#'">
								{{ service.text }}
							</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6">
					<strong class="text-uppercase display-block"
						>KENAPA PILIH NIAGAHOSTER?</strong
					>
					<ul>
						<li v-for="(service, idx) in list.excellences">
							<a :href="service.url || '#'">
								{{ service.text }}
							</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6">
					<form>
						<fieldset>
							<input type="text" />
							<button
								type="button"
								name="subscribeButton"
								class="btn btn-primary"
							>
								Berlangganan
							</button>
						</fieldset>
						<p>
							Dapatkan promo dan konten terbaik dari penyedia
							hosting favorit Anda.
						</p>
					</form>
				</div>
				<div class="col-md-3 col-sm-6">
					<a href="" title="Facebook Page">
						<i class="fb"></i>
					</a>
					<a href="" title="Facebook Page">
						<i class="twitter"></i>
					</a>
					<a href="" title="Facebook Page">
						<i class="google"></i>
					</a>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<strong class="text-uppercase">PEMBAYARAN</strong>
					<ul>
						<li>
							<img src="" />
						</li>
					</ul>
					<p>
						Aktivasi instan dengan E-Payment. Hosting dan Domain
						langsung aktif!
					</p>
					<hr />
				</div>
			</div>
			<div class="row">
				<div class="col-md-9"></div>
				<div class="col-md-3">
					<a href="#">Syarat dan Ketentuan</a> |
					<a href="#">Kebijakan Privasi</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import aboutList from "@json/footer/about.json";
import excellencesList from "@json/footer/excellences.json";
import hostingServicesList from "@json/footer/hosting-services.json";
import niagaServicesList from "@json/footer/niaga-services.json";
import paymentMethodsList from "@json/footer/payment-methods.json";
import tutorialList from "@json/footer/tutorial.json";

export default {
	data() {
		return {
			list: {
				about: aboutList,
				excellences: excellencesList,
				hostingServices: hostingServicesList,
				niagaServices: niagaServicesList,
				paymentMethods: paymentMethodsList,
				tutorial: tutorialList
			}
		};
	},
	mounted() {
		console.log("Component mounted.");
	}
};
</script>
