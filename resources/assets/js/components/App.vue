<template>
    <div class="">
        <header-item />
        <home />
        <footer-item />
    </div>
</template>
<script>
import HeaderItem from "@js/components/Master/Header.vue";
import Home from "@js/components/Home.vue";
import FooterItem from "@js/components/Master/Footer.vue";
export default {
    name: "App",
    data() {
        return {};
    },
    components: {
        HeaderItem,
        Home,
        FooterItem
    },
    mounted() {}
};
</script>
