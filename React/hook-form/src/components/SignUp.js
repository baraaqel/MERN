
import React, { useState } from 'react';

const SignUp = (props) => {
    const {inputs, setInputs} = props;

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form>
                First Name: <input type="text" name="firstName" onChange ={onChange}/>
                Last Name: <input type="text" name="lastName" onChange ={onChange}/>
                Email: <input type="email" name="email" onChange ={onChange}/>
                Password: <input type="password" name="password" onChange ={onChange} />
                Confrim: <input type="password" name="confirm" onChange ={onChange}/>
            </form>
        </div>
    )
}
export default SignUp;