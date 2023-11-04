import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Home = () => {
    const [user] = useOutletContext();
    const nav = useNavigate();

    return (
        <div>
            Home
            <p>{user?.email}
            </p>
            {user?.Role ==="teacher" ? <button className='btn btn-primary' onClick={() => { nav("/projectList") }}>go to project</button> : ""
            }
        </div>
    );
};

export default Home;