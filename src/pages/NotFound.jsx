import React from 'react'
import '../App.css'

export default function NotFound() {
  return (
    <div>
      <div className="d-flex flex-wrap container">
        <div className="dedom" >
          <img className='w-100 h-100' src="/Qiz.png" alt="" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="">
            <h3 className='text-center text-white'>Awww...Don't Cry.</h3>
            <div className="d-flex justify-content-center align-items-center">
              <button className='d-flex justify-content-center align-items-center fw-bold text-white' style={{ background: "none", border: "3px solid blue" }}>It's just a 404 Error !</button>
            </div>
            <h6 className='text-center' style={{ color: "#ccc" }}>What you're looking for may have been misplaced <br />
              in Long Term Memory.</h6>
          </div>
        </div>
      </div>
    </div>
  )
}
