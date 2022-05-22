import { defineStore } from "pinia";

export const useUserDataStore = defineStore("userDataStore", {
    state: () => {
        return {
            unlocked: [] as string[],
        };
    },
    persist: {
        enabled: true,
        strategies: [{ key: "user", storage: localStorage }],
    },
});
