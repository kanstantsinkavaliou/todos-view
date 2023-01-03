import React from "react";
import s from '../style/TaskPoint.module.css'
import {ITaskType} from "../model/ITaksType";

interface TaskPointProps{
    type:ITaskType
}
export function TaskPoint(props:TaskPointProps){

    return(
        <div className={
            props.type.type === 'red' ? s.RedPoint : s.GreenPoint
        }
        >
            𐤟
        </div>
    );
}