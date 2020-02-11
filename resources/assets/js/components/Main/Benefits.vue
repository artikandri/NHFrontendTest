<template>
    <section class="main-hostingbenefits">
        <div class="container">
            <section class="row main-hostingbenefits__row">
                <div class="col-md-12 text-center">
                    <h2 class="text-montserrat-light">
                        Powerful dengan limit PHP yang lebih besar
                    </h2>
                </div>
                <div class="col-md-6 main-hostingbenefits__benefits">
                    <ul class="benefit-list">
                        <li
                            class="benefit-list__item"
                            v-for="(hostingBenefit,
                            idx) in list.hostingBenefits.slice(0, 3)"
                        >
                            <i
                                class="fa list-icon"
                                :class="
                                    hostingBenefit.checked
                                        ? ['fa-check-circle', 'text-success']
                                        : ['fa-close-circle', 'text-danger']
                                "
                            ></i>
                            <span class="text-center list-text">
                                {{ hostingBenefit.text }}
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 main-hostingbenefits__benefits">
                    <ul class="benefit-list">
                        <li
                            class="benefit-list__item"
                            v-for="(hostingBenefit,
                            idx) in list.hostingBenefits.slice(3, 6)"
                        >
                            <i
                                class="fa list-icon"
                                :class="
                                    hostingBenefit.checked
                                        ? ['fa-check-circle', 'text-success']
                                        : ['fa-close-circle', 'text-danger']
                                "
                            ></i>
                            <span class="text-center list-text">
                                {{ hostingBenefit.text }}
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import hostingBenefitList from "@json/hosting-benefits.json";
export default {
    data() {
        return {
            list: {
                hostingBenefits: hostingBenefitList
            }
        };
    },
    mounted() {
        // do something
    }
};
</script>
