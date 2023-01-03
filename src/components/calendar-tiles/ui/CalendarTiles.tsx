import React, {useEffect, useState} from "react";
import {DayTile} from "../../day-tile/ui/DayTile";
import {IDayTileValues} from "../../day-tile/model/DayTileValues";
import createDateTilesList from "../model/createDateTilesList";
import s from '../style/CalendarTiles.module.css'

export function CalendarTiles(){

    const [listState, setListState] = useState<IDayTileValues[]>([]);

    useEffect(() => {
        setListState(createDateTilesList(2023, 1));
    }, [])

    return(
        <div className={s.CalendarTiles}>
            {listState.map(item => <DayTile value={item}/>)}
        </div>

    );
}