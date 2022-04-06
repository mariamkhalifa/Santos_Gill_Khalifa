<template>
    <div>
        <nav-menu></nav-menu>
        <div id="formCon">
            <input type="text" placeholder="Email" class="field">
            <input type="password" placeholder="Password" class="field password">
            <input type="password" placeholder="Confirm Password" class="field">
            <button @click.prevent="navToHome" class="primaryButt">Sign Up</button>
        </div>
    </div>
</template>

<script>
import NavMenu from '../components/navmenu.vue'
export default {
    components: {NavMenu},

    methods: {
        navToHome() {
            this.$router.push('/home');
        }
    }
}
</script>

<style lang="scss">
@import './../assets/sass/vars.scss';

    .password{
        margin-bottom: 20px;
    }

    #formCon{
        background: url('/static/web-bg.jpg') no-repeat right center;
        background-size: cover;
        height: 88vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .field{
        width: 240px;
        padding: 15px;
        color: $black;
        border-radius: 15px;
        border: 2px solid $green;
    }

    input[type=text]{
        margin-bottom: 20px;
    }

    input:focus{
        padding-left: 10x;
        outline: $magenta;
        border: 3px solid $magenta;
    }

    input::placeholder{
        text-align: center;
        opacity: .8;
        color: $grey;
    }

    .link{
        text-decoration: none;
        margin-top: 30px;
        color: $green;
        font-weight: 400;
    }

    .primaryButt{
        margin-top: 30px;
        width: 270px;
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 15px;
        background: $green;
        color: white;
        border: none;
        font-size: 16px;
        cursor: pointer;
        transition: all .5s ease;

        &:hover {
            background-color: $magenta;;
        }
    }

    .link-button{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    

    @media screen and (min-width: 768px){
        #formCon{
            height: 92vh;
        }

        .field{
            width: 500px;
            padding-top: 20px;
            padding-bottom: 20px;
            border-radius: 20px;
        }

        input{
            font-size: 24px;
        }

        .link{
            font-size: 26px;
        }

        .primaryButt{
            margin-top: 50px;
            width: 540px;
            padding-top: 20px;
            padding-bottom: 20px;
            font-size: 24px;
            border-radius: 20px;
        }
    }

    @media screen  and (min-width: 1024px){
        #formCon{
            background: url('/static/web-bg.jpg') no-repeat top center;
            background-size: cover;
            height: 88vh;
        }

        .link-button{
            align-items: flex-end;
        }
    }
</style>