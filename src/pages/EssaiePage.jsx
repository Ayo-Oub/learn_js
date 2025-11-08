import React from 'react'

export default function EssaiePage() {
     const nombres = [1, 2, 3, 4];

 

     return (
          <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection:'column' }}>
            
               
               <p>hello</p>
                    {nombres.map((n, index) => (
                         <h2 key={index}>{n*3}</h2>
                    ))}
               
          </div>
     )
}
