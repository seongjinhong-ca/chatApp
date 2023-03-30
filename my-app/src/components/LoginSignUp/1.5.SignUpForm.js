import React from "react";

export const SigUpForm = () => {

    return(
        <>
            <div className="SignUpForm">
                <form>
                    <label>email</label>
                    <input/>
                    <br/>
                    <label>username</label>
                    <input/>
                    <br/>
                    <label>password</label>
                    <input/>
                </form>
            </div>
            <button>SignUp</button>
        </>
    )
}