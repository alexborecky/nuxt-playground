<template>
    <div class="accordion" @click="showContent = !showContent">
        <div  class="trigger flex">
            <h5>This is trigger</h5>
        </div>
        <div :class="{'hidden-content': showContent }" class="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam quo molestiae eligendi suscipit, corrupti magnam, sint, beatae perspiciatis quod dolores eos consequuntur perferendis? Eveniet molestiae sunt blanditiis ducimus iure.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Accordion',
        data () {
            return {
                showContent: true
            }
        }
    }
</script>

<style lang="scss" scoped>

.hidden-content {
    transform: translateY(-10px);
    position: absolute !important;
    opacity: 0;
    width: 664px !important;
    z-index: -100;
}

.accordion {
    margin: 8px 0;
    max-width: 680px;
    padding: 16px 24px;
    background-color: #fafafa;
    position: relative;
    transition: .2s ease-in;
    border-radius: 8px;
    box-shadow: 0 2px 1px 0px rgba($color: #000000, $alpha: .16);
    .trigger {
        align-items: center;
        height: 40px;
        padding: 16px 4px;
        transition: .2s ease-in;
        width: 100%;
        h5 {
            font-size: 20px;
        }
    }
    .content {
        width: 100%;
        position: relative;
        background-color: #f1f1f1;
        border-radius: 8px;
        transition: .2s ease-in;
        padding: 16px;
    }
}

</style>