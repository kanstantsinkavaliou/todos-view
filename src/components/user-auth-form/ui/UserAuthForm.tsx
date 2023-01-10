import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../../contexts/AuthContext";

export function UserAuthForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {currentUser, login} = useAuth();

    useEffect(() => {
        if (currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    async function handleFormSubmit(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if(email === "" || password === '')
            return;

        try {
            await login(email, password);
            navigate("/");
        } catch (e) {
            alert("Failed to register");
        }
    }

    return(
        <div>
            <form >
                <div >
                    <div>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={handleFormSubmit}
                    >
                        Login
                    </button>
                </div>

            </form>
        </div>);
}