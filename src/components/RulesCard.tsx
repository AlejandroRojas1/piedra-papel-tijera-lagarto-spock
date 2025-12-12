
const RulesCard = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-(--rules-card-height) w-(--rules-card-width) bg-white rounded-lg my-(--margin-height-rules-card) mx-auto">
        <span className="flex justify-between items-center w-full px-20 py-15">
          <h2 className="font-bold text-2xl text-(--Navy900)">RULES</h2>
          <span className="">
            <img src="../../public/images/icon-close.svg" alt="close" />
          </span>
        </span>
      </div>
    </>
  )
}

export default RulesCard