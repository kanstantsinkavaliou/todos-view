import React from "react";
import {ITaskShort} from "../model/ITaskShort";
import s from '../style/TaskShort.module.css'

interface TaskShortProps{
    taskShort:ITaskShort;
}

export function TaskShort(props:TaskShortProps){

    return(
        <div className={s.TaskShort}>
            <div>{props.taskShort.taskType + ":" +props.taskShort.doneStatus}</div>
            <div>{props.taskShort.title}</div>
        </div>
    );
}