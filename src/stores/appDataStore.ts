import axios from "axios";
import { defineStore } from "pinia";
import { Material } from "../model/material";

export const useAppDataStore = defineStore("app", {
    state: () => {
        return {
            materialMap: new Map<string, Material>(),
            material: undefined as Material | undefined,
            tagMap: new Map<string, string>(),
            tag: undefined as string | undefined,
        };
    },
    actions: {
        async loadMaterials() {
            let rsp = await axios.get("/res/materials.json");
            let json: Material[] = JSON.parse(JSON.stringify(rsp.data));
            this.materialMap = new Map<string, Material>(
                json.map((m) => [m.id, m])
            );
        },
        async loadTags() {
            let rsp = await axios.get("/res/tags.json");
            let json = JSON.parse(JSON.stringify(rsp.data));
            let map = new Map<string, string>();
            for (let value in json) {
                map.set(value, json[value]);
            }
            this.tagMap = map;
        },
        async loadAll() {
            await this.loadMaterials();
            await this.loadTags();
        },
        selectMaterial(id: string) {
            this.material = this.materialMap.get(id);
        },
        getTag(id: string): string | undefined {
            return this.tagMap.get(id);
        },
    },
    getters: {
        materials: (state) => state.materialMap.values(),
    },
});
