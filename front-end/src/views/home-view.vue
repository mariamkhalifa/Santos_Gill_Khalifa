<template>
    <main>
        <nav-menu></nav-menu>
        <div class="straign-green-line"></div>
        <p class="heading">Your daily sensor information</p>
        
        <sensors-comp></sensors-comp>

        <div class="graphCon">
            <p class="heading graphHeading">Plant Stats</p>
            <p>You plant stats over time</p>
            <graph-comp></graph-comp>
            <div id="graph" class="infoCon graphBox">
                
            </div>
        </div>
    </main>
</template>

<script>
import NavMenu from "../components/navmenu.vue";
import SensorsComp from '../components/sensorsComp.vue';
import GraphComp from '../components/graphComp.vue';
export default {
    components: {
        NavMenu, 
        SensorsComp,
        GraphComp
    }
}
</script>

<style lang="scss">
    .sensorCon{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
    }

    .sensor{
        width: 50vh;
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
    .straign-green-line {
        display: block;
        width: 100%;
        padding: 10px 0px;
        background : #638D21;
    }

    .heading{
        font-size: 22px;
        font-weight: 600;
        color: #638D21;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .sensor img{
        margin-top: 10px;
        height: 40px;
    }

    .subHeading{
        margin-top: 10px;
        font-size: 16px;
        font-weight: 700;
        color: rgb(197, 197, 197);
    }

    .infoCon{
        margin-top: 20px;
        background: #F7F7F7;
        width: 50vh;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: rgb(206, 206, 206);
        border-radius: 25px;
    }

    .graphCon{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        height: 60vh;
        background: url('/static/graphbg.png') no-repeat right center;
        border-top: 6px solid #638D21;        
        background-size: cover;
    }

    .graphHeading{
        color: white;
    }

    .graphBox{
        border: 6px solid #638D21;
    }

    @media screen and (min-width: 768px){
        .heading{
            font-size: 32px;
        }

        .sensor{
            margin-bottom: 10px;
        }

        .sensor img{
            margin-top: 26px;
            height: 84px;
        }

        .subHeading{
            margin-top: 16px;
            font-size: 28px;
            font-weight: 700;
        }

        .infoCon{
            margin-top: 28px;
            width: 60vh;
            height: 50vh;
        }

        .infoCon p{
            font-size: 28px;
        }

        .graphCon{
            margin-top: 60px;
            margin-bottom: 60px;
            height: 65vh;
        }

    @media screen  and (min-width: 1024px){
        .heading{
            margin-top: 20px;
            margin-left: 100px;
            margin-right: 100px;
            font-weight: 400;
            font-size: 24px;
        }

        .sensorCon{
            display: grid; 
            grid-template-columns: 1fr 1fr 1fr; 
            gap: 30px 30px;
            margin-left: 100px;
            margin-right: 100px; 
        }

        .sensor img{
            height: 52px;
        }

        .infoCon{
            margin-top: 28px;
            width: 50vh;
            height: 60vh;
        }

        .subHeading{
            font-size: 24px;
            font-weight: 400;
        }

        .graphCon{
            height: 80vh;
            margin-bottom: 0px;
        }

        .graphHeading{
            font-size: 28px;
            font-weight: 700;
        }

        .graphBox{
            width: 70vh;
        }


    }

    }
</style>