import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

interface Props extends React.AllHTMLAttributes<PropsWithChildren>{

}

const PageLayout:React.FC<Props> = ({children}) => {
  return (
    <div className='flex flex-col'>
        <Head>
          <title>Airbnb clone</title>
          <meta name="description" content="Generated by Mohammadreza Alizadeh" />
          <link rel="icon" href="/assets/logo/logo-small.svg" />
        </Head>
        <div className='h-full w-screen mb-4'>
        {children}
        </div>
        <footer>
          <p className='text-center text-xs'>copyright © 2022 all rights reserved by <a href="https://github.com/mohammadrezaalizade" target="_blank" rel="noopener noreferrer" className='underline text-blue-700'>Mohammadreza Alizadeh</a></p>
        </footer>
    </div>
  )
}

export default PageLayout