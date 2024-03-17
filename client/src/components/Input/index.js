import React from 'react'

const Input = (
    {
        label= '',
        name='',
        type='text',
        className= '',
        isRequired= false,
        placeholder= ''
    }
) => {
  return (
   <div className='w-1/2'>
    <label for={name} className="block mb-1 text-sm font-medium text-gray-800">
        {label}
    </label>
    <input type={type} id="first-name" className={`bg-gray-50 border border-gray-300 text-gray-900 
    text-sm rounded-focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ${className}`} placeholder={placeholder} required={isRequired} />
   </div>
  )
}

export default Input