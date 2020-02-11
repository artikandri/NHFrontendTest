<template>
    <section class="main-hostingpackages">
        <div class="container">
            <div class="row main-hostingpackages__row">
                <div
                    class="main-hostingpackages__header col-md-8 col-md-offset-2 text-center"
                >
                    <h2 class="header__title">
                        Paket Hosting Singapura yang tepat
                    </h2>
                    <p class="header__tagline">
                        Diskon 40% + Domain dan SSL Gratis untuk Anda
                    </p>
                </div>
            </div>
            <section class="row main-hostingpackages__row">
                <div class="col-md-12  main-hostingpackages__packages">
                    <ul class="packages-list">
                        <li
                            class="packages-list__item"
                            :class="[
                                hostingPackage.recommended
                                    ? 'packages-list__item--recommended'
                                    : ''
                            ]"
                            v-for="(hostingPackage,
                            idx) in list.hostingPackages"
                            :key="'package' + idx"
                        >
                            <div class="package-item--wrapper">
                                <div
                                    v-if="hostingPackage.bestseller"
                                    class="corner-ribbon corner-ribbon-top-left"
                                >
                                    <span>BEST SELLER</span>
                                </div>
                                <div class="package-item__header">
                                    <h3 class="package__name">
                                        {{ hostingPackage.name }}
                                    </h3>
                                </div>
                                <div class="package-item__info">
                                    <p class="package__description">
                                        <del class="package__price-before"
                                            >{{ hostingPackage.currency }}
                                            {{
                                                hostingPackage.priceBeforeDiscount
                                                    | decimalFormat
                                            }}
                                        </del>
                                        <ins class="package__price-after"
                                            >{{ hostingPackage.currency }}
                                            <span
                                                class="package__price-after-discount"
                                                v-html="
                                                    discountedPrice(
                                                        hostingPackage
                                                    )
                                                "
                                            >
                                            </span>
                                            /
                                            {{
                                                hostingPackage.subscriptionFrequency ||
                                                    "bln"
                                            }}
                                        </ins>
                                    </p>
                                </div>
                                <div class="package-item__user">
                                    <strong>
                                        {{
                                            hostingPackage.userCount
                                                | decimalFormat
                                        }}
                                    </strong>
                                    Pengguna Terdaftar
                                </div>
                                <div class="package-item__benefits">
                                    <ul class="package__benefits benefit-list">
                                        <li class="benefit-list__item">
                                            {{ hostingPackage.resourcePower }}X
                                            resource power
                                        </li>
                                        <li
                                            class="benefit-list__item"
                                            v-for="(benefit,
                                            idx) in hostingPackage.benefits"
                                            :key="'benefit' + idx"
                                        >
                                            <span
                                                class="benefit-name"
                                                v-html="benefit"
                                            ></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import hostingPackagesList from "@json/hosting-packages.json";
export default {
    data() {
        return {
            list: {
                hostingPackages: hostingPackagesList || []
            }
        };
    },
    mounted() {
        // do something ...
    },
    methods: {
        decimalFormat(
            amount = 0,
            decimalCount = 0,
            decimal = ",",
            thousands = "."
        ) {
            try {
                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const negativeSign = amount < 0 ? "-" : "";

                let i = parseInt(
                    (amount = Math.abs(Number(amount) || 0).toFixed(
                        decimalCount
                    ))
                ).toString();
                let j = i.length > 3 ? i.length % 3 : 0;

                return (
                    negativeSign +
                    (j ? i.substr(0, j) + thousands : "") +
                    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
                    (decimalCount
                        ? decimal +
                          Math.abs(amount - i)
                              .toFixed(decimalCount)
                              .slice(2)
                        : "")
                );
            } catch (e) {
                console.log(e);
            }
        },
        discountedPrice(hostingPackage) {
            let { priceAfterDiscount } = hostingPackage;
            let priceAfterDiscountHtml = String(
                this.decimalFormat(priceAfterDiscount)
            )
                .split(".")
                .map((item, idx) => {
                    return idx == 0
                        ? `<span class="pop-out">${item}</span>`
                        : item;
                })
                .join(".");
            return priceAfterDiscountHtml;
        }
    }
};
</script>
