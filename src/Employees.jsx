import TeamMembers from "./TeamMembers";
import Teams from "./Teams";
const Employees = ({employees,selectedTeam,handleChangeTeam,handleEmploeeClick}) => {
   

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <Teams selectedTeam={selectedTeam} handleChangeTeam={handleChangeTeam}/>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div class="card-collection">
                        
                            <TeamMembers employees={employees}
                                         handleEmploeeClick={handleEmploeeClick}
                                         selectedTeam={selectedTeam}/>
                        
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Employees;