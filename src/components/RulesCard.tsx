
const RulesCard = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center h-(--rules-card-height) w-(--rules-card-width) bg-white rounded-lg my-(--margin-height-rules-card) mx-auto">
        <span className="flex justify-between items-center w-full px-20 py-15">
          <h2 className="font-bold text-2xl text-(--Navy900)">RULES</h2>
          <span className="hover:cursor-pointer hover:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path  fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25" />
            </svg>
          </span>
        </span>
      </div>
    </>
  )
}

export default RulesCard