<template>
    <div id="root">
        <n-card title="简介">
            <p>看名字还不知道嘛（</p>
        </n-card>
        <n-card title="数据来源" style="margin-top: 20px">
            <span>QQ群</span>
        </n-card>
    </div>
</template>

<script setup lang="ts">
import { useUserDataStore } from "../stores/userDataStore";
import { useAppDataStore } from "../stores/appDataStore";
</script>

<style scoped>
#root {
    margin: 40px;
}
</style>
