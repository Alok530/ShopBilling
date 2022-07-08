import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate();
    return (
        <>
            <div className="errorpage" style={{'minHeight':'100vh','display':'flex','justifyContent':'center','alignItems':'center'}}>
                <div className="error text-center">
                    <h3>404 Error - Page Not Found</h3>
                    <button onClick={()=>{navigate('/')}} className='py-1 px-2'>Go to Home Page</button>
                </div>
            </div>
        </>
    )
}

export default Error