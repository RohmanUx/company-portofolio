const navbar:React.FC =()=>{
    return(
        <div> 
        <div>
        <div className="h-[700px] flex flex-col text-center items-center content-center justify-center border-t border-black bg-gray-50">
          <h1 className="2xl:text-center md:text-[26px]  lg:text-[34px] pt-20">
            Ready to start a new
            <br />
            Experience
          </h1>
          <p className="md:mx-4 text-center my-4">
            the most trusted place for people and businesses to track all of
            your account balances, transactions, etc.
          </p>
          <button className="bg-[#535c47] hover:bg-black hover:text-white py-2 px-4 text-white rounded-full">
            Contact | ✉️
          </button>
          <p className="text-[86px] text-[#000000bd] 2xl:text-[182px] ">
            {" "}
            blue<span className=" text-orange-700">Money#</span> 
          </p>
        </div>
      </div>
      <div className="py-2 bg-gray-200 flex w-full justify-around flex-col">
                  <br />
          <ul className="flex justify-between px-48">
        <p>© 2024 Rahman, All rights reserved </p>
            <div className="flex flex-nowrap"> 
            <li className="px-6"> Terms & Conditions </li>
            <li> Privacy Policy </li> </div> 
          </ul>
              </div>
  </div>
    )
} 
  export default navbar 