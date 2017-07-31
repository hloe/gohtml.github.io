const React = require('react');
const Link = require('react-router-dom').Link;
const ReactSVG = require('react-svg');

const url = 'http://finecoding.net/i/sprite.svg';

const icons = [
  {
    id: 'facebook',
    link: 'https://www.facebook.com/goroshanska'
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/larysa-goroshanska/'
  },
  {
    id: 'github',
    link: 'https://github.com/hloe'
  },
  {
    id: 'upwork',
    link: 'https://www.upwork.com/freelancers/~0115a1a0cb29dcc236'
  }
];

const Svg = (props) => {
  const useTag = './i/sprite.svg#' + props.id;
  return(
    <svg className="icon__svg">
    <use xlinkHref={useTag}></use>
  </svg>
  );
}

const IconItem = (props) => {
  return(
    <li className="icon__item">
      <Link 
        className="icon__link icon__link_contact" 
        to={props.item.link}
        target="_blank"
      >
        <Svg id={props.item.id} />       
      </Link>    
    </li>
  );  
}

const IconList = () => {
  return(
    <ul className="icon__list">
      {icons.map(function(item, index) {
        return(
          <IconItem item={item} key={index} />
        );
    })}
    </ul>
  );
}

module.exports = IconList;