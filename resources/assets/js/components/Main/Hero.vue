<template>
    <section class="main-hero">
        <div class="container">
            <div class="row main-hero__row">
                <article class="col-md-6 main-hero__text">
                    <h1 class="text__title">PHP Hosting</h1>
                    <p class="text__tagline">
                        Cepat, handal, penuh dengan modul PHP yang Anda butuhkan
                    </p>
                    <ul class="text__benefits benefit-list">
                        <li
                            class="benefit-list__item"
                            v-for="(benefit, idx) in list.benefits"
                            :key="'benefit' + idx"
                        >
                            <i
                                class="fa list-icon"
                                :class="
                                    benefit.checked
                                        ? [
                                              'fa-check-circle',
                                              'list-icon--positive'
                                          ]
                                        : [
                                              'fa-close-circle',
                                              'list-icon--negative'
                                          ]
                                "
                            ></i>
                            {{ benefit.text || "Benefit" }}
                        </li>
                    </ul>
                </article>
                <div class="col-md-6 main-hero__image">
                    <img src="@svg/illustration banner PHP hosting-01.svg" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import niagahosterBenefits from "@json/niagahoster-benefits.json";

export default {
    data() {
        return {
            list: {
                benefits: niagahosterBenefits
            }
        };
    },
    mounted() {
        // do something...
    }
};
</script>
