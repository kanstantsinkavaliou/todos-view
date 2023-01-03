import React from "react";
import {CalendarTiles} from "../../../components/calendar-tiles/ui/CalendarTiles";
import {TasskerHeader} from "../../../components/tassker-header/ui/TasskerHeader";
import s from '../style/Home.module.css'

export function Home(){

    return(
        <div className={s.Home}>
            <TasskerHeader/>
            <CalendarTiles/>
            {/*<TasskerContent/>*/}
            {/*<TasskerFooter/>*/}
        </div>
    );
}