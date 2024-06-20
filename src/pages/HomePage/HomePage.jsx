import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <>

            <div className="container-background">

                <div style={{ width: '250px', height: '250px', margin: 'auto' }}>
                    <Spinner
                        animation="border"
                        role="status"
                        style={{ width: '250px', height: '250px' }}
                        className="spinner"
                    >
                        <span className="visually-hidden">THE ROW</span>
                        <h4 className="spinner-text"><strong>THE </strong>ROW</h4>
                    </Spinner>
                </div>
            </div>

        </>
    );
}

export default HomePage;
