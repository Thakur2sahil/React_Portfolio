import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bootstrapMin from 'bootstrap/dist/js/bootstrap.min'
import React from 'react'

export default function Aboutme() {
  return (
        <>
            <div className='section'>
        <div className="" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="./image/pic.jpg"  alt="..." style={{width:"300px", marginLeft:"50px"}} />
          </div>
          <div className="col-md-8">
              <div className="conatiner mt-3">
                <h1  style={{color:"rgb(10, 1, 1)"}}>Hi, Everyone myself <b>Sahil Thakur !</b> </h1>
              <h3>Web Delveloper</h3>
              <h4 style={{color:"rgb(10, 1, 1)"}}>This is my website I hope all of you like it.</h4>
              <h5 > <b>The website is made with help of HTML,CSS and a highly used of bootstrap.</b></h5>
              <h5 style={{color:"rgb(10, 1, 1)"}}><i>Welcome to our website - a digital masterpiece meticulously crafted using HTML, CSS, and the powerful Bootstrap framework!</i></h5> 
              </div>
                  <div className="conatiner mt-3">
                    <h5><i>We take immense pride in presenting an online platform that seamlessly blends artistry with cutting-edge technology, providing visitors with an unforgettable user experience.</i></h5>
                  
                  <h6 ><b><i>Intuitive Layout: The intuitive layout of the website ensures that visitors can find the information they need quickly and easily, enhancing overall user satisfaction.</i></b></h6>
                  <p  > <b><i>Accessibility: The website adheres to accessibility standards, making it inclusive and usable for all users, including those with disabilities.</i></b></p>
                  </div>
          </div>
        </div>
      </div>
      
    


     <footer className="bg-dark">
        <div className="text-center text-white p-3" >
     
          <a className="text-white" href="#"><b>Sahil Thakur</b></a>
        </div>
      
      </footer>
      <script src="https://kit.fontawesome.com/62fe7307a7.js" crossorigin="anonymous"></script>
    </div>
        </>
  )
}
