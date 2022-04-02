<template>
    <header>
        <div id="logoSVG">
            <img src="/static/logo.svg" class="logo">
        </div>
        <nav id="TopMenu">
            <i class="material-icons" :class="{ rotated : isActive }" @click="toggleNav">clear_all</i>
            <ul id="menuLinks" :class="{ visible : isActive }">
                <router-link to="/resgister">Register</router-link>
                <router-link to="/home">Dashboard</router-link>
                <router-link to="/logout">Logout</router-link>
            </ul>
        </nav>
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
    #TopMenu{
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 100px;
        margin-right: 100px;
        background: #fff;
        padding: 10px;
        margin: 0;
    }

    #logoSVG{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }

    .material-icons{
        font-size: 35px;
        color: #638D21;
    }

    .logo{
        height: 30px;
        width: auto;
    }

    .rotated {
        transform: rotate(90deg);
    }

    #menuLinks {
        display: none;
    }

    #menuLinks.visible {
        display: flex;
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
            padding-left: 100px;
            padding-right: 100px;
        }

        .logo{
            height: 30px;
        }

    }
</style>