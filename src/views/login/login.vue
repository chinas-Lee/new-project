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
    import { _checkEmail } from '../../assets/js/check-methods'
    import { _getToken, _getSN } from '../../assets/js/user-methods'
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
            console.log(_checkEmail('1212'))
            console.log(this.loginStatus)
            console.log(_getSN())
        },
        methods: {
            ...mapMutations({SET_LOGIN_STATUS: 'SET_LOGIN_STATUS'}),
            handle () {
                this.$ajax.login({userName: 'LCQ'})
            }
        }
    }
</script>
