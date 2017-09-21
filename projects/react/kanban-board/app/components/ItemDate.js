import React from 'react';

function DateFormat(date) {
  date = Date.parse(date);
  const month = new Date(date).getMonth().toString().length < 2 ? '0' + (new Date(date).getMonth() + 1) : new Date(date).getMonth() + 1;
  const day = new Date(date).getDate().toString().length < 2 ? '0' + new Date(date).getDate() : new Date(date).getDate();
  const hours = new Date(date).getHours().toString().length < 2 ? '0' + new Date(date).getHours() : new Date(date).getHours();
  const minutes = new Date(date).getMinutes().toString().length < 2 ? '0' + new Date(date).getMinutes() : new Date(date).getMinutes();
  return (month + '/' + day + '/' + new Date(date).getFullYear() + ' ' + hours + ':' + minutes);
}

function ItemDate(props) {
  return(
    <small className='date text-right'>{DateFormat(props.data)}</small>
  );
}

export default ItemDate;
