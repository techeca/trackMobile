import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className=' bg-peach-0 rounded-3xl px-3 py-3 text-h2 h-12 w-80 font-semibold border-[1px] border-b-0 border-nig-0/50 text-nig-0 drop-shadow-text-shadow'>
        <span className='w-full'>
          Get started
        </span >
      </button>  {/*bg-peach-0*/}
      <div className="bg-radial-[ellipse_at_bottom] from-teal-400/75 to-transparent">
        ssssss
      </div>
    </>
  )
}

export default App
