import React from "react";
import {CalendarTiles} from "../../../components/calendar-tiles/ui/CalendarTiles";
import {TasskerHeader} from "../../../components/tassker-header/ui/TasskerHeader";
import s from '../style/Home.module.css'
import {TasskerContent} from "../../../components/tassker-content/ui/TasskerContent";
import {TasskerFooter} from "../../../components/tassker-footer/ui/TasskerFooter";
import {TasksShort} from '../../../data/TasksShort'

export function Home(){

    return(
        <div className={s.Home}>
            <TasskerHeader/>
            <CalendarTiles/>
            <TasskerContent tasks={TasksShort}/>
            <TasskerFooter/>
        </div>
    );
}