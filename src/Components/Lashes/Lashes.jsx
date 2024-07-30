import React, { useState } from 'react';
import "../NailArt/Nail.css";
import Toast from "../Toast/Toast";
import toast, { Toaster } from "react-hot-toast";

function Nail() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        time: '',
        phone: ''
    });

    const [error, setError] = useState({
        name: false,
        date: false,
        time: false,
        phone: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newError = {
            name: formData.name.trim() === "",
            date: formData.date.trim() === "",
            time: formData.time.trim() === "",
            phone: formData.phone.trim() === "",
        };

        setError(newError);

        const isValid = !Object.values(newError).some(value => value);

        if (isValid) {
            toast((t) => <Toast onClick={() => toast.dismiss(t.id)} />);
        }
        setFormData("")
    };

    return (
        <>
        <div>
        <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "var(--Green-medium)",
            color: "#fff",
            marginTop: "4em",
          },
        }}
      />
        </div>
            <div className='appointment-form'>
                <div>
                <h1>Lashes Appointment Details</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="full-name">Name: </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="full-name" 
                            placeholder='eg. John Doe'
                            value={formData.name}
                            onChange={handleChange} 
                            className={error.name ? 'error' : ''}
                        />
                        {error.name && <span className='error-message'>Name is required</span>}
                    </div>
                    <div>
                        <label htmlFor="date">Date: </label>
                        <input 
                            type="date" 
                            name="date" 
                            id="date" 
                            value={formData.date}
                            onChange={handleChange} 
                            className={error.date ? 'error' : ''}
                        />
                        {error.date && <span className='error-message'>Date is required</span>}
                    </div>
                    <div>
                        <label htmlFor="time">Time: </label>
                        <input 
                            type="time" 
                            name="time" 
                            id="time" 
                            value={formData.time}
                            onChange={handleChange} 
                            className={error.time ? 'error' : ''}
                        />
                        {error.time && <span className='error-message'>Time is required</span>}
                    </div>
                    <div>
                        <label htmlFor="phone">Phone: </label>
                        <input 
                            type="text" 
                            name="phone" 
                            id="phone" 
                            placeholder='0552669950'
                            value={formData.phone}
                            onChange={handleChange} 
                            className={error.phone ? 'error' : ''}
                        />
                        {error.phone && <span className='error-message'>Phone number is required</span>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        </>
    );
}

export default Nail;
