import React from "react";
import s from '../style/TasskerFooter.module.css'

interface TasskerFooterProps{
    setActive:any
    setTaskId:any
}

export function TasskerFooter(props:TasskerFooterProps){

    const buttonHandler = () =>{
        props.setTaskId(0);
        props.setActive(true);
    }

    return(
        <div className={s.TasskerFooter}>
            <button
                className={s.AddTaskBtn}
                onClick={buttonHandler}
            >
                Add a new task
            </button>
        </div>
    );

}