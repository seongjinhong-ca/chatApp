import React from "react";

export const LoginForm = () => {
    return (
        <>
            <div className="LoginForm">
                <form>
                <label>username</label>
                <input/>
                <br/>
                <label>password</label>
                <input/>
                </form>
            </div>
            <button>Login</button>
        </>
    )
}