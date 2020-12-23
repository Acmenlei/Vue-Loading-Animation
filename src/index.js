import Vue from "vue"
import App from "@/App/App"
import "@/commoncss/common.scss"
// import NProgress from "nprogress"
// import "nprogress/nprogress.css"
// NProgress.configure({showSpinner: false})
// NProgress.start()

new Vue({
    el:"#app",
    render: h => h(App)
})