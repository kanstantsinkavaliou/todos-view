import React from "react";
import s from '../style/TasskerFooter.module.css'

export function TasskerFooter(){

    return(
        <div className={s.TasskerFooter}>
            <button className={s.AddTaskBtn} role="button">Add a new task</button>
        </div>
    );

}