import {IDayTileValues} from "../../day-tile/model/DayTileValues";
import {ITaksType} from "../../task-point/model/ITaksType";

export default function createDateTilesList (year:number, month:number){

    let list:IDayTileValues[] = [];
    const currentDay:number = new Date().getDate();
    const endDateOnThisMonth = new Date(year, month, 0);

    for (let i:number = 1; i <= endDateOnThisMonth.getDate(); i++){

        let tasksTypes:ITaksType[] = [];

        const count:number = getRandomInt(3);
        if(count !== 0){
            for (let i:number = 0; i < count; i++){
                let taskType:ITaksType = {type:"green"};
                if (getRandomInt(2) === 0 )
                    taskType.type = "red";
                tasksTypes.push(taskType);
            }

        }

        let obj:IDayTileValues = {
            selectedDay:false,
            value: `${year}-${month}-${i}`,
            tasksTypes: tasksTypes
        };

        if(currentDay === i)
            obj.selectedDay = true;

        list.push(obj);
    }

    return list;
}

function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
}