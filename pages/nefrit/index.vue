<template>
    <div class="hero flex column">
        <div class="container flex">
            <div class="form flex column">
                <h3>Zarovnání textu</h3>
                <div class="text flex">
                <Selection 
                    v-for="option in options" :key="option.title"
                    :id="option.id"
                    :value="option.value"
                    :forID="option.id"
                    :title="option.title"
                    :onChange="() => selectedOption = option"
                    :img="option.img"
                />
                </div>
                <br> <br>
                <!-- <input name="radio-button" type="radio" id="four" value="ShowRightPanel = true" v-model="heroPanel">
                <label for="four">Doprava</label>
                <br>
                <input type="radio" id="five" value="ShowLeftPanel = true" v-model="heroPanel">
                <label for="five">Doleva</label>
                <br> -->
                <!-- <input type="radio" id="three" value="ShowCenterPanel = true" v-model="heroPanel">
                <label for="three">Na sřed</label>
                <br> -->

                <h4>
                    <span class="punct">&lt;</span>script<span class="punct">></span><br>
                    <span class="reg">{{selectedOption && selectedOption.value}} <br></span>
                    <span class="punct">&lt;</span>/script<span class="punct">></span>
                </h4>
            </div>
        </div>
    </div>
</template>

<script>

import mockData from '@/assets/data/test.js'
    export default {
        data () {
            return {
                selectedOption: null,
                options: mockData,
                picked: '',
                heroPanel: '',
                model: '',
                hero: ''
            }
        },

        methods: {
            log: console.log
        }
    }
</script>

<style lang="scss" scoped>

.container {
    height: 100vh;
    .form {
        margin-top: 20vh;
        h3 {
            margin: 16px 0;
        }
    }
}

.punct {
    color: #89ddff!important;
}

.reg {
    color: blue;
    margin: 8px 16px;
}

</style>