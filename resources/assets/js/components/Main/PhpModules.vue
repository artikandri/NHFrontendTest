<template>
    <section class="main-phpmodules">
        <div class="container">
            <div class="row">
                <div class="col-md-12 main-phpmodules__header text-center">
                    <h1 class="header__title">
                        Modul lengkap untuk menjalankan aplikasi PHP Anda
                    </h1>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ul class="php-modules-list">
                        <li
                            :key="'module' + idx"
                            class="php-modules-list__item"
                            v-for="(module, idx) in sliceModule(
                                list.phpModules,
                                1
                            )"
                        >
                            {{ module }}
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ul class="php-modules-list">
                        <li
                            :key="'module' + idx"
                            class="php-modules-list__item"
                            v-for="(module, idx) in sliceModule(
                                list.phpModules,
                                2
                            )"
                        >
                            {{ module }}
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ul class="php-modules-list">
                        <li
                            :key="'module' + idx"
                            class="php-modules-list__item"
                            v-for="(module, idx) in sliceModule(
                                list.phpModules,
                                3
                            )"
                        >
                            {{ module }}
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <ul class="php-modules-list">
                        <li
                            :key="'module' + idx"
                            class="php-modules-list__item"
                            v-for="(module, idx) in sliceModule(
                                list.phpModules,
                                4
                            )"
                        >
                            {{ module }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row m-top-20">
                <div class="col-md-12 text-center">
                    <button
                        type="button"
                        class="btn btn-niaga btn-dark btn-bordered"
                    >
                        Selengkapnya
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import phpModulesList from "@json/php-modules.json";
export default {
    data() {
        return {
            list: {
                phpModules: phpModulesList
            }
        };
    },
    mounted() {
        // do something...
    },
    methods: {
        sliceModule(list = [], order = 1, columnCount = 4) {
            let clonedList = _.cloneDeep(list);
            let listLength = list.length + 1;
            let idealSliceLength = parseInt(listLength / columnCount);

            let sliceStart = (order == 1 ? 0 : order - 1) * idealSliceLength;
            sliceStart = order == 1 ? sliceStart : sliceStart - 1;
            let sliceEnd = idealSliceLength * order - 1;

            return clonedList.splice(sliceStart, idealSliceLength);
        }
    }
};
</script>
