import React from 'react';
import { Link } from 'react-router';
import Works from './Works';

function SkillsItem(props) {
  return(
    <li className="promo__list-item">{props.item}</li>
  );  
}

function SkillsList() {
  const skills = ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'jQuery', 'React'];
  
  return(
    <ul className="promo__list">    
      {skills.map(function(item, index) {
        return(
          <SkillsItem item={item} key={index} />
        );  
      })}
    </ul>
  );
}

function Home() {
  return(
    <div className="wrapper-promo">
      <header className="promo container">
        <h1 className="promo__title">Larysa Goroshanska. Front-End Developer</h1>
        <SkillsList />        
        <Link className="promo__link" to="/works">
          view works
        </Link>
      </header>
    </div>
  );
}

export default Home;