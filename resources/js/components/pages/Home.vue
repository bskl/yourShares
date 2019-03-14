<script type="text/ecmascript-6">
import { sharedStore } from '../../stores/sharedStore.js';
import { userStore } from '../../stores/userStore.js';
import MainLayout from '../layout/MainLayout.vue';
import Portfolios from './Portfolios.vue';
import Snackbar from '../partials/Snackbar.vue';

export default {
    /*
     * The component's name.
     */
    name: 'Home',

    components: {
        MainLayout, Portfolios, Snackbar,
    },

    /*
     * The component's data.
     */
    data() {
        return {
            loading: true,
        }
    },

    mounted() {
        if (this.$route.params.confirmation_code) {
            this.confirmUserMail()
            this.loading = false;
        } else if (this.$route.params.reset_password_code) {
            this.loading = false;
        } else if (! userStore.isAuthenticated()) {
            this.$router.push('/login');
            this.loading = false;
        } else {
            this.init();
        }
        Bus.$on('userLoggedIn', event => this.init());

        document.addEventListener("keydown", (e) => {
            if ((e.ctrlKey && e.keyCode == 82) || e.keyCode == 116) {
                this.loading = true;
            }
        })
    },

    created() {

    },

    methods: {
        init() {
            this.loading = true;
            try {
                sharedStore.getData()
                    .then(response => {
                        this.$i18n.locale = userStore.state.user.locale;
                        setTimeout(() => {
                            this.loading = false;
                        }, 500)
                    });
            } catch (err) {
                this.$router.push('/login');
                this.loading = false;
            }
        },

        /**
         * Confirm User Email.
         */
        confirmUserMail() {
            NProgress.start();

            return new Promise((resolve, reject) => {
                http.get('/confirm/' + this.$route.params.confirmation_code, ({ data }) => {
                    this.$root.snackbar.show = true;
                    this.$root.snackbar.text = this.$t('Your email account has been verified.');
                }, error => {
                    this.$root.snackbar.show = true;
                    this.$root.snackbar.color = 'error';
                    this.$root.snackbars.text = this.$t('Your activation code is invalid or your e-mail address verified before.');
                    reject(error)
                })
            })
        },
    },
}
</script>

<template>
  <main-layout :loading="loading">
    <snackbar :snackbar="this.$root.snackbar"></snackbar>

    <router-view></router-view>
  </main-layout>
</template>