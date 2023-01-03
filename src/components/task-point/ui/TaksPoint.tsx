import React from "react";
import s from '../style/TaskPoint.module.css'
import {ITaksType} from "../../task/model/ITaksType";

interface TaskPointProps{
    type:ITaksType
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