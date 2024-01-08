import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p></p>
            <div className="icons">
              <div className="row">
                {/* ------ <i className="fas fa-user"></i> ------ */}
                <lord-icon
                  src="https://cdn.lordicon.com/dxjqoygy.json"
                  trigger="loop"
                  colors="primary:#e8308c,secondary:#66eece"
                  stroke="100"
                  style={{width:"48px",height:"48px"}}
                >
                </lord-icon>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Kapil Sharma</div>
                </div>
              </div>
              <div className="row">
                <lord-icon
                  src="https://cdn.lordicon.com/zzcjjxew.json"
                  trigger="loop"
                  colors="primary:#e8308c,secondary:#30e8bd"
                  style={{width:"48px",height:"48px"}}
                >
                </lord-icon>
                {/* ------ <i className="fas fa-map-marker-alt"></i> ------ */}
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Ghaziabd, Uttar Pradesh, India</div>
                </div>
              </div>
              <div className="row">
                <lord-icon
                  src="https://cdn.lordicon.com/rhvddzym.json"
                  trigger="loop"
                  colors="primary:#e8308c,secondary:#08a88a"
                  style={{width:"48px",height:"48px"}}
                >
                </lord-icon>
                {/* ------  <i className="fas fa-envelope"></i> ------ */}
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">kapils23498@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form action="https://formspree.io/f/xrgrnrzj" method="POST">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" name="Name" required />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email_id"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  cols="50"
                  rows="20"
                  placeholder="Message..."
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact