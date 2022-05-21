import React from 'react';
import { ErrorMessage, useField } from 'formik';
const TextInput = ({ label, ...props }) => {
    
    const [field, meta] = useField(props);

  return (
      <div className='text__input '>
          <label htmlFor={field.name} className='text__input--label'>{ label }</label>
          <input
                className={`text__input--field ${meta.touched && meta.error ? 'text__input--error':'' }`}
              {...field} {...props} autoComplete='off' />
          <ErrorMessage component={"div"} name={field.name}  />
      </div>
  )
}

export default TextInput