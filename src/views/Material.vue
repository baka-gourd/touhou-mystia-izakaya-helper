<template>
    <div id="root">
        <n-skeleton height="40px" width="100%" :sharp="false" v-if="loading" />
        <div v-else>
            <n-card title="列表">
                <div id="list">
                    <n-space>
                        <n-tag
                            v-for="material in app.materials"
                            :type="material.color"
                            @click="handleMaterialClick(material.id)"
                        >
                            {{ material.name }}
                        </n-tag>
                    </n-space>
                </div>
            </n-card>
            <n-card
                title="详情"
                style="margin-top: 20px"
                v-show="app.material !== undefined"
            >
                <n-h3>{{ app.material?.name }}</n-h3>
                <div
                    v-if="app.material?.canBuy === true"
                    style="
                        display: flex;
                        align-items: center;
                        margin-bottom: 6px;
                    "
                >
                    <n-icon-wrapper :size="24" :border-radius="10">
                        <n-icon :size="18" :component="CheckmarkOutline" />
                    </n-icon-wrapper>
                    <span style="margin-left: 6px">可购买</span>
                </div>
                <div
                    v-else
                    style="
                        display: flex;
                        align-items: center;
                        margin-bottom: 6px;
                    "
                >
                    <n-icon-wrapper
                        :size="24"
                        :border-radius="10"
                        color="#FF0000"
                    >
                        <n-icon :size="18" :component="AlertOutline" />
                    </n-icon-wrapper>
                    <span style="margin-left: 6px">不可购买</span>
                </div>
                <n-space style="display: flex; align-items: center">
                    <span>出现地点</span>
                    <n-tag v-for="m in app.material?.locations">{{ m }}</n-tag>
                </n-space>
                <n-space style="display: flex; align-items: center">
                    <span>Tag</span>
                    <n-tag v-for="m in app.material?.tags">{{ m }}</n-tag>
                </n-space>
            </n-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppDataStore } from "../stores/appDataStore";
import { ref } from "vue";
import { CheckmarkOutline, AlertOutline } from "@vicons/ionicons5";
const app = useAppDataStore();
let loading = ref(true);
app.loadMaterials()
    .then(() => {
        loading.value = false;
    })
    .catch(console.error);

function handleMaterialClick(id: string) {
    app.getMaterial(id);
}
</script>

<style scoped>
#root {
    margin: 40px;
}

#list {
    display: flex;
    overflow: auto;
}
</style>
