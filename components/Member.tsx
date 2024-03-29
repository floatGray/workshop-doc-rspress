import React from 'react';

export default function Member(props?: {
  name: string;
  organization: string;
  imgUrl: string;
  memberUrl?: string;
}) {
  return (
    <div className="member">
      <img src={props.imgUrl} className="organizersImg" alt="organizersPhoto" />
      {props.memberUrl ? (
        <a className="organizersName" href={props.memberUrl}>
          {props.name}
        </a>
      ) : (
        <div className="organizersName">{props.name}</div>
      )}
      <div className="organization">{props.organization}</div>
    </div>
  );
}
