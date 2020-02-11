<template>
    <div class="">
        <header-item />
        <main-item />
        <footer-item />
    </div>
</template>
<script>
import HeaderItem from "@js/components/Master/Header.vue";
import MainItem from "@js/components/Main.vue";
import FooterItem from "@js/components/Master/Footer.vue";
export default {
    name: "App",
    data() {
        return {};
    },
    components: {
        HeaderItem,
        MainItem,
        FooterItem
    },
    mounted() {}
};
</script>
