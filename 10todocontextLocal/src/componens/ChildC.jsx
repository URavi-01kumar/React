
import React, { useContext } from 'react'
import { data ,data1} from '../App'





function ChildC() {
    const name1= useContext(data);
     const gender1= useContext(data1);

  return (

    // <>
    // <data.Consumer>
    //     {
    //         (name)=>{
    //             return(
    //                 <>
    //                 <data1.Consumer>
    //                 {
    //                 (gender)=>{
    //                     return (
    //                         <h2>my name is {name} and gender is {gender}</h2>
    //                     )
    //                 }
    //             }
    //                 </data1.Consumer>
                    
    //                 </>

    //             )
    //         }
    //     }
    // </data.Consumer>

    // </>

    <>
    
  <h1>Hii my name is {name1} and gender is {gender1}</h1>
    
    </>
  )

}

export default ChildC