import React from "react";
import {TasskerIcons} from "../../tassker-icons/ui/TasskerIcons";
import s from '../style/TasskerHeader.module.css'

export function TasskerHeader(){

    return(
        <div className={s.TasskerHeader}>
            <div className={s.Tile}>Tassker</div>
            <TasskerIcons/>
        </div>
    );
}