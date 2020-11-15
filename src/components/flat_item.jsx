import React, { useState, useEffect } from 'react';

const FlatContainer = (props) => {
  // console.log(props)
  const { imageUrl, selected, children } = props;
  const activeClass = selected ? 'active' : '';

  return (
    <div className={`card ${activeClass}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${imageUrl}')` }}>
      { children }
    </div>
  );
};

const FlatPrice = (props) => {
  const { price, currency } = props;
  return (
    <div className="card-category">{ `${price} ${currency}` }</div>
  );
};

const FlatItem = (props) => {
  const {
    flat,
    selected
  } = props;
  // console.log(props);

  const handleClick = () => {
    props.selectFlat(props.index);
  };

  return (
    <FlatContainer imageUrl={flat.imageUrl} selected={selected}>
      <FlatPrice price={flat.price} currency={flat.priceCurrency} />
      <div className="card-description">
        <h2>{ flat.name }</h2>
      </div>
      <a className="card-link" href="#" onClick={() => handleClick()}>""</a>
    </FlatContainer>
  );
};

export default FlatItem;
