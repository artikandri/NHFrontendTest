<template>
	<div class="footer--wrapper">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-6">
					<strong class="footer-list-title text-uppercase"
						>HUBUNGI KAMI</strong
					>
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
					<strong class=" footer-list-title ">LAYANAN</strong>
					<ul class="footer-link-list">
						<li
							class="footer-link-list__item"
							v-for="(service, idx) in list.niagaServices"
						>
							<a :href="service.url || '#'">
								{{ service.text }}
							</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6">
					<strong class="footer-list-title ">SERVICE HOSTING</strong>
					<ul class="footer-link-list">
						<li
							class="footer-link-list__item"
							v-for="(service, idx) in list.hostingServices"
						>
							<a :href="service.url || '#'">
								{{ service.text }}
							</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6">
					<strong class="footer-list-title ">TUTORIAL</strong>
					<ul class="footer-link-list">
						<li
							class="footer-link-list__item"
							v-for="(service, idx) in list.tutorial"
						>
							<a :href="service.url || '#'">
								{{ service.text }}
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="row m-top-40">
				<div class="col-md-3 col-sm-6">
					<strong class="footer-list-title ">TENTANG KAMI</strong>
					<ul class="footer-link-list">
						<li
							class="footer-link-list__item"
							v-for="(service, idx) in list.about"
						>
							<a :href="service.url || '#'">
								{{ service.text }}
							</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6">
					<strong class="footer-list-title "
						>KENAPA PILIH NIAGAHOSTER?</strong
					>
					<ul class="footer-link-list">
						<li
							class="footer-link-list__item"
							v-for="(service, idx) in list.excellences"
						>
							<a :href="service.url || '#'">
								{{ service.text }}
							</a>
						</li>
					</ul>
				</div>
				<div class="col-md-3 col-sm-6">
					<strong class="footer-list-title ">newsletter</strong>
					<form>
						<fieldset class="footer-newsletter-form">
							<div class="input-wrapper">
								<input
									type="email"
									placeholder="Email"
									v-model="subscribe"
								/>
								<button
									type="button"
									name="subscribeButton"
									class="btn btn-primary btn-niaga  btn-padding-xs btn-normaltext"
								>
									Berlangganan
								</button>
							</div>
						</fieldset>
						<p class="footer-newsletter m-top-10">
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
			<div class="row m-top-40">
				<div class="col-md-12">
					<strong class="footer-list-title m-bottom-10"
						>PEMBAYARAN</strong
					>
					<ul class="payment-list">
						<li
							class="payment-list__item"
							v-for="(payment, idx) in list.payments"
							:title="payment.id"
						>
							<img
								class="payment__image"
								:src="payment.url | imageUrl"
							/>
						</li>
					</ul>
					<p class="m-top-20 footer-activation">
						Aktivasi instan dengan E-Payment. Hosting dan Domain
						langsung aktif!
					</p>
					<hr class="" />
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 footer-copyright">
					<p>
						Copyright(c) 2016 Niagahoster | Hosting powered by PHP7,
						CloudLinux, CloudFare, BitNinja and DC Biznet
						Technovillage Jakarta
					</p>
					<p>
						Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD
						and cloud computing technology
					</p>
				</div>
				<div class="col-md-4 text-right">
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
			subscribe: "",
			list: {
				payments: [
					{
						url: "bca_logo.png",
						id: "bca"
					},
					{
						url: "mandiri_logo.png",
						id: "mandiri"
					},
					{
						url: "bni_logo.png",
						id: "bni"
					},
					{
						url: "visa_logo.png",
						id: "visa"
					},
					{
						url: "mastercard_logo.png",
						id: "mastercard"
					},
					{
						url: "atmbersama_logo.png",
						id: "atmbersama"
					},
					{
						url: "permata_logo.png",
						id: "permata"
					},
					{
						url: "prima_logo.png",
						id: "prima"
					},
					{
						url: "alto_logo.png",
						id: "alto"
					}
				],
				about: aboutList,
				excellences: excellencesList,
				hostingServices: hostingServicesList,
				niagaServices: niagaServicesList,
				paymentMethods: paymentMethodsList,
				tutorial: tutorialList
			}
		};
	},
	mounted() {}
};
</script>
