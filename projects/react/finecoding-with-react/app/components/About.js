const React = require('react');
const Link = require('react-router-dom').Link;

const About = () => {
  return(
    <section className="about section container">
      <h2 className="section__title">About me</h2>
      <div className="section__content">
        <p>I specialize in Front-End Developement. I use in my work HTML5, CSS3, SCSS, JavaScript, jQuery and React; concepts Mobile First and Progressive Enhancement.</p>
        <p>I am semifinalist of IT competitions, such as DEV CHALLENGE 11 and IT Challenges. My knowledge is confirmed by passed tests on <Link 
          className="about__link" 
          to="https://www.upwork.com/o/profiles/users/_~0115a1a0cb29dcc236/"
          target="_blank"
        >
          Upwork     
        </Link>.
        </p>
      </div>
    </section>

  );
}

module.exports = About;