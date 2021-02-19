<template>
    <div>
        <div class="hero">
            <div class="video" :class="{'hidden-video': showVideo}">
                <div class="background flex center" id="stop" @click="showVideo = true">
                        <iframe src="https://player.vimeo.com/video/505660704?color=c30068&portrait=0" width="80%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="start-video" id='start' @click="showVideo = false">
                <img src="https://ik.imagekit.io/alexborecky/Playground/origin-still-22_copy_vW3PUVebWZMf.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                showVideo: true
            }
        },
        mounted () {
            var iframe = document.querySelector('iframe');
            var player = new Vimeo.Player(iframe);
            $('#start').click( function() {
                player.play();
            });
            $('#stop').click( function() {
                player.pause();
            });
        }
    }
</script>

<style lang="scss" scoped>

.video.hidden-video {
    opacity: 0;
    z-index: -100;
    position: fixed;
    transition: .4s ease-in-out;
    iframe {
        transform: scale(1.2);
        transition: 2s ease-in-out;
    }
}

.start-video {
    width: 100%;
    height: 100vh;
    z-index: 100 !important;
    &:hover {
        cursor: url(https://ik.imagekit.io/alexborecky/Playground/play_ARW51TdN2rwE.svg) 35 20, auto;
    }
    img {
        height: 100%;
        width: 100%;
    }
}

.video {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1000;
    transition: .4s ease-in-out;
    iframe {
        width: 80vw !important;
        height: 80vh;
        transition: 1s ease-in-out;
    }
    .background {
        background-color: black;
        width: 100%;
        height: 100%;
        &:hover {
            cursor: url(https://ik.imagekit.io/alexborecky/Playground/close_k8B7__sXRMC3B.svg) 25 15, auto !important;
        }
    }
}

</style>