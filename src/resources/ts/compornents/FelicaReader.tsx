import * as React from 'react';
import {FC, useEffect} from "react";
import axios from "axios";

const baseURL = "localhost:8000/felica-reader/";
export const FelicaReader:FC = () => {
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    axios
        .post(baseURL)
        .then((response) => {
            setPost(response.data);
            console.log(response.data);
        })
        .catch((error: any) => {
            console.error('失敗です', error);
          })
        .finally(() => {
            console.info('ローディング表示終了');
        });
  }, []);

  return (
    <div>
    </div>
  );
}