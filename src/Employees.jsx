import { useState } from "react";
import imgF from './img/femaleProfile.jpg'
import imgM from './img/maleProfile.jpg'
const Employees = () => {
    const [selectedTeam, setTeam] = useState('TeamB')
    const [employees, setRmployees] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
    },
    {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
    },
    {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
    }])
    function handleChangeTeam(event) {
        console.log(event.target.value)
        setTeam(event.target.value)
    }

    function handleEmploeeClick(event) {
        const transformedEmployed = employees.map((employee) => employee.id === parseInt(event.target.id)
            ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam }
            : employee)
    }

    return (
        <main className="container">
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-6">
                    <select className="form-select" value={selectedTeam} onChange={handleChangeTeam}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-8">
                    <div class="card-collection">
                        {employees.map(employee =>
                            <div id={employee.id} className="card m-2" style={{ cursor: 'pointer' }} onClick={handleEmploeeClick} >
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