import React, {useState} from "react";
import {CalendarTiles} from "../../../components/calendar-tiles/ui/CalendarTiles";
import {TasskerHeader} from "../../../components/tassker-header/ui/TasskerHeader";
import s from '../style/Home.module.css'
import {TasskerContent} from "../../../components/tassker-content/ui/TasskerContent";
import {TasskerFooter} from "../../../components/tassker-footer/ui/TasskerFooter";
import {TasksShort} from '../../../data/TasksShort'
import {ModalCurrentTask} from "../../../components/modal-current-task/ui/ModalCurrentTask";
import { Task } from "../../../components/task/ui/Task";

export function Home(){

    const [modalTaskActive, setModalTaskActive] = useState<boolean>(false)
    const [currentTaskId, setCurrentTaskId] = useState<number>(0);

    return(
        <div className={s.Home}>
            <TasskerHeader/>
            <CalendarTiles/>
            <TasskerContent
                tasks={TasksShort}
                setActive={setModalTaskActive}
                setTaskId={setCurrentTaskId}
            />
            <TasskerFooter
                setActive={setModalTaskActive}
                setTaskId={setCurrentTaskId}
            />
            <ModalCurrentTask
                active={modalTaskActive}
                setActive={setModalTaskActive}
            >
                <Task taskId={currentTaskId}/>
            </ModalCurrentTask>
        </div>
    );
}