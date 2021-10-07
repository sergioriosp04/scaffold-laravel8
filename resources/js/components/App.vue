<template>
    <main>
        <div>app vue</div>
        <router-link to="/"> init </router-link>
        <router-link to="/register"> register</router-link>
        <button @click="login">login</button>
        <button @click="logout">logout</button>
        <div>
            <router-view></router-view>
        </div>

        {{ userLogin }}
    </main>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            userLogin: null,
            user:{
                email: 'sergiorios@gmail.com',
                password: '1036400564',
            }
        }
    },
    async created() {
        try{
            await axios.get('/sanctum/csrf-cookie')
            await this.getUser()
        }catch (error) {
            console.log(error)
        }
    },
    methods:{
        async getUser(){
            // axios.get('api/user').then(response => {
            //     console.log(response)
            //     this.userLogin = response.data
            // })
            try {
                let user = await axios.get('api/user')
                this.userLogin = user.data
            } catch (error) {
                console.log(error)
            }
        },
        async login() {
            // axios.post('api/login', this.user).then(response => {
            //     console.log(response)
            //     this.getUser()
            // }).catch(error => {
            //     console.log(error)
            // })
            try {
                await axios.post('api/login', this.user)
                await this.getUser()
            } catch (error) {
                console.log(error)
            }
        },
        async logout() {
            // axios.post('api/logout ', this.user).then(response => {
            //     console.log(response)
            //     this.getUser()
            // }).catch(error => {
            //     console.log(error)
            // })

            try {
                await axios.post('api/logout ', this.user)
                this.userLogin = null
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style scoped>

</style>
