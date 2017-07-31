const React = require('react');
const Link = require('react-router-dom').Link;
const Works = require('./Works');

const skills = ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'React'];

const SkillsItem = (props) => {
  return(
    <li className="promo__list-item">{props.item}</li>
  );  
}
const SkillsList = (props) => {
  return(
    <ul className="promo__list">    
      {props.data.map(function(item, index) {
        return(
          <SkillsItem item={item} key={index} />
        );  
      })}
    </ul>
  );
}

const Home = () => {
  return(
    <div className="wrapper-promo">
      <header className="promo container">
        <h1 className="promo__title">Larysa Goroshanska. Front-End Developer</h1>
        <SkillsList data={skills} />        
        <Link className="promo__link" to="/works">
          view works
        </Link>
      </header>
    </div>
  );
}

module.exports = Home;