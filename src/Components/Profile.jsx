import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <section className="home" id="home">
    <div className="max-width">
      <div className="home-content">
        <div className="text-1"></div>
        <div className="text-2">Kapil Sharma</div>
        <div className="text-3">
          He is a Passionate <span className="typing"></span> from India
        </div>
        <br />
        <div className="row">
          {/* <Link className="marginset" href="https://github.com/ayushtripathi23"> */}
          <Link className="marginset" href="https://github.com/kapilsharma27">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-256.png"
              width="40px"
              height="40px"/></Link
          ><span> </span>
          <Link
            className="marginset"
            href="https://www.linkedin.com/in/ayush-tripathi-a93726122/"
            ><img
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-256.png"
              width="40px"
              height="40px"/></Link
          ><span> </span>
          <Link
            className="marginset"
            href="https://www.facebook.com/ayush.tripathi.581/"
            ><img
              src="https://cdn3.iconfinder.com/data/icons/social-network-icon/112/facebook-256.png"
              width="40px"
              height="40px"/></Link
          ><span> </span>
        </div>
        <br />
        <Link href="mailto:kapils23498@gmail.com" className="hire about-img"
          >Hire him</Link
        >
      </div>
    </div>
  </section>
  )
}

export default Profile