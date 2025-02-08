import logo from "/src/assets/TestLogo.svg"
import houseIcon from "/src/assets/home_FILL0_wght300_GRAD0_opsz24.svg"
import peopleIcon from "/src/assets/group_FILL0_wght300_GRAD0_opsz24.svg"
import calendarIcon from "/src/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
import chatBubbleIcon from "/src/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
import creditCardIcon from "/src/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
import settingsIcon from "/src/assets/settings_FILL0_wght300_GRAD0_opsz24.svg"
import MoreVIcon from "/src/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
import doctorImg from "/src/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
import PatientsSearch from "../PatientsSearch"
import DiagnosisHistory from "../DiagnosisHistory"
import PatientProfile from "../PatientProfile"
import DiagnosticList from "../DiagnosticList"
import LabResults from "../LabResults"


export default function Dashboard () {

    return(
        <>
            <section id="dashboard-container">

                <div id="nav-bar-container">
                  <img src={logo} className="logo-img"/>

                  <div className="navigation-btn-group">
                    <div>
                      <img src={houseIcon}/>
                      <p>Overview</p>
                    </div>
                   
                   <div className="active-category">
                    <img src={peopleIcon}/>
                    <p>Patients</p>
                   </div>

                   <div>
                    <img src={calendarIcon}/>
                    <p>Schedule</p>
                   </div>

                   <div>
                    <img src={chatBubbleIcon}/>
                    <p>Message</p>
                   </div>

                   <div>
                     <img src={creditCardIcon}/>
                    <p>Transactions</p>
                   </div>
                  </div>

                  <div className="doctor-profile">
                    <img className="doctorImg" src={doctorImg}/>
                    <div className="user-details">
                      <p className="user-name">Dr. Jose Simmons</p>
                      <p className="user-title">General Practictioner</p>
                    </div>
                    <img className="settingImg" src={settingsIcon}/>
                    <img className="moreVDots" src={MoreVIcon}/>
                
                  </div>
                </div>

                <div className="dashboard-content-container">
                  <PatientsSearch/>
                  <div className="mid-col">
                    <DiagnosisHistory/>
                    <DiagnosticList/>
                  </div>
                  <div className="right-col">
                    <PatientProfile/>
                    <LabResults/>
                  </div>
                 
                </div>
               

            </section>
        
        </>
    )
    
}