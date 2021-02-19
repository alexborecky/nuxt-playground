<template>
    <div class="changing-nav full-width" :class="{'colorNav' : $route.path == '/fixed-scroll'}">
        <div class="container flex flex-right">
            <ul class="flex center">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/test-page">Test page</nuxt-link></li>
                <li><nuxt-link to="/fixed-scroll">Fixed Scroll</nuxt-link></li>
                <!-- <li><nuxt-link to="/">This is link</nuxt-link></li>
                <li><nuxt-link to="/">This is link</nuxt-link></li> -->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ChangingNav',
        data () {
            return {
                colorNav: false
            }
        },
    }
</script>

<style lang="scss" scoped>

.changing-nav {
    position: fixed;
    height: 80px;
    z-index: 100;
    .container {
        height: 100%;
        ul {
            height: 100%;
            li {
                list-style: none;
                margin: 0 8px;
                a {
                    color: black;
                }
            }
        }
    }
}

.colorNav {
    .container {
        ul {
            li {
                a {
                    color: white;
                }
            }
        }
    }
}

a.nuxt-link-exact-active {
    font-weight: 800;
}

</style>