import React from 'react';
import '././App.css';

const Login = (props) => {
    return <div className="container">
        <form>
            <input type='text'
                placeholder="Username"
                className="input-field"
            />
            <br />
            <input type='password'
                placeholder="Password"
                className="input-field"
            />
            <br />
            <button className="button">Login</button>
        </form>

    </div>;
};

export default Login;
