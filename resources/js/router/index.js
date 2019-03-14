import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: require("../components/pages/Portfolios.vue")
    },
    {
      path: "/share/:shareId(\\d+)/transactions",
      component: require("../components/pages/Share.vue"),
      props: true
    },
    {
      path: "/confirm/:confirmation_code",
      component: require("../components/auth/LoginForm.vue")
    },
    {
      path: "/login",
      component: require("../components/auth/LoginForm.vue")
    },
    {
      path: "/register",
      component: require("../components/auth/RegisterForm.vue")
    },
    {
      path: "/password/reset",
      component: require("../components/auth/ForgotPasswordForm.vue")
    },
    {
      path: "/password/reset/:reset_password_code",
      component: require("../components/auth/PasswordResetForm.vue")
    }
  ]
});