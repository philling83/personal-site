import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'skills', name: 'Skills', icon: 'fa-desktop' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Philip</strong>
              <br />
              Full Stack Software Developer
            </h2>
            <p>I have made a few things. Check them out!</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>
          <div className="row_portfolio">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src="https://live.staticflickr.com/65535/50946843693_f1f1a1643d_z.jpg" alt="" />
                </a>
                <header>
                  <h3>Meadium</h3>
                  <h5>
                    Meadium is an online publishing platform modeled on Medium.com, where users can come together
                    and talk about all things alcoholic. They can create accounts, post their own stories, and
                    comment/rate stories created by fellow community members.
                  </h5>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src="https://live.staticflickr.com/65535/50947385611_497f987e33_b.jpg" alt="openbook" />
                </a>
                <header>
                  <h3>OpenBook</h3>
                  <h5>
                    OpenBook is a virtual learning platform modeled off of Quizlet and Nearpod. As a teacher, you
                    can log in and create classrooms with multiple students, assigning them decks of flashcards
                    that you can create or obtain from our library. These flashcards will give immediate feedback
                    to students upon completion. As a student, you can join a classroom and see all the assignments
                    that you have been given and complete them before the deadline.
                  </h5>
                </header>
              </article>
            </div>
            {/* <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Magna Nullam</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Natoque Vitae</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Dolor Penatibus</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div> */}
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <p>
            I love to learn new innovative ways to tackle a problem and finding efficient solutions to said problems.
            Software development gives me an outlet for that. The constant testing and refactoring of code culminating
            in a functional product is what I enjoy most about software development. I have great experience with
            JavaScript, Python, React, HTML/CSS, and Node.js.
          </p>
          <p>
            During my free time you can catch me out for a run or inside playing video games with my friends
          </p>
        </div>
      </section>

      <section id="skills" className="three">
        <div className="container">
          <header>
            <h2>Skills</h2>
          </header>

          <div className="skills_container">
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-python-plain-wordmark colored"></i>
            <i class="devicon-react-original-wordmark colored"></i>
            <i class="devicon-redux-original colored"></i>
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-express-original-wordmark colored"></i>
            <i class="devicon-flask-original-wordmark colored"></i>
            <i class="devicon-postgresql-plain-wordmark colored"></i>
            <i class="devicon-nodejs-plain colored"></i>
            <i class="devicon-git-plain-wordmark colored"></i>
            <i class="devicon-github-original-wordmark colored"></i>
            <i class="devicon-docker-plain colored"></i>
          </div>

        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>
          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
