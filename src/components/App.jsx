import React from 'react';
import Counter from 'components/FeedbackStatiatics/FeedbackStatistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Counter />
    </div>
  );
};
