<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
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
            </div>
            <div class="col-md-6">
                <img src="@svg/illustration banner PHP hosting-01.svg" />
            </div>
        </div>
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
            <div class="col-md-8 col-md-offset-2">
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
                Mendukung penuh framework Laravel
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
