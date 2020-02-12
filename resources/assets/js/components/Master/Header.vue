<template>
    <div class="header--wrapper">
        <header-contact />
        <header-nav />
    </div>
</template>

<script>
import HeaderContact from "@components/Master/Header/HeaderContact.vue";
import HeaderNav from "@components/Master/Header/HeaderNav.vue";
export default {
    components: {
        HeaderContact,
        HeaderNav
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
