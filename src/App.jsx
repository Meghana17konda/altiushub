import {useState} from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';

const App=()=> {
    const[values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    const inputs=[
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Username should be 8 to 20 characters",
            label:"Username",
            required:true,
        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"It should be valid email",
            label:"Email",
            required:true,
        },
        {
            id:3,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 5 to 20 characters consisting of letters,digits and special characters",
            pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^*&])[a-zA-Z0-9!@#$%^&*]{5,15}$`,
            label:"Password",
            required:true,
        },
        {
            id:4,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            errorMessage:"Password doesn't match",
            label:"Confirm Password",
            pattern:values.password,
            required:true,
        },
    ];
    const handleSubmit=(e)=>{
        e.preventDefault();
    };
    const onChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    };
    return(
        <div className='app'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input)=>(
                    <RegistrationForm key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default App;
