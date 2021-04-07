<template>
    <div class="flex column center selection">
        <input name="radio-button" type="radio" :id="id" :value="value" @change="() => onChange(value)">
        <label class="flex column center" :for="forID">
        <img :src="img" alt="">{{title}}
        </label>
    </div>
</template>

<script>
    export default {
        name: 'Selection',
        props: ['id', 'value', 'model', 'forID', 'title', 'heroPanel', 'onChange', 'img'],
        methods: {
            log: console.log
        }
    }
</script>

<style lang="scss" scoped>


// input[type="radio"] {
//     display: none;
// }

// input[type="radio"]:checked+img{
//     max-width: 120px;
// }


.selection input[type="radio"] {
  display: none;
}

.selection label {
    background-color: #ddd;
    padding: 4px 11px;
    font-family: Arial;
    font-size: 16px;
    cursor: pointer;
    min-width: 120px;
    min-height: 120px;
    margin-right: 24px;
    padding: 16px;
    border: 1px solid rgba($color: #1e1e1e, $alpha: .08);
    background: rgba($color: #1e1e1e, $alpha: .04);
    border-radius: 16px;
    img {
        margin-bottom: 8px;
    }
}

.selection input[type="radio"]:checked+label {
  background-color: rgba($color: #0097E6, $alpha: .24);
  border: 2px solid #0097E6;
}

</style>