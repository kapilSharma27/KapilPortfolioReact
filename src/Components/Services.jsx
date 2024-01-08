import React from 'react'
import ExpandingCards from './ExpandingCards';

const Services = () => {
    const cards = [
        {
          id: 1,
          title: 'in the clouds',
          author: 'Veronica Wu',
          image: 'https://images.unsplash.com/photo-1688499693696-9c754d94a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80'
        },
         {
          id: 2,
          title: 'lost at sea',
          author: 'Andrik Torres',
          image: 'https://images.unsplash.com/photo-1688433416701-13d3e04bb7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80'
        },
        {
          id: 3,
          title: 'sweet nectar',
          author: 'Eugene Golovesov',
          image: 'https://images.unsplash.com/photo-1688627414570-1a8d2a22ca9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80'
        },
        {
          id: 4,
          title: 'solitude',
          author: 'NEOM',
          image: 'https://images.unsplash.com/photo-1682687980961-78fa83781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
        },
        {
          id: 5,
          title: 'flow',
          author: 'Enyioma Adu',
          image: 'https://images.unsplash.com/photo-1688613532714-c0bd8b6b2f3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80'
        },
      ]
  return (
    <>
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">Services</h2>
        <div className="serv-content">
          <div className="card about-img">
            <div className="box">
              <lord-icon
                src="https://cdn.lordicon.com/nobciafz.json"
                trigger="loop"
                delay="2000"
                colors="primary:#ed143d,secondary:#ffffff"
                style={{width:"200px",height:"200px"}}
              >
              </lord-icon>
              <div className="text">Hackathons</div>
              <p>
                Helping people to get practical experience and knowledge and
                helping to enhance there confidence by mentoring, judging,
                Organising & even helping others to organise one.
              </p>
            </div>
          </div>
          <div className="card about-img">
            <div className="box">
              <lord-icon
                src="https://cdn.lordicon.com/puvaffet.json"
                trigger="loop"
                delay="2000"
                colors="primary:#ed143d,secondary:#ffffff"
                style={{width:"200px",height:"200px"}}
              >
              </lord-icon>
              <div className="text">Documentation & Blogs</div>
              <p>
                Writing accessible technical documentation for helping people to
                learn & get practical experience in a way so that everyone even
                enjoys it.
              </p>
            </div>
          </div>
          <div className="card about-img">
            <div className="box">
              <lord-icon
                src="https://cdn.lordicon.com/dtgezzsi.json"
                trigger="loop"
                delay="2000"
                colors="primary:#ed143d,secondary:#ffffff"
                style={{width:"200px",height:"200px"}}
              >
              </lord-icon>
              <div className="text">Front End Web Dev + Programming</div>
              <p>
                Using best practices to build good web designs and creating
                programms for solving real world problems, resulting in less
                bugs and user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ------ 4th ------ */}
    <section className="services" id="services">
      <div className="max-width">
        <div className="serv-content">
          <div className="card about-img">
            <div className="box">
              <lord-icon
                src="https://cdn.lordicon.com/soseozvi.json"
                trigger="loop"
                delay="2000"
                colors="primary:#ed143d,secondary:#ffffff"
                style={{width:"200px",height:"200px"}}
              >
              </lord-icon>
              <div className="text">Events/Live Streams/Video</div>
              <p>
                Creating video content for sharing my knowledge in the community
                and engaging live streams to highly produced videos. Even
                organises various live events
              </p>
            </div>
          </div>
          <div className="card about-img">
            <div className="box">
              <lord-icon
                src="https://cdn.lordicon.com/qhgmphtg.json"
                trigger="loop"
                delay="2000"
                colors="primary:#ed143d,secondary:#ffffff"
                style={{width:"200px",height:"200px"}}
              >
              </lord-icon>
              <div className="text">Communities</div>
              <p>
                Helping people through various communities by giving talks,
                mentoring, volunteering and even helping others to organise one
              </p>
            </div>
          </div>
          <div className="card about-img">
            <div className="box">
              <lord-icon
                src="https://cdn.lordicon.com/ybfcwnqv.json"
                trigger="loop"
                delay="2000"
                colors="primary:#ed143d,secondary:#ffffff"
                style={{width:"200px",height:"200px"}}
              >
              </lord-icon>
              <div className="text">Open Source (Git + Github)</div>
              <p>
                Contributing in opensource by making my projects, documentatins,
                etc. Open-Source and even contributing to various companies,
                communities,etc. to make their successful projects - Open
                Source.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="services" id="services">
        <ExpandingCards cards={cards}/>
    </section>
    </>
  )
}

export default Services