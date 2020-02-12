<template>
    <section class="main-hero no-padding-bottom">
        <div class="container">
            <div class="row main-hero__row">
                <div class="col-md-12 text-center">
                    <h2 class="text__header text-montserrat-light">
                        Mendukung penuh framework Laravel
                    </h2>
                </div>
                <article class="col-md-7 main-hero__text">
                    <p class="text__description">
                        Tak perlu menggunakan dedicated server ataupun VPS yang
                        mahal. Layanan PHP hosting kami mendukung penuh
                        framework favorit Anda.
                    </p>
                    <ul class="text__benefits benefit-list">
                        <li
                            class="benefit-list__item"
                            v-for="(item, idx) in list.hostingLaravel"
                            :key="'item' + idx"
                        >
                            <i
                                class="fa list-icon"
                                :class="
                                    item.checked
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
                            <p
                                class="display-inline-block"
                                v-html="item.text"
                            ></p>
                        </li>
                    </ul>
                    <p>
                        <small
                            >Nb: Composer dan SSH hanya tersedia pada paket
                            Personal dan Bisnis</small
                        >
                    </p>
                    <button
                        type="button"
                        name="hostingButton"
                        class="btn btn-primary m-top-10 btn-niaga"
                    >
                        Pilih Hosting Anda
                    </button>
                </article>
                <div class="col-md-5 main-hero__image">
                    <img
                        src="@svg/illustration banner support laravel hosting.svg"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import hostingLaravelList from "@json/hosting-laravel.json";

export default {
    data() {
        return {
            list: {
                hostingLaravel: hostingLaravelList
            }
        };
    },
    mounted() {
        // do something...
    }
};
</script>
