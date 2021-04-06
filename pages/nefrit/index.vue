<template>
    <div class="hero flex column">
        <div class="container flex">
            <div class="form">
                <Selection 
                    v-for="data in mockData" :key="data.title"
                    :id="data.id"
                    :value="data.value"
                    :forID="data.id"
                    :title="data.title"
                />
                <br> <br>
                <input name="radio-button" type="radio" id="four" value="ShowRightPanel = true" v-model="heroPanel">
                <label for="four">Doprava</label>
                <br>
                <input type="radio" id="five" value="ShowLeftPanel = true" v-model="heroPanel">
                <label for="five">Doleva</label>
                <br>
                <!-- <input type="radio" id="three" value="ShowCenterPanel = true" v-model="heroPanel">
                <label for="three">Na sřed</label>
                <br> -->
                <h2>{{ heroPanel }}</h2>
                <h2>{{picked}}</h2>
            </div>
        </div>
    </div>
</template>

<script>

import mockData from '@/assets/data/test.js'
    export default {
        data () {
            return {
                mockData: mockData,
                picked: '',
                heroPanel: '',
                model: '',
                hero: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

.hero {
    background-color: red;
}

.container {
    background-color: orange;
    height: 100vh;
    .form {
        margin-top: 20vh;
        .selection {
            margin: 40px;
        }
    }
}

</style>