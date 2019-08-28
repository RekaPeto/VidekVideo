<template>
    <div id="app">
        <div id="container">
        <h1>Login</h1>
         <div class="form-group">
                <label for="email">Email:</label>
                <input type="text"
                    id="email"
                    class="form-control"
                    v-model="userData.email">
            </div> 
                <div class="form-group">
                <label for="password">Enter Password</label>
                <input type="password"
                    id="password"
                    class="form-control"
                    v-model.lazy="userData.password">
            </div>
            <button class="btn btn-primary"
                    @click.prevent="submitted">Submit!
            </button>   
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import VideoGrid from '../components/VideoGrid';
    export default {
        name: 'Home',
        components: {
            VideoGrid
        },
        data() {
            return {
                userData: {
                        email: '',
                        password: ''
                        },    
                data: {indexUrl: 'https://localhost:44301'}
            }},
        methods: {
            submitted() {
                console.log({
                        email: this.userData.email,
                        password: this.userData.password
                    });
                axios.post('http://jsonplaceholder.typicode.com/posts', {
                        email: this.data.email,
                        password: this.data.password
                    }).then((response) => {})
                    .catch((e) => {
                        console.error(e)
                                    })
                        }   
                } 
        }    
</script>

<style scoped>

    * {
        box-sizing: border-box;
        margin: 20px;
    }

    #container {
        border: 20px;
        padding: 20px;
        margin-left: 10%;
        margin-right: 10%;
        background-color:rgba(105,105,105,0.5);
    }

    h1 {
        text-align: center;
    }
    

    body {
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.4;
    }

    

        .btn:hover {
            background: #666;
        }
    
    div {
        padding: 0 20px;
    }
</style>