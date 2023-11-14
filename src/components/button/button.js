import React from 'react';

const ButtonWithIcon = ({ icon, label, onClick,customStyle }) => {
  return (
    <div className="buttonWithIcon" onClick={onClick} style={customStyle}>
      <img className="buttonIcon" src={icon} alt={`Ícone de ${label}`} />
      <button className="buttonLabel">{label}</button>
    </div>
  );
};

export default ButtonWithIcon;
