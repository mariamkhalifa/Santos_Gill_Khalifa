<template>
    <nav id="TopMenu">
        <div id="logoSVG">
            <img src="/static/logo.svg" class="logo">
            <i class="material-icons">clear_all</i>
        </div>
        <div id="MenuLinks"></div>
    </nav>
</template>

<script>
export default {
    
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