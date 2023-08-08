import React from 'react'
import bootstrapMin from 'bootstrap/dist/js/bootstrap.min'

export default function Cont() {
  return (
    <div>
        <div className="conatiner"style={{backgroundColor:"#508bfc" }} >
              <div className="row">
                <div className="col">
                  <div className="container"style={{backgroundColor:"white" , width:"700px", height:"500px", margin:"50px 0px 30px 450px"}} >
                   <h2 className="text-center" >Contact Me</h2>
                   <div className="container mt-4">
                    <form action="">
                      <div className="container" >
                        <div className="row">
                          <div className="col">
                            <label for="">Name</label>
                      <input type="text" className="form-control" placeholder="Your Name" style={{outline:"0", borderWidth:"0 0 2px", width:"200px"}}/>
                          </div>
                          <div className="col">
                            <label for="">Email id</label>
                      <input type="email" className="form-control" placeholder="Your eamil " style={{outline:"0",borderWidth:"0 0 2px", width:"200px"}} required/>
                          </div>
                        </div>
                      </div>
                       <div className="container">
                        <div className="row " style={{marginTop:"40px"}}>
                          <div className="col">
                            <label for="">Phone</label>
                      <input type="number" className="form-control" placeholder="Your Name" style={{outline:"0",borderWidth:"0 0 2px", width:"200px"}} />
                          </div>
                          <div className="col">
                            <label for="">Company</label>
                      <input type="text" className="form-control" placeholder="Your eamil " style={{outline:"0",borderWidth:"0 0 2px", width:"200px"}} required />
                          </div>
                        </div>
                       </div>
                    <div className="container">
                      <div className="row" style={{marginTop:"40px"}}>
                        <label for="">Message</label>
                        <div className="col">
                          <textarea name="" id="" cols="40" rows="5" placeholder="Write your message" class="form-control" style={{outline:"0", borderWidth:"0 0 2px" }}></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="container" style={{marginTop:"40px"}}>
                        <button type="submit" className="bg-primary" style={{outline:"0",borderWidth:"0 0 2px", width:"200px"}}>Send Message</button>
                     </div>
                     </form>
                   </div>
                  </div>
                </div>
                </div>
               <div className="row" >
                <div className="col">
                  <div className="conatiner" style={{backgroundColor:"rgb(3, 197, 250)", width:"700px", marginTop:"-30px" ,marginLeft:"450px" }} >
                <h5 className="text-center">Contact Information</h5>
                      <div className="conatiner mt-3 p">
                        <div className="row">
                          <div className="col"><div className="row "><img src="../image/pin.png" alt="#" style={{width:"50px", marginLeft:"40px"}}/></div>
                        <div className="row"><p>Ghaziabad , Uttar Pradesh</p></div></div>
                        <div className="col"><div className="row "><img src="../image/phone-call.png" alt="#" style={{width:"50px", marginLeft:"40px"}} /></div>
                        <div className="row"><p>+91 9310169151</p></div></div>
                        <div className="col"><div className="row "><img src="../image/phone-call.png" alt="#" style={{width:"50px", marginLeft:"40px"}}/></div>
                        <div className="row"><p><a href="mailto: sahilthakur14691@gmail.com">sahilthakur14691@gmail.com</a></p></div></div>
                        </div>
                      </div>
                  </div>
                </div>
               </div>
        </div>
    </div>
  )
}
