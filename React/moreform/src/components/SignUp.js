import React, { useState } from 'react';

const SignUp = (props) => {
    const {inputs, setInputs} = props;
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        if(inputs.firstName.length !== 0){
            if(inputs.firstName.length < 3) {
                setFirstNameError("First name must be longer than two characters")
            } else {
                setFirstNameError("")
            }
        }
        if(inputs.lastName.length !== 0){
            if(inputs.lastName.length < 3){
                setLastNameError("Last name must be longer than two characters")
            } else {
                setLastNameError("")
            }
        }
        if(inputs.email.length !== 0) {
            if(inputs.email.length < 10) {
                setEmailError("Email must be at least 5 characters")
            } else {
                setEmailError("")
            }
        }
        if(inputs.password.length !== 0){
            if(inputs.password.length < 8) {
                setPasswordError("Password must be at least 8 characters")
            } else {
                setPasswordError("")
            }
        }
        if(inputs.confirm.length !== 0){
            if (inputs.confirm === inputs.password) {
                setConfirmError("")
            } else {
                setConfirmError("Passwords do not match")
            }
        }
    }

    return (
        <div>
            <form>
                First Name: <input type="text" name="firstName" onChange ={onChange}/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{firstNameError}</p>
                    : ''
                }
                <br></br>
                Last Name: <input type="text" name="lastName" onChange ={onChange}/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{lastNameError}</p>
                    : ''
                }
                <br></br>
                Email: <input type="email" name="email" onChange ={onChange}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{emailError}</p>
                    : ''
                }
                <br></br>
                Password: <input type="password" name="password" onChange ={onChange} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p>
                    : ''
                }
                <br></br>
                Confrim: <input type="password" name="confirm" onChange ={onChange}/>
                {
                    confirmError ?
                    <p style={{color:'red'}}>{confirmError}</p>
                    : ''
                }
            </form>
        </div>
    )
}
export default SignUp;