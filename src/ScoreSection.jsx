
const ScoreSection = () => {
  return (
   
  <article className="h-[500px] w-[100%] md:w-[40%] ">
        <section className="w-[100%] bg-gradient-to-b from-indigo-600 to-blue-700 h-[100%] text-center py-10 rounded-3xl">

          <h1 className="text-white/70 text-xl font-bold">
            Your Results
          </h1>

          <section style={{alignItems:'center'}} className="w-[200px] h-[200px] m-auto  rounded-[100%] bg-gradient-to-b from-indigo-800 to-blue700/40 my-8 flex   justify-center">

            <h2 className="text-[64px] align-middle font-bold block text-white">
              76
              <span className="block text-xl text-white/40 ">
                of 100
              </span>
            </h2>


          </section>
          <section>
            <h2 className="text-3xl font-bold text-white py-1">Great</h2>
            <p className="text-sm text-white/70 font-semibold w-[80%] m-auto  ">
  You scored higher than 65% of the people who have taken these tests.</p>
          </section>
        </section>
      </article>

  )
}

export default ScoreSection
