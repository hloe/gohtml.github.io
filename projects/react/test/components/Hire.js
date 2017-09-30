import React from 'react';
import IconList from './IconList';

function ContactsItem (props) {
  return(
    <li className="contacts__item">
      <h3 className="contacts__title">{props.item.title}</h3>
      <p>{props.item.contact}</p>
    </li>
  );
}

function ContactsList(props) {
  const contactData = [
    {
      title: 'Phone number',
      contact: '+38 (096)777-29-20'
    },
    {
      title: 'Email',
      contact: 'goroshanska@gmail.com'
    },
    {
      title: 'Skype',
      contact: 'larisa_goroshanska'
    }
  ];
  
  return(
    <ul className="contacts">
    {contactData.map(function(item, index) {
      return(
        <ContactsItem item={item} key={index} />
      );
    })}
    </ul>
  );
}


function Hire() {
  return(
    <section className="wrapper-dark section hire-me">
      <h2 className="section__title">Hire me</h2>
      <div className="container section__content">
        <p className="hire-me__text">If you are interested in work with me, please, don't be shy to write or call. I will answer asap.</p>
        <div className="hire-me__content">
          <ContactsList />
          <IconList />
        </div>
      </div>
    </section>
  );
}

export default Hire;