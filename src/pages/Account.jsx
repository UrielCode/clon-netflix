import SaveShows from "../components/SaveShows"

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img className="w-full h-[330px] object-cover" src="../../public/fondo.jpg" alt="" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px] ">
          <div className="absolute top-[20%] p-4 md:p-8 ">
            <h1 className="text-3xl md:text-5xl font-bold">Mis favoritos</h1>
          </div>
        </div>
      </div>
      <SaveShows/>
    </>
  )
}

export default Account