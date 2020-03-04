<template>
    <div>
        <div id="header" class="d-flex justify-content-between" v-if="this.window.width < 1000">
            <h1 class="logo pl-3">chores</h1>

            <a href="#" class="pr-3 text-secondary" @click.prevent="openSidebar()">
                <Icon name="menu" />
            </a>
        </div>
        <Sidebar @close="toggle = $event" v-if="toggleSidebar"  />
        <button class="cover" v-if="toggle && this.window.width < 1000" @click="toggle = false"></button>
        <div class="container-fluid" :class="toggleSidebar ? 'layout' : ''">
            <div class="row">
                <div class="col-12">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '@/Shared/Icon'
import Sidebar from "./Sidebar";
export default {
    name: 'Layout',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    components:{ Sidebar, Icon },
    data(){
        return{
            toggle: true
        }
    },

    methods: {
        openSidebar(){
            this.toggle = true;
        }
    },

    computed:{
        toggleSidebar(){
            return this.toggle || this.window.width > 1000
        }
    }
}
</script>

<style scoped>
@import '../assets/styles/layout.css';
.logo{
    font-family: 'Yeon Sung' !important;
    color: rgb(166,234,248);
    font-size: 24px;
}
#header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 40;
    height: 50px;
    background-color: #f7fafc;
    padding: 10px;
}
</style>
