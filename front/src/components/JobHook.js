import React,{useState} from 'react';
const RegisterForm = () =>{
    const [state,setstate]= useState({})
    const [errors,setErrors]=useState('')
    const handleSubmit = (event) => {
    event.preventDefault();

    
    console.log("Form submitted");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    };
    fetch('/offers',requestOptions).catch(err=>{alert(err);});
    setstate({});
    setErrors("");
    }
    const handleInputChange=(event)=>{
        setstate({...state,[event.target.name]:event.target.value});
    }
    return {handleSubmit,handleInputChange}
}


export default RegisterForm