import React, { PropsWithChildren } from 'react'


interface Props extends PropsWithChildren{
  title:String;
  comment?:String;
}

const Section:React.FC<Props> = ({comment,title,children}) => {
  return (
    <section className='flex flex-col gap-3 p-4 select-none'>
     <div className='flex flex-col gap-1'>
        <h2 className='text-secondary_dark_gray-600 text-lg font-medium'>{title}</h2>
        {comment && <p className='text-secondary_dark_gray-300 text-sm'>{comment}</p>}
     </div>
      <div className='flex justify-evenly gap-5'>
      {children}
      </div>
    </section>
  )
}

export default Section