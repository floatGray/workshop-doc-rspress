import React from 'react';

export default function PersonImage(props?: { imgUrl: string }) {
  return (
    <div className="memberImg">
      <img src={props.imgUrl} />
    </div>
  );
}
