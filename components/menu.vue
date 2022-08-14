<template>
    <el-menu :default-active="activeRoute" mode="horizontal" @select="menuChange">
        <template v-for="(item,index) in menu" :key="index">
            <el-menu-item v-if="!item.child || item.child.length === 0" :index="item.slug">{{ item.label }}</el-menu-item>
            <el-sub-menu v-else :index="item.slug">
                <template #title>{{ item.label }}</template>
                <el-menu-item v-for="(child,cIndex) in item.child" :key="cIndex" :index="child.slug">{{child.title}}</el-menu-item>
            </el-sub-menu>
        </template>
    </el-menu>

</template>


<script lang="ts" setup >
    import { ChildItem, MenuItem } from '~~/models/menu';
    import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
    const { find } = useStrapi3()   
    // const {menu} = useMenu();
    const route = useRoute();
    const activeRoute = ref<any>();
    const router = useRouter();
    const { data:menu, pending, refresh, error } = await useAsyncData('menu', () => find<MenuItem[]>('main-menus', {_sort:'order'}));

    function menuChange(key: string, keyPath: string[]) {
       const newSelected = findItemInMenu(key, 'id');
       if(!key.includes('#')) {
        window.location.href = '/' + key;
        
       }
        

    }


    function findItemInMenu(value:string, key:string):MenuItem | ChildItem | null{
        if(!menu.value) return null
        menu.value.forEach( menu => {
            if(menu[key] === value){
                return menu;
            }
            menu.child.forEach( child => {
                if(child[key] === value) {
                    return child;
                }
            })
        })
        return null
    }

    


    watch(route,(r)=> {
        const selected = findItemInMenu(r.path, 'url')
        if(selected){
            activeRoute.value = selected.slug;
        }else{
            activeRoute.value = ''
        }
    },{
        immediate:true
    })

    

</script>


<style lang="scss" scoped>
.el-menu--horizontal{
    border-bottom: none;
}
</style>