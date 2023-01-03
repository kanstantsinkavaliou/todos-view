import React from "react";
import {CalendarTiles} from "../../../components/calendar-tiles/ui/CalendarTiles";
import {TasskerHeader} from "../../../components/tassker-header/ui/TasskerHeader";
import s from '../style/Home.module.css'
import {TasskerContent} from "../../../components/tassker-content/ui/TasskerContent";
import {TasskerFooter} from "../../../components/tassker-footer/ui/TasskerFooter";

export function Home(){

    const date:Date = new Date();

    return(
        <div className={s.Home}>
            <TasskerHeader/>
            <CalendarTiles/>
            <TasskerContent tasks={
                [
                    {
                        title:"test test test",
                        doneStatus:true,
                        taskType:"red",
                        date:date,
                        time:date.getTime().toString()
                    },
                    {
                        title:"test test test",
                        doneStatus:true,
                        taskType:"red",
                        date:date,
                        time:date.getTime().toString()
                    },
                    {
                        title:"test test test",
                        doneStatus:true,
                        taskType:"red",
                        date:date,
                        time:date.getTime().toString()
                    }
                ]
            }/>
            <TasskerFooter/>
        </div>
    );
}