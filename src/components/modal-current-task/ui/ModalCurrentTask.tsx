import React from "react";
import s from '../style/ModalCurrentTask.module.css'

export function ModalCurrentTask({active, setActive, children}:any){

    return(
        <div className={active ? s.Active : s.ModalCurrentTask}>
            <div className={s.Content}>
                {children}
                <button onClick={() => setActive(false)}>close</button>
            </div>
        </div>
    );
}