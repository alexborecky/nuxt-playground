<template>
    <div class="hero">
          <LocomotiveScroll
                ref="scroller"
                :getted-options="{
                smooth: true,
                direction: 'horizontal',
                smartphone: {
                    smooth: true,
                    direction: 'horizontal',
                },
                tablet: {
                    smooth: true,
                    direction: 'horizontal',
                },
            }"
            >
            <div class="example horizontal">
                <header data-scroll-section>
                    <h1>
                    Horizontal<br />
                    Scroll
                    </h1>
                </header>
                <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <div
                        class="example-big-square"
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    <div class="example-small-square" data-scroll data-scroll-speed="5" />
                    </div>
                </div>
                <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <div
                        class="example-big-square"
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    <div class="example-small-square" data-scroll data-scroll-speed="2" />
                    </div>
                </div>
                <div class="example-section" data-scroll-section>
                    <div class="example-content">
                    <div
                        class="example-big-square"
                        data-scroll
                        data-scroll-speed="-0.5"
                    />
                    <div class="example-small-square" data-scroll data-scroll-speed="2" />
                    </div>
                </div>
            </div> 
        </LocomotiveScroll>
    </div>
</template>

<script>
    export default {
        mounted() {
            
        },
    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/demo.scss';
body {
    background-color: black;
}

// .hero {
//     background-color: black;
//     background-size: cover;
//     background-position: center;
//     height: 100vh;
//     z-index: 2;
//     .cover {
//         top: 0;
//         z-index: 1;
//         position: absolute;
//         background: rgb(0,0,0);
//         background: linear-gradient(rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
//     }
//     .container {
//         z-index: 10;
//         position: relative;
//         height: 100%;
//         .title {
//             a {
//                 svg {
//                     margin-left: 8px;
//                     transition: .3s ease-in;
//                 }
//                 &:hover {
//                     svg {
//                         transform: translateX(8px);
//                     }
//                 }
//             }
//         }
//     }
// }

</style>