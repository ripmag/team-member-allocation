import { useState } from "react";
import imgF from './img/femaleProfile.jpg'
import imgM from './img/maleProfile.jpg'
const Employees = ({employees,selectedTeam,handleChangeTeam,handleEmploeeClick}) => {
   

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select" value={selectedTeam} onChange={handleChangeTeam}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div class="card-collection">
                        {employees.map(employee =>
                            <div key={employee.id} id={employee.id} className={(employee.teamName===selectedTeam ? "card m-2 standout" : "card m-2")} style={{ cursor: 'pointer' }} onClick={handleEmploeeClick} >
                                {employee.gender === "male" ? <img src={imgM} className="card-img-top" /> :
                                    <img src={imgF} className="card-img-top" />}
                                <div className="card-body">
                                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Employees;