import React from 'react';
import './Book.css';
import { useNavigate } from 'react-router-dom';

function Book() {
    const navigate = useNavigate();

    const handleNavigateToNail = () => {
        navigate("/Nail");
    };
    const handleNavigateToLashes = () => {
        navigate("/Lashes");
    }
    const handleNavigateToWig = () => {
        navigate("/Wig");
    }
    return (
        <div className='book-container'>
            <div className='image-container'>
                <img src="/assets/images/lashes-white-background.jpg" alt="Lashes" />
                <div className='overlay'>
                    <p>What kind of Appointment do you want to book?</p>
                    <ul>
                        <li>
                            <button onClick={handleNavigateToNail} style={{ backgroundColor: '#000000', color: '#D4DB2A' }}>Nail Art</button>
                        </li>
                        <li>
                            <button onClick={handleNavigateToLashes} style={{ backgroundColor: '#4D4E0A', color: 'white' }}>Lashes</button>
                        </li>
                        <li>
                            <button onClick={handleNavigateToWig} style={{ backgroundColor: '#F5F5F5', color: '#4D4E0A' }}>Wig Revamping</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Book;
