import "./RegistrationForm.css";


const RegistrationForm=(props)=>{
    const{name,email,label,errorMessage,onChange,id,...inputProps}=props;
    return(
        <div className='Registration'>
            <label>{label}</label>
            <input {...inputProps}
                onChange={onChange}
                onFocus={()=>inputProps.props.name==="confirmPassword"}
                
            />
            <span>{errorMessage}</span>
        </div>
    );
};
export default RegistrationForm;