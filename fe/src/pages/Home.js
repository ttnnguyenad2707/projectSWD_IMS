import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const [user] = useOutletContext();

    return (
        <div>
            Home
            <p>{user?.email}
            </p>

            <button className='btn btn-primary'>go to project</button>
        </div>
    );
};

export default Home;