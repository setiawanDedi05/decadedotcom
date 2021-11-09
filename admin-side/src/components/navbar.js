import React from "react";

class Navbar extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
        <>
          <div className="h-full-screen w-48 px-4 border-r pt-10 bg-blue-500">
          <div className="flex flex-col justify-around text-white">
              <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-black transition duration-200 ease-in">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
                <button className="hover:text-black transition duration-200 ease-linear">Dashboard</button>
              </h3>
              <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-black transition duration-200 ease-in">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
                <button className="hover:text-black transition duration-200 ease-linear">News</button>
              </h3>
              <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-black transition duration-200 ease-in">
              <svg 
                xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
                <button className="hover:text-black transition duration-200 ease-linear">Category</button>
              </h3>
              <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-black transition duration-200 ease-in">
              <svg 
                xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
                <button className="hover:text-black transition duration-200 ease-linear">User</button>
              </h3>
              <h3 className="pl-1 text-sm flex items-center py-2 mb-2 hover:bg-gray-100 hover:text-black transition duration-200 ease-in">
              <svg 
                xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
                <button className="hover:text-black transition duration-200 ease-linear">Logout</button>
              </h3>
          </div>
            </div>
        </>
        )
    }
}

export default Navbar