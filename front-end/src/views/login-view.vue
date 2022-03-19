<template>
    <div class="container">
        <nav-menu></nav-menu>
        <div id="LoginCon">
                <input type="text" placeholder="Email" class="field">
                <input type="password" placeholder="Password" class="field">
                <div class="link-button">
                    <a href="#" class="link">Forgot Password ?</a>
                    <button class="primaryButt">Sign In</button>
                </div>
        </div>
    </div>
</template>

<script>
import NavMenu from "../components/navmenu.vue";
export default {
    components: {NavMenu}
}
</script>

<style lang="scss">

    #LoginCon{
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
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 15px;
        border: 1px solid #638D21;
    }

    input[type=text]{
        margin-bottom: 20px;
    }

    input:focus{
        padding-left: 10x;
    }

    input::placeholder{
        text-align: center;
    }

    .link{
        text-decoration: none;
        margin-top: 30px;
        color: #638D21;
        font-weight: 400;
    }

    .primaryButt{
        margin-top: 15px;
        width: 240px;
        padding-top: 15px;
        padding-bottom: 15px;
        border-radius: 15px;
        background: #638D21;
        color: white;
        border: none;
        font-size: 16px;
    }

    .link-button{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    

    @media screen and (min-width: 768px){
        #LoginCon{
            height: 92vh;
        }

        .field{
            width: 500px;
            padding-top: 20px;
            padding-bottom: 20px;
            border-radius: 20px;
            border: 1px solid #638D21;
        }

        input{
            font-size: 24px;
        }

        .link{
            font-size: 26px;
        }

        .primaryButt{
            margin-top: 30px;
            width: 500px;
            padding-top: 20px;
            padding-bottom: 20px;
            font-size: 24px;
        }
    }

    @media screen  and (min-width: 1024px){
        #LoginCon{
            background: url('/static/web-bg.jpg') no-repeat top center;
            background-size: cover;
            height: 88vh;
        }

        .field{
            width: 540px;
            padding-top: 14px;
            padding-bottom: 14px;
            border-radius: 25px;
            border: 1px solid #638D21;
            background: rgba(226, 226, 226, 0.137);
        }

        input::placeholder{
            color: #638D21;
            font-size: 20px;
        }
        
        .primaryButt:hover{
            background: transparent;
            border: 2px solid #638D21;
            color: #638D21;
        } 

        .link{
            font-weight: 700;
        }

        .primaryButt{
            width: 540px;
            border-radius: 25px;
            font-size: 18px;
        }

        .link-button{
            align-items: flex-end;
        }
    }
    
</style>