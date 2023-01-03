import React from "react";
import s from '../style/TasskerContent.module.css'
import {ITaskShort} from "../../task-short/model/ITaskShort";
import {TaskShort} from "../../task-short/ui/TaskShort";

interface TasskerContentProps{
    tasks:ITaskShort[]
}

export function TasskerContent(props:TasskerContentProps){

    return(
        <div className={s.TasskerContent}>
            {props.tasks.map(item => <TaskShort taskShort={item} />)}
        </div>
    )
}