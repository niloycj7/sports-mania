import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import maleImg from '../images/male.png';
import femaleImg from '../images/female.png'
import twitterLogo from '../images/Twitter.png'
import facebookLogo from '../images/Facebook.png';
import youTubeLogo from '../images/YouTube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';

const LeagueDetail = () => {
    const {idLeague} = useParams();
    const [league, setLeague] = useState({});
    const{strLeague, strSport, intFormedYear, strCountry, strGender, strLogo, strFanart4, strDescriptionEN} = league;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    return (
        <div>
            <div className="league-info">
                <img className="banner-img" src={strFanart4} alt=""/>
                <div className="text-center c-logo">
                    <img className="custom-logo" src={strLogo} alt="strLogo"/>
                </div>
            </div>    
            <div className="container">
                <div className="card mb-3 bg-info my-3">
                    <div className="row no-gutters p-1">
                        <div className="col-md-6">
                            <div className="card-body">
                                    <h4 className="card-title text-white font-weight-bold">{strLeague}</h4>
                                    <p className="card-text text-white font-weight-bold"><FontAwesomeIcon icon={ faMapMarkerAlt }></FontAwesomeIcon> Founded: {intFormedYear}</p>
                                    <p className="card-text text-white font-weight-bold"><FontAwesomeIcon icon={ faFlag }></FontAwesomeIcon> Country: {strCountry}</p>
                                    <p className="card-text text-white font-weight-bold"><FontAwesomeIcon icon={ faFutbol }></FontAwesomeIcon> Type: {strSport}</p>
                                    <p className="card-text text-white font-weight-bold"><FontAwesomeIcon icon={ faMars }></FontAwesomeIcon> Gender: {strGender}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            {strGender === "Male" ? (
                                <img className="image-details" src={maleImg} alt="..."/>
                            ) : (
                                <img className="image-details" src={femaleImg} alt="..."/>
                            )}
                        </div>
                    </div>
                </div>
                <p className="card-text text-black">{strDescriptionEN}</p>
                <div className="text-center">
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer noopener"><img className="custom-icon" src={twitterLogo} alt="..."/></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener"><img className="custom-icon" src={facebookLogo} alt="..."/></a>
                        <a href="https://www.youtube.com" target="_blank" rel="noreferrer noopener"><img className="custom-icon" src={youTubeLogo} alt="..."/></a>
                </div>
            </div>    
        </div>
    );
};

export default LeagueDetail;