import React from 'react';

function PuppyPic(props) {
  return (
    <div className="puppyBox">
      <img src={props.pup}></img>
      {/* <h6>{props.name}</h6> */}
    </div>
  )
}

export default PuppyPic;