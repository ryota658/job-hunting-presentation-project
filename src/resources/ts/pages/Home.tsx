import * as React from 'react';
import { FC, useState } from 'react';
import { SimpleAppBar } from '../compornents/index/SimpleAppBar';
import { Clock } from '../compornents/index/Clock';
import { AttendanceButton } from '../compornents/index/AttendanceButton';
export const Home = () => {
    return (
        <div>
            <SimpleAppBar />
            <Clock />
            <ul className="button_flex">
                <AttendanceButton text="出勤" num={0} />
                <AttendanceButton text="退勤" num={1} />
            </ul>
        </div>
    );
};
