<template>
    <div class="index">
        首页
    </div>
</template>

<script>
export default {
    name: 'index',
    data () {
        return {}
    },
    created () {
        console.log(process.env)
    },
    mounted () {
        console.log('mounted')
    },
    methods: {}
}
</script>

<style scoped lang="scss">

</style>
