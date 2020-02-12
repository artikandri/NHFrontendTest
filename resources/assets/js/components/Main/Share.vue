<template>
    <section class="main-share bg-gray-200">
        <div class="container">
            <section class="row ">
                <div class="col-md-6">
                    <p class="share__tagline">
                        Bagikan jika Anda menyukai halaman ini
                    </p>
                </div>
                <div class="col-md-6">
                    <ul class="share-list">
                        <li
                            :title="'Share on ' + share.id"
                            v-for="(share, idx) in list.shares"
                            :key="'share' + idx"
                            class="share-list__item"
                        >
                            <a href="" class="share-link">
                                <i
                                    class="share-icon"
                                    :class="share.icon"
                                    :style="'color: ' + share.color + ';'"
                                ></i>
                                <span class="share-count">
                                    {{ share.count | shareCountFormat }}
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import { kFormatter, decimalFormat } from "@js/helpers/number-formatter.js";
export default {
    data() {
        return {
            list: {
                shares: [
                    {
                        id: "facebook",
                        icon: "fa fa-facebook-square",
                        color: "#3b5998",
                        count: 80000
                    },
                    {
                        id: "twitter",
                        icon: "fa fa-twitter-square",
                        color: "#00acee",
                        count: 450
                    },
                    {
                        id: "googlePlus",
                        icon: "fa fa-google-plus-square",
                        color: "#d34836",
                        count: 1900
                    }
                ]
            }
        };
    },
    filters: {
        shareCountFormat(num = 0) {
            let res = parseInt(num);
            if (num > 9999) {
                res = kFormatter(num);
            } else {
                res = decimalFormat(num);
            }
            return res;
        }
    },
    mounted() {
        // do something
    }
};
</script>
