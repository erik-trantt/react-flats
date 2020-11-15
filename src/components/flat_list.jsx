import React, { useState } from 'react';
import FlatItem from './flat_item';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <FlatItem
          flat={flat}
          key={`${flat.lat}${flat.lng}`}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      { renderList() }
    </div>
  );
};

export default FlatList;
