<template>
    <div class="top">
        <div class="MainMenu">
                <div class="ImageContainer">
                    <img class="Icon" :src=icon alt="" @click=ReRoute(paths.Home)>
                </div>
                <div class="Navigation">
                    <div class="nav-item" @click="ReRoute(paths.Search)"> <Icon icon="material-symbols:search" /> Search</div>
                    <div class="nav-item" @click="ReRoute(paths.Browse)"> <Icon icon="material-symbols:browse-outline" /> Browse</div>
                </div>
                <div class="UserMenu">
                    <div class="usermenu-item" @click="ReRoute(paths.Profile)"> <Icon icon="mingcute:user-4-fill" /> Profile</div>
                    <div class="usermenu-item" @click="ReRoute(paths.Settings)"> <Icon icon="uil:setting" /> Settings</div>
                    

                </div>
            </div>
    </div>
</template>



<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import icon from '@/../public/icon-export.svg';

export default {
    name: 'MenuTabs',
    components: {
        Icon
    },
    setup() {
        const message = ref('');
        const router = useRouter();
        const paths = {
            Home: 'Home',
            Search: 'Search',
            Browse: 'Browse',
            Profile: 'Profile',
            Settings: 'Settings'
        }
        const ReRoute = (path) => {
            router.push({ name: path });
        };

        onMounted(async () => {

        });
        return {
            icon,
            ReRoute,
            message,
            Icon,
            paths
        }
    }
}
</script>



<style scoped>
.top {
        height: 80px;
        width: 100vw;
        border-bottom: 1px solid rgb(215, 215, 215);
        display: flex;
        justify-content: center;
        background-color: white;
    }
    .MainMenu {
        display: flex;
        height: 100%;
        width: 80%;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
    }

    .ImageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70%;
    }

    .Icon {
        height: 100%;
        cursor: pointer;
    }

    .Navigation {
        display: flex;
        margin: 10px 30px;
        width: 100%;
    }

    .UserMenu {
        display: flex;
        margin: 10px;
        width: 30%;
    }

    .nav-item, .usermenu-item {
        margin: 10px;
        cursor: pointer;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px
    }

    .nav-item:hover, .usermenu-item:hover {
        color: rgb(0, 123, 255);
    }

</style>