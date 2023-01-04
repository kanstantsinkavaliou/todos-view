import { ITaskType} from "../../task-point/model/ITaksType";

export interface IDayTileValues{
    selectedDay:boolean;
    weekendDay?:boolean;
    value:string;
    tasksTypes?:ITaskType[]
}