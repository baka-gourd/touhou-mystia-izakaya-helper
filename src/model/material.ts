export interface Material {
    id: string;
    name: string;
    tags: string[];
    locations: string;
    categories: string[];
    canBuy: boolean;
    canCollect: boolean;
    color: "default" | "primary" | "info" | "success" | "warning" | "error";
}
