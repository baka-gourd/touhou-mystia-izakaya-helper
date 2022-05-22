import axios from "axios";
import { defineStore } from "pinia";
import { Material } from "../model/material";

export const useAppDataStore = defineStore("app", {
    state: () => {
        return {
            materialMap: new Map<string, Material>(),
            material: undefined as Material | undefined,
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
        getMaterial(id: string) {
            this.material = this.materialMap.get(id);
        },
    },
    getters: {
        materials: (state) => state.materialMap.values(),
    },
});
