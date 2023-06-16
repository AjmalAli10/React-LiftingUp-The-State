import React, { useState } from 'react';
const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border border-dark px-2 mb-2">
      <h3>{title}</h3>
      <button
        className="my-2 btn btn-light border-dark"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        show
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const CollapsibleCard = () => {
  return (
    <div className="px-2 pt-2">
      <h2>InstaMart</h2>
      <Section
        title={'About InstaMart'}
        description={
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney'
        }
      />
      <Section
        title={'Team InstaMart'}
        description={
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney'
        }
      />
      <Section
        title={'Careers'}
        description={
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney'
        }
      />
    </div>
  );
};
export default CollapsibleCard;
