import React, { HTMLInputTypeAttribute } from 'react'


interface Props{
  label:String;
  name:String;
  placeholder:String;
  onChange:Function;
  value:String;
  type: HTMLInputTypeAttribute
}

const Input:React.FC<Props> = ({label,name,placeholder,onChange,value,type}) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name as string} className='text-secondary_dark_gray-500 text-sm'>{label}</label>
      <input value={value as string} onChange={(e)=>onChange(e.target.value)} type={type} name={name as string} id={name as string} placeholder={placeholder as string} className='border focus-within:border-primary_red-500 transition duration-150 outline-none rounded-md px-2 py-2 text-sm' />
    </div>
  )
}

export default Input