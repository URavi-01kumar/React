import React, { Children } from 'react'

function Container({Children}) {  
    //conatiner accept karta hai as a childern but children is only name but aap jo chahe vo rakh sakte hai 
    // container is box like, use as styling properties
    // agar kuch bhi change karna hoga height wedth me  to ham direct container file me aakar change kar dunga


  return  <div className='w-full max-w-7xl mx-auto px-4'>{Children}</div>;
  
}

export default Container