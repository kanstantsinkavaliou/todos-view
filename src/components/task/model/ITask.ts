export interface ITask{

    date:Date;
    time:string;
    title: string;
    description?:string;
    doneStatus:boolean;
    taskType:string;
}