import patientImg from "/src/assets/Layer 2.png"
import dateIcon from "/src/assets/BirthIcon.svg"
import sexIcon from "/src/assets/FemaleIcon.svg"
import phoneIcon from "/src/assets/PhoneIcon.svg"
import shieldIcon from "/src/assets/InsuranceIcon.svg"
import { useEffect, useState } from "react"
import FetchChartJSData from "./FetchChartJsData"

export default function PatientProfile (){

    const [profile, setProfile] = useState([])

    const handleFetchedData =  (data) =>{
        const patientFound = data.find(p => p.name === 'Jessica Taylor')
        setProfile(patientFound)
    }

    return(
        <>
            <FetchChartJSData onFetchedData = {handleFetchedData}/>
            <div className="patient-profile-container">
                <div className="patient-profile-info">
                    <div>
                        <img src={patientImg}/>
                        <p>{profile.name}</p>
                    </div>
                  
                    <div>
                        <img src={dateIcon}/>
                        <div>
                            <p>Date Of Birth</p>
                            <p>{profile.date_of_birth}</p>
                        </div>
                    </div>
                    <div>
                        <img src={sexIcon}/>
                        <div>
                            <p>Gender</p>
                            <p>{profile.gender}</p>
                        </div>
                    </div>
                    <div>
                        <img src={phoneIcon}/>
                        <div>
                            <p>Contact Info.</p>
                            <p>{profile.phone_number}</p>
                        </div>
                    </div>
                    <div>
                        <img src={phoneIcon}/>
                        <div>
                            <p>Emergency Contacts</p>
                            <p>{profile.emergency_contact}</p>
                        </div>
                    </div>
                    <div>
                        <img src={shieldIcon}/>
                        <div>
                            <p>Insurance Provider</p>
                            <p>{profile.insurance_type}</p>
                        </div>
                    </div>
                </div>
                <button className="all-info-btn">Show All Information</button>
            </div>
        </>
    )
}