<template>
    <form v-on:submit.prevent="onSubmit">
        <input type="text" v-model="user.email">
        <input type="text" v-model="user.password">
        <input type="text" v-model="user.password_confirmation">
        <input type="text" v-model="user.name">
        <button>send</button>
    </form>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            user:{
                email: 'sergiorios@gmail.com',
                password: '1036400564',
                password_confirmation: '1036400564',
                name: 'sergio',
            }
        }
    },
    methods:{
        onSubmit() {
            axios.post('api/register', this.user).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>

</style>
