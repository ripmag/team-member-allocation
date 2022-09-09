import React from 'react';

const Teams = ({selectedTeam,handleChangeTeam}) => {
    return (
        <select className="form-select" value={selectedTeam} onChange={handleChangeTeam}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
        </select>
    );
};

export default Teams;