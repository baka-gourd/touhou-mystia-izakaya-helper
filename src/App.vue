<script setup lang="ts">
import { MenuOption, darkTheme, NIcon } from "naive-ui";
import { Component } from "vue";
import { h } from "vue";
import {
    BeerOutline,
    BookOutline,
    HomeOutline,
    PersonOutline,
} from "@vicons/ionicons5";
import { RouterLink } from "vue-router";

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

function renderRouteLink(name: string, path: string) {
    return h(
        RouterLink,
        {
            to: {
                path: path,
            },
        },
        { default: () => name }
    );
}

const menuOptions: MenuOption[] = [
    {
        label: () => renderRouteLink("主页", "/"),
        key: "home",
        icon: renderIcon(HomeOutline),
    },
    {
        label: () => renderRouteLink("食材", "/material"),
        key: "material",
        icon: renderIcon(BeerOutline),
    },
    {
        label: () => renderRouteLink("食谱查询", "/recipe"),
        key: "recipe",
        icon: renderIcon(BookOutline),
    },
    {
        label: "稀客查询",
        key: "rare-person",
        icon: renderIcon(PersonOutline),
    },
];
</script>

<template>
    <n-config-provider :theme="undefined">
        <n-layout position="absolute">
            <n-layout-header bordered>
                <div
                    style="
                        padding-left: 30px;
                        font-size: xx-large;
                        padding-top: 10px;
                        padding-bottom: 10px;
                    "
                >
                    东方夜雀食堂小帮手
                </div>
            </n-layout-header>
            <n-layout has-sider style="height: 100vh">
                <n-layout-sider
                    bordered
                    collapse-mode="width"
                    :collapsed-width="64"
                    :width="240"
                    show-trigger
                >
                    <n-menu
                        :collapsed-width="64"
                        :collapsed-icon-size="22"
                        :options="menuOptions"
                    />
                </n-layout-sider>
                <n-layout>
                    <router-view></router-view>
                </n-layout>
            </n-layout>
        </n-layout>
    </n-config-provider>
</template>
