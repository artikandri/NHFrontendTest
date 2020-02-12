<template>
    <div class="container-fluid">
        <hero />
        <hero-elements />
        <hosting-packages />
        <benefits />
        <hr class="mini-hr" />
        <bundles />
        <hr class="mini-hr" />
        <laravel-support />
        <php-modules />
        <linux-support />
        <share />
        <support />
    </div>
</template>

<script>
import Hero from "@components/Main/Hero.vue";
import HeroElements from "@components/Main/HeroElements.vue";
import HostingPackages from "@components/Main/HostingPackages.vue";
import Benefits from "@components/Main/Benefits.vue";
import LaravelSupport from "@components/Main/LaravelSupport.vue";
import Bundles from "@components/Main/Bundles.vue";
import PhpModules from "@components/Main/PhpModules.vue";
import LinuxSupport from "@components/Main/LinuxSupport.vue";
import Share from "@components/Main/Share.vue";
import Support from "@components/Main/Support.vue";

export default {
    components: {
        Hero,
        HeroElements,
        HostingPackages,
        Benefits,
        LaravelSupport,
        Bundles,
        PhpModules,
        LinuxSupport,
        Share,
        Support
    },
    data() {
        return {};
    },
    mounted() {
        // do something ...
    }
};
</script>
