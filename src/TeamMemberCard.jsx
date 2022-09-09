import imgF from './img/femaleProfile.jpg'
import imgM from './img/maleProfile.jpg'


const TeamMemberCard = ({ employee, handleEmploeeClick, selectedTeam }) => {
    return (
        <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam 
        ? "card m-2 standout" : "card m-2")} style={{ cursor: 'pointer' }} onClick={handleEmploeeClick} >
            {employee.gender === "male" ? <img src={imgM} className="card-img-top" alt='Male' /> :
                <img src={imgF} className="card-img-top" alt='Female'/>}
            <div className="card-body">
                <h5 className="card-title">Full Name: {employee.fullName}</h5>
            </div>
        </div>
    );
};

export default TeamMemberCard;