<template>
    <div>
        <p>graph</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lightValues: [],
            moistValues: [],
            tempValues: []
        }
    },

    created() {
        // fetch light valeus
        fetch('http://localhost:3002/light-values')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.lightValues = data;
        })
        .catch(err=>console.log(err));

        // fetch moisure values
        fetch('http://localhost:3002/moist-values')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.moistValues = data;
        })
        .catch(err=>console.log(err));
    
        // fetch temp valeus
        fetch('http://localhost:3002/temp-values')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.tempValues = data;
        })
        .catch(err=>console.log(err));
        
    }
}
</script>

<style lang="scss">
    
</style>