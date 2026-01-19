import React, { useEffect } from 'react';

function RenderLoader() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="flex justify-center h-[100vh]  w-full items-center">
        <div className="p-4 min-h-[100px]  lg:min-h-[120px] w-[100px] 	lg:w-[120px] rounded-full">
          <img
            src="favicon-48x48.png"
            fetchpriority="high"
            className="animate-pulse  mx-auto"
          />
        </div>
      </div>
    );
}

export default RenderLoader;