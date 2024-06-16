import React from 'react'
import Typical from 'react-typical'
import "./profile.css"
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                  <div className='colz-icon'>
                    <a href='https://www.linkedin.com/in/battula-anilkumar-8a745119a/' target='blank'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className='profile-details-name'>
                  <span className='primary-text'>
                    {""}
                    Hello, I'm<span className='highlighted-text'> Battula Anil Kumar</span> 
                  </span>
                </div>
                <div className='profile-details-role'>
                  <span className='primary-text'>
                    <h1>
                      <Typical
                        loop={Infinity}
                        steps={[
                          "MERN Stock Developer",
                          3000,
                          "Python Developer",
                          3000,
                          "Blockchain Developer",
                          3000,
                          "DSA In Python",
                          3000,
                          "Full Stock Developer",
                          3000,
                          "React Dev",
                          3000,
                          "Web Scraping Puppeteer",
                          3000,

                        ]}
                      />
                    </h1>
                    <span className='profile-role-description'>
                      Knack of building applications with front and back operations
                      </span> 
                  </span>
                </div>
                <div className='profile-options'>
                        <a href="#contact">
                          <button className='btn button primary-btn'>
                            {""}
                            Hire Me
                          </button >
                        </a>
                        
                        <a href='Anilresume.pdf' download={"Anil Anilresume.pdf"}>
                        <button className='btn button highlighted-btn'>
                          Get Resume
                        </button>
                        </a>       
                </div>
            </div>
            <div className='profile-picture'>
              <div className='profile-pucture-background'>

              </div>
            </div>

        </div>
    </div>
  )
}
