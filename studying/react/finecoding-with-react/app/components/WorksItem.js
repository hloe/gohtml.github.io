const React = require('react');
const PropTypes = require('prop-types');
const Link = require('react-router-dom').Link;

const WorksItem = (props) => {
  return(
    <div className="works__content-item">
      <Link 
        className="card-link" 
        target="_blank" 
        to={props.item.link}
      >
        <img 
          className="card__img" 
          data-rjs="2" 
          src={props.item.image}
          alt={props.item.title}
        />
        <div className="card__shadow">
          <h3 className="card__title">{props.item.title}</h3>
          <p className="card__text">{props.item.description}</p>
        </div>
      </Link>
    </div>
  );
}

WorksItem.propTypes = {
  item: PropTypes.object.isRequired
}


module.exports = WorksItem;