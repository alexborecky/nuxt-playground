<template>
    <div class="changing-nav full-width" :class="{'colorNav' : $route.path == '/fixed-scroll'}">
        <div class="container flex flex-right">
            <ul class="flex center">
                <li
                    v-for="item in items" 
                    :key="item.link"
                >
                    <nuxt-link 
                        :to="item.link">
                        {{item.title}}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import items from '@/assets/data/navigation.js'
    export default {
        name: 'ChangingNav',
        data () {
            return {
                colorNav: false,
                items: items
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