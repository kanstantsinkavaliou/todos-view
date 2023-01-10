import React, {useEffect, useState} from "react";
import s from '../style/Task.module.css'
import {ITask} from "../model/ITask";

interface TaskProps{
    taskId:number
}

export function Task(props:TaskProps){

    const [task, setTask] =useState<ITask>({
        date:new Date(),
        time:"",
        title: "",
        description:"",
        doneStatus:false,
        taskType:""
    })

    useEffect(() => {
        if (props.taskId !== 0)
            setTask({
                date:new Date(),
                time:"",
                title: "test",
                description:"test",
                doneStatus:false,
                taskType:"red"
            })
    }, [props.taskId])

    return(
        <div className={s.Task}>
            <div className={s.Element}>
                <div>date</div>
                <input type="text" value={task.date.toString()} />
            </div>
            <div className={s.Element}>
                <div>time</div>
                <input type="text" value={task.time} />
            </div>
            <div className={s.Element}>
                <div>title</div>
                <input type="text" value={task.title} />
            </div>
            <div className={s.Element}>
                <div>description</div>
                <input type="text" value={task.description} />
            </div>
            <div className={s.Element}>
                <div>doneStatus</div>
                <input type="checkbox" checked={task.doneStatus} />
            </div>
            <div className={s.Element}>
                <div>taskType</div>
                <input type="text" value={task.taskType} />
            </div>
        </div>
    );
}