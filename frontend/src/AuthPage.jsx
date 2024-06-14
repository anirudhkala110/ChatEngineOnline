import React from 'react'
import axios from 'axios'
const AuthPage = (props) => {
    const onSubmit = (e) => {
        const { value } = e.target[0];
        e.preventDefault();
        axios.post(
            "http://localhost:8098/authenticate", {
            username: value
        }
        )
            .then(res => props.onAuth({ ...res.data, secret: value }))
            .catch(e => console.log("Error :", e))
        // props.onAuth({ username: value, secret: value });
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>

                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};


export default AuthPage