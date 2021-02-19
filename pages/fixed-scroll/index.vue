<template>
    <div>
        <div class="hero flex">
            <div class="split flex center text">
                <h2>This is text</h2>
            </div>
            <div class="split image"></div>
        </div>
        <div class="hero flex">
            <div class="split flex center text">
                <h2>This is text </h2>
            </div>
            <div class="split image2"></div>
        </div>
        <div class="hero flex">
            <div class="split flex center category">
                <h2 class="flex center">Pánské <div class="underline"></div></h2>
                <div class="cover"></div>
            </div>
            <div class="split flex center category">
                <h2 class="flex center">Dámské <div class="underline"></div></h2>
                <div class="cover"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.split {
    width: 50%;
    height: 100vh;
    h1 {
        color: black;
    }
}

.image {
    background-image: url(https://images.unsplash.com/photo-1613586141451-b0befa51925e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 150% 100%;
    background-attachment: fixed;
}

.image2 {
    background-image: url(https://images.unsplash.com/photo-1613575952708-e63778bbdcbc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80);
    background-size: auto 120%;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-attachment: fixed;
}

.category {
    position: relative;
    background-image: url(https://ik.imagekit.io/alexborecky/Playground/Frame_21_4etZWIcVC.png);
    background-size: cover;
    background-position: center;
    h2 {
        z-index: 2;
        position: relative;
        .underline {
            width: 0%;
            bottom: 0;
            position: absolute;
            height: 8px;
            background-color: white;
            transition: .3s ease-in-out;
        }
    }
    &:hover {
        .cover {
            background-color: rgba($color: #0038FF, $alpha: .64) !important;
        }
        h2 {
            color: white;
            .underline {
                width: 100%;
            }
        }
    }
    .cover {
        width: 100%;
        height: 100%;
        background-color: rgba($color: #F0F0F0, $alpha: .4);
        position: absolute;
        z-index: 1;
        left: 0;
        transition: .3s ease-in-out;
    }
}

.category:nth-child(2) {
    background-image: url(https://ik.imagekit.io/alexborecky/Playground/Frame_22_Uw_C7xNxN6IMG.png);
    .cover {
        width: 100%;
        height: 100%;
        background-color: rgba($color: #F0F0F0, $alpha: .4);
        position: absolute;
        z-index: 1;
        left: 0;
    }
}

</style>