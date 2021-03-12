import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './League.css'

const League = (props) => {
    const {strLeague, strSport, idLeague} = props.league;
    const [league1, setLeague1]= useState({});
    const {strPoster} = league1;
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague1(data.leagues[0]))
    }, [idLeague])
    return (
        <div className="col-lg-4 my-2 text-center">
            <div className="card card-details h-100">
                <div className="card-body">
                    <img className="club-logo" src={strPoster} alt="strPoster"/>
                        <h2>{strLeague}</h2>
                        <p>Sports type: {strSport}</p>
                        <Link to={`/league/${idLeague}`}>
                            <button className="btn-success">Explore <FontAwesomeIcon icon={ faArrowRight }></FontAwesomeIcon></button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default League;