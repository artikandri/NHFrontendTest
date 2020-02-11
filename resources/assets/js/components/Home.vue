<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <article>
                <h1 class="text-montserrat-bold">PHP Hosting</h1>
                <p class="text-montserrat-regular">
                    Cepat, handal, penuh dengan modul PHP yang Anda butuhkan
                </p>
                <ul>
                    <li
                        v-for="(benefit, idx) in benefits"
                        :key="'benefit' + idx"
                    >
                        <i
                            class="fa"
                            :class="benefit.checked ? 'fa-checked' : 'fa-close'"
                        ></i>
                        {{ benefit.text }}
                    </li>
                </ul>
            </article>
            </div>
            <div class="col-md-6">
                <img src="@svg/illustration banner PHP hosting-01.svg" />
            </div>
        </div>
        <hr/>
        <div class="row">
            <div
                class="col-md-4 col-sm-6 col-xs-12"
                v-for="(feature, idx) in hostingFeatures"
                :key="'feature' + idx"
            >
                <img class="display-block" :src="feature.img | imageUrl" />
                {{ feature.text }}
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center">
                <h2>Paket Hosting Singapura yang tepat</h2>
                <p>Diskon 40% + Domain dan SSL Gratis untuk Anda</p>
            </div>
        </div>
        <section class="row">
            <div
                class="col-md-3 col-sm-6"
                v-for="(hostingPackage, idx) in hostingPackages"
                :key="'package' + idx"
            >
                <h2>{{ hostingPackage.name }}</h2>
                <p>
                    <del
                        >{{ hostingPackage.currency }}
                        {{ hostingPackage.priceBeforeDiscount }}</del
                    >

                    <ins
                        >{{ hostingPackage.currency }}
                        {{ hostingPackage.priceAfterDiscount }}/
                        {{ hostingPackage.subscriptionFrequency }}
                    </ins>
                </p>
                <p>{{ hostingPackage.userCount }} Pengguna Terdaftar</p>
                <ul>
                    <li class="text-uppercase">
                        {{ hostingPackage.resourcePower }}X resource power
                    </li>
                    <li
                        v-for="(benefit, idx) in hostingPackage.benefits"
                        :key="'benefit' + idx"
                    >
                        <span v-html="benefit"></span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="row">
            <div class="col-md-12">
                Powerful dengan limit PHP yang lebih besar
            </div>
            <div class="col-md-5 col-md-offset-1">
                <ul>
                    <li
                        v-for="(hostingBenefit, idx) in hostingBenefits.slice(
                            0,
                            3
                        )"
                    >
                        <i
                            class="fa"
                            :class="
                                hostingBenefit.checked
                                    ? 'fa-checked'
                                    : 'fa-close'
                            "
                        ></i>
                        {{ hostingBenefit.text }}
                    </li>
                </ul>
            </div>
            <div class="col-md-offset-1 col-md-5">
                <ul>
                    <li
                        v-for="(hostingBenefit, idx) in hostingBenefits.slice(
                            3,
                            6
                        )"
                    >
                        <i
                            class="fa"
                            :class="
                                hostingBenefit.checked
                                    ? 'fa-checked'
                                    : 'fa-close'
                            "
                        ></i>
                        {{ hostingBenefit.text }}
                    </li>
                </ul>
            </div>
        </section>
        <hr />
        <section class="row">
            <div class="col-md-12">
                <h1>Semua paket hosting sudah termasuk</h1>
            </div>
            <div
                class="col-md-4 col-sm-6"
                v-for="(bundle, idx) in hostingBundles"
            >
                <img :src="bundle.img | imageUrl" class="display-block" />
                <strong class="display-block">{{ bundle.title }}</strong>
                {{ bundle.description }}
            </div>
        </section>
        <hr />
        <section class="row">
            <div class="col-md-12">
                <strong class="text-montserrat-bold">Mendukung penuh framework Laravel</strong>
            </div>
            <div class="col-sm-6">
                <p>
                    Tak perlu menggunakan dedicated server ataupun VPS yang
                    mahal. Layanan PHP hosting kami mendukung penuh framework
                    favorit Anda.

                    <ul>
                        <li v-for="(item, idx) in hostingLaravel">
                           <p v-html="item.text"></p>
                        </li>
                    </ul>
                </p>
                <p>
                    <small
                        >Nb: Composer dan SSH hanya tersedia pada paket Personal
                        dan Bisnis</small
                    >
                </p>
            </div>
            <div class="col-sm-6">
                <img src="@svg/illustration banner PHP hosting-01.svg" />
            </div>
        </section>
        <section class="row">
            <h1>Modul lengkap untuk menjalankan aplikasi PHP Anda</h1>
            <ul class="">
                <li v-for="(module, idx) in phpModules">
                    {{ module }}
                </li>
            </ul>
        </section>
        <section class="row">
            <div class="col-md-6">
                <article>
                    <strong>
                        Linux Hosting yang Stabil dengan Teknologi LVE
                    </strong>
                    <p>
                        SuperMicro <strong>Intel Xeon 24-Cores server</strong> dengan RAM <strong>128 GB</strong> dan teknologi <strong>LVE CloudLinux</strong> untuk stabilitas server Anda. Dilengkapi dengan <strong>SSD</strong> untuk kecepatan <strong>MySQL</strong> dan caching, Apache load balance berbasis LiteSpeed Technologies, <strong>CageFS</strong> security, <strong>Raid-10</strong> protection dan auto backup untuk keamanan website PHP Anda.
                    </p>
                    <button type="button" class="btn btn-primary btn-niaga">
                        Pilih Hosting Anda
                    </button>
                </article>
            </div>
            <div class="col-md-6">
                <img src="@images/Image support.png"/>
            </div>
        </section>
        <section class="row">
            <div class="col-md-6">
                <p>
                    Bagikan jika Anda menyukai halaman ini
                </p>
            </div>
            <div class="col-md-6">
            </div>
        </section>
        <section class="row">
            <div class="col-md-10">
                <p>
                    Perlu <strong class="text-montserrat-bold">BANTUAN?</strong> Hubungi kami: <strong class="text-montserrat-bold">0274-5305505</strong>
                </p>
            </div>
            <div class="col-md-2">
                    <i class="fa fa-message icon-left"></i>
                    Live Chat
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import niagahosterBenefits from "@json/niagahoster-benefits.json";
import hostingFeatures from "@json/hosting-features.json";
import hostingPackages from "@json/hosting-packages.json";
import hostingBenefits from "@json/hosting-benefits.json";
import hostingBundles from "@json/hosting-bundles.json";
import phpModules from "@json/php-modules.json";
import hostingLaravel from '@json/hosting-laravel.json';
export default {
    data() {
        return {
            phpModules: phpModules || [],
            hostingLaravel: hostingLaravel || [],
            hostingPackages: hostingPackages || [],
            hostingFeatures: hostingFeatures || [],
            hostingBenefits: hostingBenefits || [],
            hostingBundles: hostingBundles || [],
            benefits: niagahosterBenefits || []
        };
    },
    filters: {
        imageUrl(fileName) {
            return fileName ? require("@svg/" + fileName) : "";
        }
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
