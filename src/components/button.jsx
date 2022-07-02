import React from 'react';

const Button = ({children}) => {
    return ( 
        <button className='bg-red text-white font-title font-bold py-2 px-7 rounded-md border-bordo border hover:bg-bordo'>{children}</button>
     );
}
 
export default Button;