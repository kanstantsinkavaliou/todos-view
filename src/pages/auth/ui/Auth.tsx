import React from "react";
import {UserAuthForm} from "../../../components/user-auth-form/ui/UserAuthForm";
import {Link} from "react-router-dom";


export function Auth (){
    return(
        <div>
            <UserAuthForm/>
            <div >
                <div >
                    <Link
                        to="/register"
                    >
                        Don't have an account? Register
                    </Link>
                </div>
            </div>
        </div>
    );
}