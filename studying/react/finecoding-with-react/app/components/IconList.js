const React = require('react');
const Link = require('react-router-dom').Link;

const IconItem = (props) => {
  return(
    <li className="icon__item">
      <Link 
        className="icon__link icon__link_contact" 
        to={props.item.link}
        target="_blank"
      >
        {props.item.svg}  
      </Link>    
    </li>
  );  
}

const IconList = () => {
  const icons = [
    {
      name: 'facebook',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 96.124 96.123"><path d="M72.09.02L59.623 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037c-1.083 0-1.96.878-1.96 1.96v15.804c0 1.083.878 1.96 1.96 1.96H36.57v39.876c0 1.083.877 1.96 1.96 1.96h16.352c1.083 0 1.96-.878 1.96-1.96V54.287h14.654c1.083 0 1.96-.877 1.96-1.96l.006-15.803c0-.52-.207-1.018-.574-1.386-.367-.368-.867-.575-1.387-.575H56.843v-9.246c0-4.444 1.06-6.7 6.848-6.7l8.397-.003c1.082 0 1.96-.878 1.96-1.96V1.98c0-1.08-.877-1.958-1.958-1.96z" fill="#001738"/></svg>,
      link: 'https://www.facebook.com/goroshanska'
    },
    {
      name: 'linkedin',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 430.117 430.118"><path d="M398.355 0H31.782C14.23 0 .002 13.793.002 30.817v368.47c0 17.026 14.232 30.83 31.78 30.83h366.573c17.55 0 31.76-13.813 31.76-30.83V30.818c0-17.02-14.21-30.817-31.76-30.817zM130.4 360.038H65.413V165.845H130.4v194.193zM97.913 139.315h-.437c-21.793 0-35.92-14.904-35.92-33.563 0-19.035 14.542-33.535 36.767-33.535 22.227 0 35.9 14.496 36.33 33.535 0 18.663-14.098 33.563-36.74 33.563zM364.66 360.038h-64.967v-103.9c0-26.107-9.413-43.92-32.907-43.92-17.973 0-28.642 12.017-33.327 23.62-1.737 4.144-2.167 9.94-2.167 15.728v108.468H166.34s.85-175.98 0-194.192h64.963v27.53c8.624-13.228 24.035-32.1 58.534-32.1 42.76 0 74.822 27.74 74.822 87.415v111.35zM230.882 193.99c.11-.182.266-.4.42-.614v.614h-.42z" fill="#001738"/></svg>,
      link: 'https://www.linkedin.com/in/larysa-goroshanska/'
    },
    {
      name: 'github',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 438.536 438.536"><g fill="#001738"><path d="M158.173 352.6c-3.05.567-4.38 1.998-4 4.28.38 2.283 2.094 3.046 5.14 2.283 3.048-.76 4.38-2.095 3.996-3.997-.38-2.092-2.092-2.95-5.137-2.567zM141.898 354.885c-3.046 0-4.568 1.04-4.568 3.14 0 2.473 1.62 3.517 4.853 3.137 3.046 0 4.57-1.047 4.57-3.138 0-2.47-1.62-3.522-4.855-3.14zM119.63 354.022c-.76 2.095.477 3.52 3.71 4.284 2.855 1.137 4.664.568 5.424-1.714.572-2.09-.666-3.61-3.71-4.568-2.857-.76-4.664-.102-5.425 1.998z"/><path d="M414.41 24.123C398.326 8.043 378.964 0 356.31 0H82.224C59.577 0 40.208 8.042 24.123 24.123 8.043 40.207 0 59.576 0 82.225v274.088c0 22.65 8.042 42.017 24.123 58.098 16.084 16.085 35.454 24.127 58.102 24.127h63.953c4.184 0 7.327-.144 9.42-.424 2.092-.288 4.184-1.526 6.28-3.717 2.095-2.187 3.14-5.376 3.14-9.562 0-.568-.05-7.046-.145-19.417-.097-12.375-.144-22.176-.144-29.41l-6.568 1.143c-4.187.76-9.47 1.095-15.846 1-6.374-.097-12.99-.76-19.84-2-6.856-1.238-13.23-4.092-19.13-8.56-5.9-4.478-10.086-10.33-12.56-17.56l-2.857-6.57c-1.904-4.374-4.9-9.23-8.993-14.555-4.093-5.332-8.232-8.95-12.42-10.852l-1.998-1.428c-1.332-.95-2.57-2.098-3.712-3.43-1.14-1.334-1.997-2.668-2.568-3.996-.57-1.336-.097-2.43 1.427-3.29 1.524-.855 4.28-1.28 8.28-1.28l5.708.856c3.808.76 8.516 3.042 14.134 6.85 5.613 3.807 10.228 8.755 13.845 14.844 4.38 7.806 9.657 13.75 15.846 17.843 6.185 4.097 12.42 6.143 18.7 6.143s11.704-.476 16.274-1.424c4.565-.954 8.848-2.385 12.847-4.288 1.714-12.75 6.378-22.56 13.99-29.41-10.85-1.143-20.603-2.854-29.266-5.14-8.658-2.286-17.605-5.995-26.835-11.136-9.235-5.14-16.895-11.512-22.986-19.13-6.09-7.618-11.088-17.61-14.987-29.978-3.9-12.375-5.852-26.652-5.852-42.83 0-23.028 7.52-42.636 22.557-58.813-7.044-17.32-6.38-36.732 1.997-58.242 5.52-1.714 13.705-.428 24.553 3.855 10.85 4.286 18.794 7.95 23.84 10.992 5.046 3.042 9.09 5.614 12.135 7.71 17.705-4.95 35.976-7.423 54.818-7.423 18.84 0 37.115 2.473 54.82 7.422l10.85-6.852c7.426-4.57 16.18-8.757 26.27-12.562 10.087-3.806 17.794-4.854 23.126-3.14 8.562 21.51 9.328 40.922 2.28 58.24 15.035 16.18 22.558 35.787 22.558 58.816 0 16.18-1.95 30.505-5.852 42.97-3.898 12.466-8.94 22.462-15.13 29.98-6.184 7.52-13.894 13.843-23.124 18.986-9.232 5.137-18.178 8.853-26.84 11.132-8.66 2.286-18.414 4.004-29.263 5.147 9.892 8.56 14.84 22.07 14.84 40.537v68.238c0 3.237.472 5.852 1.424 7.85.958 2 2.478 3.375 4.57 4.142 2.103.76 3.95 1.235 5.572 1.424 1.622.192 3.95.288 6.995.288h63.954c22.648 0 42.018-8.042 58.095-24.126 16.083-16.084 24.125-35.454 24.125-58.102V82.225c-.002-22.65-8.044-42.02-24.125-58.102z"/><path d="M86.793 319.195c-1.33.948-1.14 2.47.572 4.565 1.906 1.902 3.427 2.19 4.57.855 1.33-.948 1.14-2.47-.575-4.57-1.902-1.71-3.424-1.996-4.567-.85zM77.374 312.057c-.57 1.335.096 2.478 2 3.426 1.52.955 2.76.767 3.71-.568.57-1.335-.096-2.478-2-3.433-1.902-.572-3.14-.38-3.71.575zM95.646 330.33c-1.715.95-1.715 2.667 0 5.138 1.713 2.478 3.328 3.142 4.853 1.998 1.713-1.334 1.713-3.142 0-5.427-1.522-2.47-3.14-3.047-4.854-1.71zM105.64 343.174c-1.713 1.526-1.335 3.327 1.143 5.428 2.28 2.28 4.185 2.566 5.708.85 1.525-1.52 1.144-3.327-1.14-5.42-2.282-2.28-4.186-2.57-5.71-.858z"/></g></svg>,
      link: 'https://github.com/hloe'
    },
    {
      name: 'upwork',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56.7 56.7"><path d="M42.4 17.7c-5.3 0-9.3 3.5-10.9 9-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3V14.7H4.3v14.7c0 6.1 4.9 11 10.9 11s10.9-4.9 10.9-11v-2.5c1.1 2.2 2.5 4.6 4 6.7l-3.5 16.3h5.7L34.7 38c2.2 1.4 4.7 2.2 7.7 2.2 6.1 0 11.1-5 11.1-11.4 0-6.1-5-11.1-11.1-11.1zm0 16.9c-2.2 0-4.5-1-6.3-2.5l.6-2.2v-.1c.4-2.4 1.7-6.4 5.8-6.4 3.1 0 5.6 2.5 5.6 5.6-.1 3.1-2.8 5.6-5.7 5.6z"/></svg>,
      link: 'https://www.upwork.com/freelancers/~0115a1a0cb29dcc236'
    }
  ];
  
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