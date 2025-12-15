
const score: number = 12;

const Header = () => {
  return (
    <>
        <header className="z-10 w-[50%] flex border-solid rounded-xl border-(--Gray400) border-2 mx-auto mt-20 p-10 justify-between items-center">
            <div className="flex flex-col justify-center">
                <span className="font-bold text-white py-0 my-0 leading-none">ROCK</span> 
                <span className="font-bold text-white py-0 my-0 leading-none">PAPER</span>
                <span className="font-bold text-white py-0 my-0 leading-none">SCISSORS</span>
                <span className="font-bold text-white py-0 my-0 leading-none">LIZZARD</span>
                <span className="font-bold text-white py-0 my-0 leading-none">SPOCK</span>
            </div>
            <div className="flex flex-col bg-white rounded w-[6rem] h-[5rem] justify-center items-center">
                <span className="text-(--Blue700) tracking-widest text-xs font-bold">SCORE</span>
                <span className="text-5xl text-(--Gray600) font-bold tracking-tighter">{score}</span>
            </div>
        </header>
    </>
  )
}

export default Header