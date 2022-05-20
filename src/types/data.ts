export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface IStats{
    all: number;
    completed: number;
    notCompleted: number;
    percent: number;
}

export interface IMission {
    id: number;
    name: string;
    status: boolean;
}