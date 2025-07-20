import React from 'react'

const Store = () => {
  return (
    <>
        <div>
            <h1 className='text-center mt-3 '>Store Component</h1>
            <div className='d-flex justify-content-center align-items-center'>
            <button className='btn btn-primary mx-2'>-</button>
            Add to Cart
            <button className='btn btn-primary mx-2'>+</button>
            </div>
        </div>
    </>
  )
}

export default Store