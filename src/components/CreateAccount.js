import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const CreateAccount = () => {
  const navigate = useNavigate();
  const initialValues = {
    name:"",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    isChecked:false
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      localStorage.setItem('auth', true);
      navigate('/dashboard');
    }
  }, [formErrors]);
  const handleChange = (e) => {
    let {
      name,
      value
    } = e.target;

    if (name == 'isChecked') {
      value = !formValues.isChecked;
    }

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormErrors(validate(formValues));
    if (validate(formValues)) {
      
      setIsSubmit(true);
    }
  };
  
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneNumberRegx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.password != values.confirmPassword) {
      errors.confirmPassword = "Confirm Password not match.";
    }
    if (!values.name) {
      errors.name = "Name is required!";
    } else if (!nameRegex.test(values.name)) {
      errors.name = "Name should only contain alphabets A to Z or a to z.";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number is required!";
    } else if (!phoneNumberRegx.test(values.phoneNumber)) {
      errors.phoneNumber = "This is not a valid phone number format!";
    }
    if (!values.isChecked ) {
      errors.isChecked = "Please agree terms and condition!";
    }
    return errors;
  };

  return (
      <div>
      <h2>Create account</h2>
            <div>
            {/* Form for create account starts */}
              <form onSubmit={handleSubmit} >
                  <div className='text__input '>
                      <label htmlFor={"email"} className='text__input--label'>Your Email</label>
                      <input className={`text__input--field ${formErrors.email && "text__input--error" } `} autoComplete='off' type="email" name='email' id='email' onChange={handleChange} value={formValues.email.toString()} />
                      {
                        formErrors.email && <p className='text__input--error__message'>{ formErrors.email}</p>
                      }
                  </div>
                  <div className='text__input '>
                      <label htmlFor={"password"} className='text__input--label'>Your Password</label>
                      <input className={`text__input--field ${formErrors.password && "text__input--error" } `} autoComplete='off' type="password" name='password' id='password' onChange={handleChange} value={formValues.password.toString()} />
                      {
                        formErrors.password && <p className='text__input--error__message'>{ formErrors.password}</p>
                      }
                  </div>
                  <div className='text__input '>
                      <label htmlFor={"confirmPassword"} className='text__input--label'>Confirm your Password</label>
                      <input className={`text__input--field ${formErrors.confirmPassword && "text__input--error" } `} autoComplete='off' type="password" name='confirmPassword' id='confirmPassword' onChange={handleChange} value={formValues.confirmPassword.toString()} />
                      {
                        formErrors.confirmPassword && <p className='text__input--error__message'>{ formErrors.confirmPassword}</p>
                      }
                  </div>
                  <div className='text__input '>
                      <label htmlFor={"name"} className='text__input--label'>Your full name</label>
                      <input className={`text__input--field ${formErrors.name && "text__input--error" } `} autoComplete='off' type="text" name='name' id='name' onChange={handleChange} value={formValues.name.toString()} />
                      {
                        formErrors.name && <p className='text__input--error__message'>{ formErrors.name}</p>
                      }
                  </div>
                  <div className='text__input text__input--phone '>
                      <label htmlFor={"phoneNumber"} className='text__input--label'>Your Phone number</label>
                      <input className={`text__input--field ${formErrors.phoneNumber && "text__input--error" } `} autoComplete='off' type="text" name='phoneNumber' id='phoneNumber' onChange={handleChange} value={formValues.phoneNumber} />
                      {
                        formErrors.phoneNumber && <p className='text__input--error__message'>{ formErrors.phoneNumber}</p>
                      }
                  </div>
                  <div className=' text__input--isChecked '>
                      <input input className = { `text__input--field ${formErrors.isChecked && "text__input--error" } `} autoComplete = 'off' type = "checkbox" name = 'isChecked' id = 'isChecked' onChange = { handleChange} checked={formValues.isChecked} /> 
                      <label htmlFor={"isChecked"} className='text__input--label'> I read and agree Terms and Conditions</label>
                      {
                        formErrors.isChecked && <p className='text__input--error__message'>{ formErrors.isChecked}</p>
                      }
                  </div>
                  <button type='submit' className='signup__button'>Create account</button>
              </form>
            {/* Form for create account ends */}
            </div>
      </div>
  )
}

export default CreateAccount