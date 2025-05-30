import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function AddUser() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    const { name, email } = user;

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate("/")
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='flex justify-center  border-rounded p-4 mt-2 shadow'>

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h2 className='text-center m-4'>Register User</h2>
                        <div className='mb-3'>

                            <label htmlFor='name' className='form-label'>User name</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Type your name here'
                                name='name'
                                value={name}
                                onChange={(e) => handleOnChange(e)} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>User email</label>
                            <input type='email'
                                className='form-control'
                                placeholder='Type your email here'
                                name='email' value={email}
                                onChange={(e) => handleOnChange(e)} />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link to="/" className='btn btn-danger'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
