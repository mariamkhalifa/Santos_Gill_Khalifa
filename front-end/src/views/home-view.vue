<template>
    <main>
        <nav-menu></nav-menu>
         <p class="heading">Your daily sensor information</p>
        <div class="sensorCon">
            <div id="light" class="sensor">
                <img src="/static/sunicon.svg" alt="lightIcon">
                <p class="subHeading">Light</p>
                <div class="infoCon" id="lightSensor">
                    <p>Sensor info here</p>
                </div>
            </div>
            <div id="temperature" class="sensor">
                <img src="/static/tempicon.svg" alt="tempIcon">
                <p class="subHeading">Temperature</p>
                <div class="infoCon" id="tempSensor">
                    <p>Sensor info here</p>
                </div>
            </div>
            <div id="moisture" class="sensor">
                <img src="/static/moistureicon.svg" alt="moistureIcon">
                <p class="subHeading">Moisture</p>
                <div class="infoCon" id="moistureSensor">
                    <p>Sensor info here</p>
                </div>
            </div>
        </div>

        <div class="graphCon">
            <p class="heading graphHeading">Graph</p>
            <div id="graph" class="infoCon graphBox">
                <p>Sensor Graph here</p>
            </div>
        </div>
    </main>
</template>

<script>
import NavMenu from "../components/navmenu.vue";
export default {
    components: {NavMenu}
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