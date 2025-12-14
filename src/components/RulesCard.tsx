
interface RulesCardProps {
  setRulesCardIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
// Interface que establece el tipo necesario para aceptar la función del hook setState especificamente (por eso se llama setStateAction) y lo que va entre <> es el tipo de dato que va a manejar la función. 
const RulesCard: React.FC<RulesCardProps> = ({setRulesCardIsOpen}) => {
  return (
    <>
      <div className="z-[999] flex flex-col items-center h-(--rules-card-height) w-(--rules-card-width) bg-white rounded-lg my-(--margin-height-rules-card) mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg">
        <span className="flex justify-between items-center w-full px-20 py-15">
          <h2 className="font-bold text-2xl text-(--Navy900)">RULES</h2>
          <button onClick={()=>{setRulesCardIsOpen(false)}} className="hover:cursor-pointer hover:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path  fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25" />
            </svg>
          </button>
        </span>
        <div className="w-full flex justify-center items-center">
          <img src="/images/image-rules-bonus.svg" alt="rules" className="w-[80%]" />
        </div>
      </div>
    </>
  )
}

export default RulesCard