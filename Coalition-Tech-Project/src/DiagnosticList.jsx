import { useEffect, useState } from "react";
import FetchChartJSData from "./FetchChartJsData";

export default function DiagnosticList (){

    const [list, setList] = useState([])

    const handleFetchedData =  (data) =>{
        const patientFound = data.find(p => p.name === 'Jessica Taylor')
        setList(patientFound.diagnostic_list)
    }
    
    return(
        <>  
            <FetchChartJSData onFetchedData = {handleFetchedData}/>

            <div id="diagnosticList-container">
                <p className="section-title">Diagnostic List</p>
                <div className="list-container">
                    <table cellSpacing={0} cellPadding={0}>
                        <tr>
                            <th>Problems/Diagnosis</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>  
                        {/* patient's data*/}
                        {
                            list.map(diagnosis =>(
                                <tr>
                                    <td>{diagnosis.name}</td>
                                    <td>{diagnosis.description}</td>
                                    <td>{diagnosis.status}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </>
    )
}