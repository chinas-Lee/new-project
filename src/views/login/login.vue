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
        },
        methods: {
            ...mapMutations({SET_LOGIN_STATUS: 'SET_LOGIN_STATUS'}),
            async handle () {
                try {
                    let systemParams = {
                        block: 'consultation',
                        subType: 'reason'
                    }
                    let result = await Promise.all([
                        this.$ajax.getMyHospital(),
                        this.$ajax.getSystemConfig(systemParams)
                    ])
                    console.log(result)
                    console.log(this.$tools.getDataType(result[0]))
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>
