import Input from '../../UI/Input'
import { useEffect, useState } from 'react'


const Hero = () => {

  const [where,setWhere] = useState("")
  const [arrival,setArrival] = useState("")
  const [departure,setDeparture] = useState("")
  const [passenger,setPassenger] = useState("")
  const [isDisabled,setIsDisabled] = useState(false)

  useEffect(()=>{
    if(where.length >= 1 && where && arrival.length >= 1 && arrival && departure.length >=1 && departure && passenger.length >= 1 && passenger){
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
  },[where,arrival,departure,passenger])

  return (
    <div className='relative flex items-center justify-between p-4 w-full h-[80vh] md:h-[90vh] lg:h-[80vh] bg-hero-bg bg-cover bg-left '>
      <form className='w-[50%] h-[70%] bg-white rounded-md p-4 min-w-[100%] md:min-w-[30vw] md:max-w-[500px] flex flex-col gap-4'>
        {/* HEADER */}
        <p className='text-xl text-secondary_dark_gray-500 select-none'>Book unique accommodations and activities.</p>
        {/* FORM */}
        <div className='flex flex-1 flex-col gap-6'>
          <Input type="text" label="Where" name="where" placeholder="Where" onChange={setWhere} value={where}/>
          <div className='flex flex-col md:flex-row gap-2'>
            <Input type="date" label="Arrival" name="arrival" placeholder="Arrival" onChange={setArrival} value={arrival}/>
            <Input type="date" label="Departure" name="departure" placeholder="Departure" onChange={setDeparture} value={departure} />
          </div>
          <Input label="Passenger" type="number" name="passenger" placeholder="Passenger" onChange={setPassenger} value={passenger}/>
        </div>
        {/* SUBMIT BTN */}
        <button className='bg-primary_red-500 rounded-lg cursor-pointer p-4 text-secondary_white text-lg disabled:bg-primary_red-200 disabled:cursor-not-allowed' disabled={isDisabled}>Submit</button>
      </form>
    </div>
  )
}

export default Hero