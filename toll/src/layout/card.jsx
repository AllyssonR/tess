import React from 'react';
import './card.css';
export default props =>
<div className="Card">
  <div className="Conteudo">
    {props.children}
  </div>
  <div className="Footer">
    {props.children}
  </div>
</div>