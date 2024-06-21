import React, { useState } from 'react';

const CarList: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleList = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div className="car-list-container">
      <button onClick={toggleList} className="toggle-button">
        Toggle Car List
      </button>
      <div className={`car-list ${isVisible ? 'show' : 'hide'}`}>
        <ul>
          <li>Car 1</li>
          <li>Car 2</li>
          <li>Car 3</li>
        </ul>
      </div>
    </div>
  );
};

export default CarList;
