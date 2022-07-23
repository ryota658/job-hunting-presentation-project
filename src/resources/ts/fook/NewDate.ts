import React from 'react'
import { useEffect, useState} from "react"

export const NewDate = ():Date => {
    const [date, setDate] = useState<Date>(new Date());
    useEffect(() => {
        const intervalId = setInterval(
            () => setDate(new Date())
        , 1000);
        return () => {
          clearInterval(intervalId);
        };
    }, []);
    return date;
}