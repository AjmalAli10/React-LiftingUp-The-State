import React, { useState } from 'react';
const Section = ({
  title,
  description,
  isVisible,
  setIsVisibleSection,
  value,
}) => {
  return (
    <div className="border border-dark px-2 mb-2 h-50">
      <h3 className="py-2 mb-0">{title}</h3>
      <button
        type="button"
        className="mb-2 btn btn-light border-dark"
        style={{ width: '64px' }}
        onClick={() => {
          setIsVisibleSection(isVisible ? false : value);
        }}
      >
        {!isVisible ? 'show' : 'hide'}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const CollapsibleCard = () => {
  const [isVisibleSection, setIsVisibleSection] = useState(0);
  return (
    <div className="px-2 pt-2">
      <h2>Collapsible Section</h2>
      <Section
        isVisible={isVisibleSection === 0}
        value={0}
        setIsVisibleSection={setIsVisibleSection}
        title={'About'}
        description={
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney'
        }
      />
      <Section
        isVisible={isVisibleSection === 1}
        setIsVisibleSection={setIsVisibleSection}
        value={1}
        title={'Team'}
        description={
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney'
        }
      />
      <Section
        isVisible={isVisibleSection === 2}
        setIsVisibleSection={setIsVisibleSection}
        value={2}
        title={'Career'}
        description={
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney'
        }
      />
    </div>
  );
};
export default CollapsibleCard;
