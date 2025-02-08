import { useEffect, useState } from "react";

export default function FetchChartJSData ({onFetchedData}){

    // const [data, setData] = useState([])

    let username= 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`)

    useEffect(()=>{
        fetch('https://fedskillstest.coalitiontechnologies.workers.dev',{
            method: 'GET',
            headers:{
                'Authorization' : `Basic ${auth}`, 
            },
            'Content-Type' : 'application.json'
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw response;
        }).then(function (data) {
            // setData(data)
            onFetchedData(data) // data sent back to component who called it
        }).catch(function (error) {
            console.warn(error);
        });
    },[])
}