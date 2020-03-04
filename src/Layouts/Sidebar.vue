<template>
    <div id="sidebar" class="p-0">
        <div class="logo-box pl-3 pt-2 d-flex justify-content-between align-items-center">
            <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
            <div>
                <h1 class="logo">chores</h1>
            </div>
            <a href="#" class="mr-3 text-secondary" @click.prevent="handleCloseSidbar()" v-show="window && window.width < 1000">
                <Icon name="x" />
            </a>
        </div>

        <div class="profile text-center mx-auto pt-4">
            <span class="avatar avatar-xxl" style="background-image: url(https://tedbree-designers.loc/storage/designers/avatar/1582685851-1582685851imag8932.jpg)"></span>
            <div class="pt-3">
                <h4 class="heading">Osemeke Samuel</h4>
            </div>
        </div>

        <div class="menu mt-4">
            <nav class="nav flex-column">
                <a class="nav-link active" href="#">
                    <Icon name="list" style="width: 18px" /> Tasks
                </a>
                <a class="nav-link active" href="#">
                    <Icon name="book" style="width: 18px" /> Note
                </a>
                <!-- <a class="nav-link" href="#">Link</a> -->
            </nav>
        </div>
    </div>
</template>

<script>
import Icon from '@/Shared/Icon'
export default {
    name: 'Sidebar',
    components:{ Icon },
    methods:{
        handleCloseSidbar(){
            this.$emit('close', false);
        }
    }
}
</script>

<style scoped>
@import '../assets/styles/sidebar.css';
.logo{
    font-family: 'Yeon Sung' !important;
    color: rgb(166,234,248);
    font-size: 24px;
}
</style>
