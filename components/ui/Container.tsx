import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' md:px-6 sm:mx-3 lg:px-8 px-2'>
      {children}
    </div>
  )
}

export default Container
