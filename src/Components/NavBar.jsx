import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [Profile, setProfile] = useState({});
  useEffect(() => {
    const save = async () => {
      const showDetail = await localStorage.getItem("user");
      setProfile(JSON.parse(showDetail));
    };
    save();
  }, []); return (
    <div className='bg-[#2A2F5A] p-5 flex justify-between w-ful shadow-[0px_0px_3px_#000]'>
      <div className=''>
        <h1 className='text-white font-bold text-xl'>Dashboard</h1>
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{Profile.name}</p>
        <p className="text-xs text-gray-400">{Profile.email}</p>
      </div>

    </div>
  )
}

export default Navbar
