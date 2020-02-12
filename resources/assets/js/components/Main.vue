<template>
    <div class="container-fluid">
        <hero/>
        <hero-elements/>
        <hosting-packages/>
        <benefits/>
        <hr class="mini-hr" />
        <bundles/>
        <hr class="mini-hr" />
        <laravel-support />
        <php-modules/>
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
import Hero from '@components/Main/Hero.vue';
import HeroElements from '@components/Main/HeroElements.vue';
import HostingPackages from '@components/Main/HostingPackages.vue';
import Benefits from '@components/Main/Benefits.vue';
import LaravelSupport from '@components/Main/LaravelSupport.vue';
import Bundles from '@components/Main/Bundles.vue';
import PhpModules from '@components/Main/PhpModules.vue';


import niagahosterBenefits from "@json/niagahoster-benefits.json";
import hostingFeatures from "@json/hosting-features.json";
import hostingPackages from "@json/hosting-packages.json";
import hostingBenefits from "@json/hosting-benefits.json";
import hostingBundles from "@json/hosting-bundles.json";
import phpModules from "@json/php-modules.json";
import hostingLaravel from '@json/hosting-laravel.json';
export default {
    components: {
        Hero,
        HeroElements,
        HostingPackages,
        Benefits,
        LaravelSupport,
        Bundles,
        PhpModules
    },
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
    mounted() {
        // do something ...
    }
};
</script>
