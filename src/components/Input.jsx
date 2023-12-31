import React from 'react'

export default function Input({type, name, placeholder, required, label}) {
  return (
    <>
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type} name = {name}
        placeholder={placeholder}
      />
    </>
  )
}
