//import {useEffect,useState} from 'react'
import Summary from './Summary.jsx'
import ScoreSection from './ScoreSection.jsx'
function App() {
//  const [data,setData] = useState({})
  
   
  return (
   <main className="flex  flex-col justify-center gap-5 w-[90%] m-auto md:flex-row py-5 max-w-[1080px] ">  <ScoreSection/>
      <Summary/>  
    </main>
  )
}

export default App
