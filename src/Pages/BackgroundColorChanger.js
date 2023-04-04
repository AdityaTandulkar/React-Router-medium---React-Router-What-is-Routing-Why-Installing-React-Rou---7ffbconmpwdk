import React from 'react';


export const BackgroundColorChanger = () =>{
    let {colorname} = useParams();
    console.log(colorname);
    
    return(
       <main style={{ height: "100vh", backgroundColor: `${colorname}` }}>
       Background Color Change
       </main>
    )
}