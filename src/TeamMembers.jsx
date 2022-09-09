import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({employees,handleEmploeeClick,selectedTeam}) => {
    return (
        <>
        {employees.map(employee => (
            <TeamMemberCard handleEmploeeClick={handleEmploeeClick} selectedTeam={selectedTeam} employee={employee}/>
        ))}
        </>
    );
};

export default TeamMembers;