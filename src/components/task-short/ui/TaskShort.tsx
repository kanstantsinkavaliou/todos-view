import React from "react";
import {ITaskShort} from "../model/ITaskShort";
import s from '../style/TaskShort.module.css'

interface TaskShortProps{
    taskShort:ITaskShort;
}

export function TaskShort(props:TaskShortProps){

    const selectTask = () => {
        console.log(props.taskShort.id)
    }

    return(
        <div
            className={s.TaskShort}
            onClick={selectTask}
        >
            <div className={
                props.taskShort.taskType === 'red' ?
                    props.taskShort.doneStatus ?
                        s.CircleRedChecked
                        :
                        s.CircleRed
                    :
                    props.taskShort.doneStatus ?
                        s.CircleGreenChecked
                        :
                        s.CircleGreen
            } />
            <div className={s.TaskTitle}>{props.taskShort.title}</div>
        </div>
    );
}