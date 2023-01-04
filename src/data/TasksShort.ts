import {ITaskShort} from "../components/task-short/model/ITaskShort";

export const TasksShort:ITaskShort[] = [
    {
        id:1,
        title:"test test test",
        doneStatus:true,
        taskType:"red",
        date:new Date(),
        time:new Date().getTime().toString()
    },
    {
        id:2,
        title:"test test test",
        doneStatus:false,
        taskType:"red",
        date:new Date(),
        time:new Date().getTime().toString()
    },
    {
        id:3,
        title:"test test test",
        doneStatus:false,
        taskType:"green",
        date:new Date(),
        time:new Date().getTime().toString()
    }
]