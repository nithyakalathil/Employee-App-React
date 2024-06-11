import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Addemployee = () => {

const [data,changedata]=useState(
    {
        "name":"",
    "addr":"",
    "age":"",
   "dept":""
    }
)

const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8081/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Success") 
                {
                    alert("successfully added")
                
            } else {
                alert("error")
                
            }
        }
    ).catch(
        (error)=>(alert(error.message))
    )
}

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Name</label>
<input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Address</label>
    <input type="text" className="form-control" name='addr' value={data.addr} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Age</label>
    <input type="text" className="form-control" name='age' value={data.age} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <label htmlFor="" className="form-label">Department</label>
    <input type="text" className="form-control" name='dept' value={data.dept} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={readValue}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default Addemployee