import React from "react";
import s from '../style/DayTile.module.css'
import {IDayTileValues} from "../model/DayTileValues";
import {TaskPoint} from "../../task-point/ui/TaksPoint";

interface DayTileProps{
    value:IDayTileValues
}

function getWeekDay(date:Date) {
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    return days[date.getDay()];
}

export function DayTile(props:DayTileProps){

    const currentDate = new Date(props.value.value)

    const selectTile = () => {
        alert(currentDate)
    }

        return(
            <div onClick={selectTile}>
                <div
                    className={
                        props.value.selectedDay ?
                            s.SelectedTile :
                            currentDate.getDay() === 0 ?
                                s.WeekendTile :
                                s.DayTile}
                >
                    <div className={s.Content}>
                        <header>{getWeekDay(currentDate)}</header>
                        <main>{currentDate.getDate()}</main>
                    </div>

                </div>
                <div className={s.TaskPoints}>
                    {props.value.tasksTypes?.map(item => <TaskPoint type={item}/>)}
                </div>
            </div>

        );


}