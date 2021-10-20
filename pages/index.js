import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import '../styles/Home.module.scss';
import '../styles/login.scss';

export default function Homepage() {
    const [userName, setUserName] = React.useState('')
    const handleChange = (e) => {
        setUserName(e.target.value)
    }
    return (
        <div className="homepage">
            <div className="login-card">
                <div className="login-card-content">
                    <div className="header">
                        <div className="logo">
                            <div className="title-cont">
                                <img src="../assests/logo.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="form">
                        <div className="form-field username">
                            <input type="text" placeholder="Maestro Pokémon" onChange={handleChange} value={userName} />
                        </div>
                        <Link href={{
                            pathname: '/listing',
                            query: { userName },
                        }} >
                            <p className="button">Atrápalos Ya!</p>
                        </Link>
                    </div>
                </div>
            </div>
        </ div>
    )
}