import React from 'react'
import {TiTick} from 'react-icons/ti'
 
const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-5'>Your Choice Plans</h1>
      <p className='text-center text-sm opacity-70 w-full md:w-9/12 lg:w-6/12 mx-auto mb-[50px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita tenetur, excepturi quos quam sequi voluptatem repellat animi fugiat suscipit? Placeat voluptates quas non est ab aut corporis distinctio quia odio.</p>

      <div className='container columns-1 md:columns-4 lg:gap-20 gap-10  w-full mx-auto'>

        {/* ---Card1--- */}
        <div className='border border-red-400 border-opacity-30 hover:border-opacity-60 w-6/12 md:w-auto mx-auto rounded-xl px-5 py-3 mb-5'>
          <span className='text-red-400 text-[10px]'>Start</span>
          <h2 className='text-red-400 font-bold text-2xl mb-5'>Free</h2>
          
          <div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
          </div>

          <button className='w-full py-1 my-3 text-red-400 hover:bg-red-400 hover:text-white px-auto rounded-md'>Buy</button>

          <p className='text-sm opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </div>

        {/* ---Card2--- */}

        <div className='border border-red-400 border-opacity-30 hover:border-opacity-60 w-6/12 md:w-auto mx-auto rounded-xl px-5 py-3 mb-5'>
          <span className='text-red-400 text-[10px]'>Start</span>
          <h2 className='text-red-400 font-bold text-2xl mb-5'>Free</h2>
          
          <div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
          </div>

          <button className='w-full py-1 px-auto my-3 text-red-400 hover:bg-red-400 hover:text-white  rounded-md'>Buy</button>

          <p className='text-sm opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </div>

        {/* ---Card3--- */}

        <div className='border border-red-400 border-opacity-30 hover:border-opacity-60 w-6/12 md:w-auto mx-auto rounded-xl px-5 py-3 mb-5'>
          <span className='text-red-400 text-[10px]'>Start</span>
          <h2 className='text-red-400 font-bold text-2xl mb-5'>Free</h2>
          
          <div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
          </div>

          <button className='w-full py-1 my-3 text-red-400 hover:bg-red-400 hover:text-white px-auto rounded-md'>Buy</button>

          <p className='text-sm opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </div>

        {/* ---Card4--- */}

        <div className='border border-red-400 border-opacity-30 hover:border-opacity-60 w-6/12 md:w-auto mx-auto rounded-xl px-5 py-3 mb-5'>
          <span className='text-red-400 text-[10px]'>Start</span>
          <h2 className='text-red-400 font-bold text-2xl mb-5'>Free</h2>
          
          <div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
            <div className='flex items-center'><TiTick className='text-red-200'/> content1</div>
          </div>

          <button className='w-full py-1 my-3 text-red-400 hover:bg-red-400 hover:text-white px-auto rounded-md'>Buy</button>

          <p >Lorem ipsum dolor sit amet consectetur adipisicing </p>
        </div>
       
      </div>
    </div>
  )
}

export default App
