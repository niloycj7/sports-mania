import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css';

const Home = (props) => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => {
            const allLeagues = data.leagues;
            const leagues12 = allLeagues.slice(0 , 18);
            setLeagues(leagues12); 
        })
    }, [])
    return (
        <div>
            <div className="custom-banner">
                <div className="container background-img">
                    <h1 className="display-3 text-center text-white py-5 font-weight-bold">Football Club At A Glance</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;