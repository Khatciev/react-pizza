export type Pizza = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: [number];
    types: [number];
    rating: number;
};

export type SearchPizzaParams = {
    order: string;
    sortBy: string;
    categoryId: string;
    search: string;
    currentPage: string;
};

export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

export interface PizzaSliceState {
    items: Pizza[];
    loading: boolean;
    status: Status;
}