import * as React from 'react';
import { DrawerAppBar } from '../compornents/DrawerAppBar';
import { CustomizedTables } from '../compornents/CustomizedTables';

export const AttendanceManegementDay = () => {
    return (
        <div>
            <DrawerAppBar />
            <CustomizedTables />
        </div>
    );
};
