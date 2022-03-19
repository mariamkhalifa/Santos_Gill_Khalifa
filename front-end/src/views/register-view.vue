<template>
    <div>
        <nav-menu></nav-menu>
       <div id="LoginCon">
                <input type="text" placeholder="Email" class="field">
                <input type="password" placeholder="Password" class="field password">
                <input type="password" placeholder="Confirm Password" class="field">
                <button class="primaryButt">Sign Up</button>
        </div>
    </div>
</template>

<script>
import NavMenu from '../components/navmenu.vue'
export default {
    components: {NavMenu}
}
</script>

<style lang="scss">
    .password{
        margin-bottom: 20px;
    }
</style>