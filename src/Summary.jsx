import light from './assets/images/icon-reaction.svg'
import memory from './assets/images/icon-memory.svg'
import verbal from './assets/images/icon-verbal.svg'
import visual from './assets/images/icon-visual.svg'
import data from './data.json'

const Li = ({score,cat,key,icon})=>{

              return  <li key={key} className=" my-5 rounded-2xl text-xl font-medium flex justify-between py-5 px-6 "><span className="flex"><img src={icon} className="mx-2"/>  <p> {cat}</p></span> <span> <p className="text-black">{score}/ <span className="text-gray-500/50">100</span></p></span> </li>
}
const Summary = () => {
  return (
    <article className="w-[100] md:w-[50%] flex-1 py-5 ">
        <h2 className="text-2xl font-bold text-gray-900">Summary</h2>
        <ul>
          <Li score={data[0].score} key={data[0].score} cat={data[0].category} icon={light} / >
 <Li score={data[1].score} key={data[1].score} cat={data[1].category} icon={memory} / >
 <Li score={data[2].score} key={data[2].score} cat={data[2].category} icon={verbal} / >
 <Li score={data[3].score} key={data[3].score} cat={data[3].category} icon={visual} / >
                 </ul>
                 <button className="py-3 px-5 w-[90%] bg-gray-800 text-white font-bold rounded-3xl m-auto block hover:bg-gray-700 transition duration-200 ease-in-out">
                 Continue
                 </button>
      </article>
  )
}

export default Summary
