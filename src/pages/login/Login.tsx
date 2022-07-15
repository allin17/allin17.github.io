import React, {useContext, useState} from 'react';
import './login.css'
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import Button from 'react-bootstrap/Button';

const login = 'fifa@ea.com'
const pass = '123'

const Login = () => {
    const [error, setError] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    let navitage = useNavigate()
    const {dispatch} = useContext(AuthContext);

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Signed in
          if (login === email && pass === password) {
              const user = {email, password}
              dispatch({type: 'LOGIN', payload: user})
              navitage("/")
          }
         else {
            //wrong credentials
            console.log('error')
              setError(true)
        }
    }

return (
    <div className="login">
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="email"
                onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
            />
            <Button variant="primary" size="lg" type="submit">
                Login
            </Button>
            {error && <span className="error">Wrong email or password!</span>}
        </form>
    </div>
);
}
;

export default Login;
