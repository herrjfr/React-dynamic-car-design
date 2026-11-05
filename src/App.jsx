import React, { useRef, useState } from 'react'
import logo from "./assets/logo.png"
import goyLogo from "./assets/goyLogo.png"

function App() {
  const [open,setOpen] = useState(false)
  const focus = useRef()
  const [check,setCheck] = useState(true)
  function forFocus(){
    if(check){
      focus.current.focus()
    }else{
      focus.current.blur()
    }
    setCheck(x=>!x)
  }
  return (
    <section className='hero w-[100%] h-[100vh] pt-[30px]'>
      <div className='main w-[1200px] h-[650px] rounded-[30px] border-[#727272] border-10'>
        <header className='pt-[20px] px-[50px] flex items-center justify-between'>
          <div className='flex items-center gap-x-[30px]'>
            <img className='cursor-pointer hover:scale-[1.05] transition-all duration-300' src={logo} />
            <ul className='text-white flex items-center gap-x-[10px]'>
              <li className='cursor-pointer hover:translate-y-[-15%] transition-all duration-300 rounded-[5px] hover:bg-gray-400 px-[10px]'>Models</li>
              <li className='cursor-pointer hover:translate-y-[-15%] transition-all duration-300 rounded-[5px] hover:bg-gray-400 px-[10px]'>Our Mission</li>
              <li className='cursor-pointer hover:translate-y-[-15%] transition-all duration-300 rounded-[5px] hover:bg-gray-400 px-[10px]'>Careers</li>
            </ul>
          </div>
          <div className='flex gap-x-[30px] items-center'>
            <div className='flex relative'>
              <input ref={focus} className='w-[300px] h-[40px] text-white rounded-[20px] border-white border-1 indent-[15px] placeholder:text-white ' type="text" placeholder='Ask for information...' />
              <button onClick={forFocus} className='absolute w-[30px] h-[30px] rounded-[50%] flex items-center justify-center text-[#EE595D] bg-white right-[5px] top-[5px] cursor-pointer hover:bg-gray-300 transition-all duration-300'>
                <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
              </button>
            </div>
            <button onClick={()=>{open?setOpen(false):setOpen(true)}} className='w-[40px] h-[40px] rounded-[50%] border-white border-1 flex items-center justify-center text-white cursor-pointer hover:bg-white/10 hover:scale-[1.05] transition-all duration-300'>
              <i className="fa-light fa-bars"></i>
            </button>
          </div>
        </header>
        <div className='text-white px-[50px] pt-[30px] relative'>
          <p className='text-[14px] border-b-1 inline pb-[4px]'>THE FUTURE IS NOW</p>
          <p className='text-[40px] pb-[10px]'>Discover how we are</p>
          <div className='flex items-center gap-x-[20px]'>
            <div className='relative w-[220px] h-[65px] text-[40px] border-1 border-white rounded-[35px] flex justify-center items-center'>
              <p className='absolute top-[-3px]'>changing</p>
            </div>
            <button className='text-[25px] w-[50px] h-[50px] rounded-[50%] bg-[red] text-white flex justify-center items-center cursor-pointer hover:bg-[#b30000] transition-all duration-300'>
              <i className="fa-sharp fa-regular fa-arrow-down-right"></i>
            </button>
          </div>
          <p className='text-[40px] pb-[10px]'>the world of automobiles</p>
          {open&&<div className='eyri w-[315px] h-[203px] absolute top-[20px] right-[50px] pt-[15px] px-[14px] flex flex-col items-start justify-between'>
            <span className='text-[14px] rounded-[30px] px-[10px] border-1 py-[8px]'>NEWS ARTICLE</span>
            <img className='w-[80px] absolute left-[0px] top-[65px]' src={goyLogo} />
            <p className='pb-[20px]'>Tesla Cybertruck production to begin at Austin factory in 2022, confirms Elon Musk</p>
            <button className='absolute top-0 right-0 w-[96px] h-[50px] rounded-[30px] bg-[red] flex items-center justify-center text-[14px] gap-x-[5px] hover:bg-[#b10101] cursor-pointer transition-all duration-300'>
              <p>View</p>
              <i className="fa-sharp fa-regular fa-arrow-up-right border-b-1 text-[12px]"></i>
            </button>
          </div>}
        </div>
      </div>
    </section>
  )
}

export default App