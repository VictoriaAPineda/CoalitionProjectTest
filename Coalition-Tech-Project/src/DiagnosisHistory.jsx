import heartIcon from "/src/assets/HeartBPM.svg"
import lungIcon from "/src/assets/respiratory rate.svg"
import temperatureIcon from "/src/assets/temperature.svg"
import arrowDownIcon from "/src/assets/ArrowDown.svg"
import arrowUpIcon from "/src/assets/ArrowUp.svg"
import expandMoreIcon from "/src/assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
import { useEffect, useState } from "react"
/* Chart imports */
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import FetchChartJSData from "./FetchChartJsData"
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
    //   legend: {
    //     position: 'top',
    //   }
    //   ,
    //   title: {
    //     display: true,
    //     text: 'Chart.js Line Chart',
    //   },
    },
  };

export default function DiagnosisHistory(){

    const [vitalData, setVitalData]=useState([])

    const handleFetchedData = (data) =>{
        const patientFound = data.find(p => p.name === 'Jessica Taylor')
        setVitalData(patientFound.diagnosis_history)
    }
    
    {/* Just want recent 6 month span for demo */}
    const sixMonthSpan = vitalData.filter( (month, index) =>{
      return index <= 5
    })
    sixMonthSpan.reverse() // flips order for graph direction display

    const modifiedMonthData = sixMonthSpan.map( data => ({
        ...data,
        month: data.month.slice(0,3) // ex: March -> Mar
    }))
    const combinedDateData = modifiedMonthData.map( data => ({
        date: `${data.month}, ${data.year}`,  // ex: 'Mar' '2024' -> 'Mar, 2024'
        ...data
    }));

    /* Chart data setup */
    const labels = combinedDateData.map(m => m.date) // x axis
    const systolicData = combinedDateData.map(s => s?.blood_pressure?.systolic?.value)
    const diastolicData = combinedDateData.map(d => d?.blood_pressure?.diastolic?.value)

    const data ={
        labels,
        datasets :[
        {
            label: 'Systolic',
            data: systolicData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            lineTension: 0.4,
        },
        {
            label: 'Diastolic',
            data: diastolicData,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            lineTension: 0.4,
        }]
    }
    console.log(vitalData[0])
 
    return(
        <>
            <FetchChartJSData onFetchedData = {handleFetchedData} /> 
            <div className="diagnosis-container">
                <p className="diagnosis-title">Diagnosis History</p>
                <div className="charts-container">
                    {/* Blood pressure graph */}
                    <div className="blood-pressure-graph-container">
                        <div className="bp-info-left">  
                            <div>  
                                <p className="bp-chart-title">Blood Pressure</p>
                                <div>
                                    <p>Last 6 months </p>
                                    <img src={expandMoreIcon}/>
                                </div>
                            </div>
                            <Line options={options} data={data}/>
                        </div>
                        <div className="bp-info-right">
                            <p className="bp-type">Systolic</p>
                            <p className="bp-number">{vitalData[0]?.blood_pressure?.systolic?.value}</p>
                            <div>
                                <img src={arrowUpIcon}/>
                                <p>Higher than Average</p>
                            </div>
                        
                            <p className="bp-type">Diastolic</p>
                            <p className="bp-number">{vitalData[0]?.blood_pressure?.diastolic?.value}</p>
                            <div>
                                <img src={arrowDownIcon}/>
                                <p>Lower than Average</p>
                            </div>
                        </div>
                    </div>
                    {/* Display the lastest vitals */}
                    <div className="respiratory-info">
                        <img src={lungIcon}/>
                        <p className="info-title">Respiratory Rate</p>
                        <p className="bpm">{vitalData[0]?.respiratory_rate?.value} bpm</p>
                        <p className="level">{vitalData[0]?.respiratory_rate?.levels}</p>
                    </div>
                    <div className="temperature-info">
                        <img src={temperatureIcon}/>
                        <p className="info-title">Temperature</p>
                        <p className="temp">{vitalData[0]?.temperature?.value}&deg;F</p>
                        <p className="level">{vitalData[0]?.temperature?.levels}</p>
                    </div>
                    <div className="heart-rate-info">
                        <img src={heartIcon}/>
                        <p className="info-title">Heart Rate</p>
                        <p className="heart-rate">{vitalData[0]?.heart_rate?.value}</p>
                        <div>
                            <img src={arrowDownIcon}/>
                            <p className="level">{vitalData[0]?.heart_rate?.levels}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}