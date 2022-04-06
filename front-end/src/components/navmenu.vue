<template>
    <header>
        <div id="NavCon">
        <div id="logoSVG">
            <img src="/static/logo.svg" class="logo">
        </div>
        <nav id="TopMenu">
            <img src="/static/burger.svg" :class="{ rotated : isActive }" @click="toggleNav" alt="burgerSVG">
            <ul id="menuLinks" :class="{ visible : isActive }">
                <router-link to="/register">Register</router-link>
                <router-link to="/home">Dashboard</router-link>
                <router-link to="/logout">Logout</router-link>
            </ul>
        </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        } 
    },

    methods: {
        toggleNav() {
            this.isActive = this.isActive ? false : true;
        }
    }
}
</script>

<style lang="scss">
    #NavCon{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
    }
    #TopMenu{
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 100px;
        margin-right: 100px;
        background: #fff;
        padding: 10px;
        margin: 0;
    }

    #TopMenu img{
        height: 25px;
        width: auto;
    }

    #logoSVG{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }

    .logo{
        height: 25px;
        width: auto;
    }

    .rotated{
        transform: rotate(-90deg);
    }

    #menuLinks {
        display: none;
    }

    #menuLinks a{
        color: #638D21;
        text-decoration: none;
        padding-top: 5px;
    }

    #menuLinks.visible {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }

    @media screen and (min-width: 768px){
        .material-icons{
            font-size: 44px;
        }
    }

    @media screen and (min-width: 1024px){
        #TopMenu{
            padding-top: 20px;
            padding-bottom: 20px;
        }

        .logo{
            height: 30px;
        }

    }
</style>