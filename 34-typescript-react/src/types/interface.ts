export interface Todo {
    id: number;
    text: string;
    done: boolean;
}


export interface GTodo<T> {
    id: number;
    text: string | number;
    done: boolean; 
}