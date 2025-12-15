import React, { useState } from 'react';
import RulesCard from './components/RulesCard';
import Header from './components/Header';
import Game from './components/Game';


const PiedraPapelTijera = () => {
  const [RulesCardIsOpen, setRulesCardIsOpen] = useState<boolean>(false);

  return (
    <>
      {RulesCardIsOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setRulesCardIsOpen(false)} // Opcional: cerrar al hacer click fuera
        />
      )}
      <div className={'flex flex-col items-center min-h-screen min-w-screen'}>
        <Header />
        <Game />
        {RulesCardIsOpen ? <RulesCard setRulesCardIsOpen={setRulesCardIsOpen} /> : null}
        <div className="fixed bottom-10 right-10">
          <button onClick={() => setRulesCardIsOpen(true)} className="right-full px-28 py-2 bg-transparent text-white font-bold rounded-lg border-(--Gray400) border-2 hover:bg-(--Gray400) hover:text-(--Blue900) hover:cursor-pointer transition">
            RULES
          </button>
        </div>
      </div>
    </>
  )
}

export default PiedraPapelTijera