import { useState } from "react"


const Game = () => {
  const [Chose, setChose] = useState(true);

  return (
    <>
      <div className="flex flex-col">
        {
          Chose ? (
            <div className="mt-40 relative w-full relative">
              <img className="fixed left[10%]" src="../../public/images/bg-pentagon.svg" alt="pentagon" />
              <div>
                <button></button>
              </div>
              <div>
                <button></button>
                <button></button>
              </div>
              <div>
                <button></button>
              </div>
            </div>
          ) : (
            <div>Resultado</div>
            )
        } 
      </div>
    </>
  )
}

export default Game