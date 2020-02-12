<template>
    <section class="main-elements">
        <div class="container">
            <div class="row main-elements__row">
                <div
                    class="col-md-4 col-sm-6 col-xs-12 main-elements__feature"
                    v-for="(feature, idx) in list.hostingFeatures"
                    :key="'feature' + idx"
                >
                    <img class="feature__image" :src="feature.img | svgUrl" />
                    <span v-if="feature.text" class="feature__text">
                        {{ feature.text }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import hostingFeaturesList from "@json/hosting-features.json";
export default {
    data() {
        return {
            list: {
                hostingFeatures: hostingFeaturesList || []
            }
        };
    },
    mounted() {}
};
</script>
