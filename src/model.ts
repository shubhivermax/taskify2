export interface Todo{
    id:number;
    todo:string;
    isDone:boolean;
    createdAt: string; // ISO date string
    completedAt?: string; // Optional, for completed tasks
}