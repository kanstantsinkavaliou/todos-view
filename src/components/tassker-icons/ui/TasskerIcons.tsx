import React from "react";
import s from '../style/TasskerIcons.module.css'

export function TasskerIcons(){

    return(
        <div className={s.TasskerIcons}>
            <img src='/svg/ui-11.svg' alt="bell.icon"/>
            <a
                href="/"
                className={s.MenuBtn}
            >
                <span></span>
            </a>
        </div>
    );
}
