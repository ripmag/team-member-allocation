import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="navbar bg-light">
            <form class="container-fluid justify-content-center">
                <button class="btn btn-outline-success me-2" type="button"><Link className='nav-link' to='/'>Home</Link></button>
                <button class="btn btn-outline-success me-2" type="button"><Link className='nav-link' to='/GroupedTeamMembers'>Teams</Link></button>                              
                
            </form>
        </nav>
    );
};

export default Nav;