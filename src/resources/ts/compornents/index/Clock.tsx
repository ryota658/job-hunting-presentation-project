import * as React from 'react';
import { FC } from "react"
import { NewDate } from '../../fook/NewDate';

const dayArray = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

export const Clock: FC = () => {
    const now:Date = NewDate();
    const year:number = now.getFullYear();
    const month:number = now.getMonth()+1;
    const day:string = dayArray[now.getDay()];
    const date:number = now.getDate();
    const hour:number = now.getHours();
    const minute:number = now.getMinutes();
    const second:number = now.getSeconds();
    return (
        <div className='clock'>
            <div className="clock-child">
                <p className='clock-date'>{year}.{month}.{date} {day}</p>
                <p className='clock-time'>{hour}:{minute}:{second}</p>
            </div>
        </div>
    );
}