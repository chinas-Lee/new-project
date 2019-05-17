<template>
    <div class="login-page">
        login-page
        <v-top-header></v-top-header>
        <a-button @click="handle">点我</a-button>
    </div>
</template>

<style>

</style>

<script type="es6">
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        name: 'login',
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['loginStatus'])
        },
        created () {
          console.log(this.loginStatus)
        },
        methods: {
            ...mapMutations({SET_LOGIN_STATUS: 'SET_LOGIN_STATUS'}),
            handle () {
                this.$ajax.login({userName: 'LCQ'})
            }
        }
    }
</script>
