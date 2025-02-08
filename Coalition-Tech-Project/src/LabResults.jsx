import { useEffect, useState } from "react";
import downloadIcon from "/src/assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
import FetchChartJSData from "./FetchChartJsData";
export default function LabResults(){
    
    const [labwork, setLabwork] = useState([]);

    const handleFetchedData =  (data) =>{
        const patientFound = data.find(p => p.name === 'Jessica Taylor')
        setLabwork(patientFound.lab_results)
    }

    return(
        <>
            <FetchChartJSData onFetchedData = {handleFetchedData}/>
            <div className="labResults-container">
                <p className="lab-title">Lab Results</p>
                <div className="results-container">
                    {/* patients lab data */}
                    {
                        labwork.map(lab => (
                            <div className="result">
                            <p>{lab}</p>
                            <img src={downloadIcon}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}