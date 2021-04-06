<template>
    <div>
        <input name="radio-button" type="radio" :id="id" :value="value">
        <label :for="forID">{{title}}</label>
    </div>
</template>

<script>
    export default {
        name: 'Selection',
        props: ['id', 'value', 'model', 'forID', 'title', 'heroPanel']
    }
</script>

<style lang="scss" scoped>

</style>