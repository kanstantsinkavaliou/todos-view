import {ITaksType} from "../../task/model/ITaksType";

export interface IDayTileValues{
    selectedDay:boolean;
    weekendDay?:boolean;
    value:string;
    tasksTypes?:ITaksType[]
}