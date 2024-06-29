

const Background = () => {

  return (
    <>
      {/* -------Mobile screen background----- */}
      <div className='bg-primary-desaturatedDarkCyan md:hidden'>
        <img src="/assets/bg-header-mobile.svg" alt="background image" className="w-full" draggable="false"/>
      </div>

      {/* -------Mobile screen background----- */}
      <div className='bg-primary-desaturatedDarkCyan hidden md:block'>
        <img src="/assets/bg-header-desktop.svg" alt="background image" className="w-full" draggable="false"/>
      </div>

    </>
  )
}

export default Background