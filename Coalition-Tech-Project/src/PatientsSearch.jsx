import searchIcon from "/src/assets/search_FILL0_wght300_GRAD0_opsz24.svg"
import moreHIcon from "/src/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
import { useEffect, useState } from "react";
import FetchChartJSData from "./FetchChartJsData";
export default function PatientsSearch () {

    const [data, setData] = useState([]);

    const handleFetchedData =  (data) =>{
        setData(data)
    }

    return(
        <>  
            <FetchChartJSData onFetchedData = {handleFetchedData}/>
            <div className="patients-container">
                <div className="title-area">
                    <p>Patients</p>
                    <img src={searchIcon}/>
                </div>
                <div className="patient-list">
                    { data.map((patient)=> (
                        <div className={`patient ${patient.name === 'Jessica Taylor' ? 'active-patient':''}`}
                            key={patient.name}
                        >
                            {/* List of patients */}
                            <div>
                                <img src={patient.profile_picture} className="patient-img"/>
                                <div className="patient-info">
                                    <p>{patient.name}</p>
                                    <p> {patient.gender}, {patient.age}</p>
                                </div>
                            </div>
                        <img src={moreHIcon}className="moreHIcon"/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}