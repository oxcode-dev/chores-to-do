<template>
    <div class="eb-modal" ref="modal" v-if="active">

        <div class="eb-modal-container mx-auto z-50" ref="container">

            <div @click.prevent="closeModal" class="eb-modal-close">
                <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
            </div>

            <div class="eb-modal-content" ref="content" :style="widthStyle">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
document.body.classList.add('modal-open');
export default{
    name: "Modal",
    props:{
        active: {
            type: Boolean,
            required: true,
            default: false
        },
        width:{
            type: Number,
            default: 500
        }
    },

    methods:{
        closeModal(){
            this.$emit('close', false)
            document.body.classList.remove('model-open');
        },

        closeWithModal(e){
            // console.log(e.target)
            let modal = this.$refs.modal;
            let content = this.$refs.content;
            let container = this.$refs.container;
            if (e.target === modal || e.target === container || e.target === content) {
                this.closeModal()
            }
        }
    },

    computed: {
        body() {
            return this.active;
        },

        widthStyle(){
            return `width: ${this.width}px; min-height: 250px`;
        }
    },

    mounted() {
        document.addEventListener('click', this.closeWithModal);
        document.body.classList.remove('modal-open');
    },

     watch: {
        body() {
            let className = 'modal-open';
            if (this.active) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        },
    },
}
</script>


<style scoped>
/* The Modal (background) */
.eb-modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 2100; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
}

/* Modal Content/Box */
.eb-modal-content {
  background-color: transparent;
  padding: 20px;
  border: 0;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width: 600px) {
    .eb-modal-content {
        width: 90% !important;
    }
}
.eb-modal-content, #caption {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
    from {
        -webkit-transform: scale(0)
    }
    to {
        -webkit-transform: scale(1)
    }
}

@keyframes zoom {
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
}

/* The Close Button */
.eb-modal-close {
    color: #aaa;
    position: fixed;
    top: 20px;
    right: 40px;
    font-weight: bold;
    padding: 5px;
    background-color: #fbfbf9;
    border-radius: 50%;
}

.eb-modal-close:hover,
.eb-modal-close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>