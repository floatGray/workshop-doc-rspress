import React from 'react';
import Member from './Member';

export default function MemberPanel(props) {
  return <div className="member-panel-container">{props.children}</div>;
}
