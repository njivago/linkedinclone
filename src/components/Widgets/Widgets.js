import { FiberManualRecord } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';
import './Widgets.css';

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecord />
        </div>
        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        'The princess, the sheikh and the £550m divorce settlement',
        'A UK court publishes a ruling in the divorce case of Sheikh Mohammed and his ex-wife Princess Haya'
      )}
      {newsArticle(
        'Is Russia preparing to invade Ukraine?',
        'What you need to know about Russia`s troop build-up along Ukraine"s borders.'
      )}
      {newsArticle(
        'La Liga: Sevilla v Barcelona - visitors looking to go fourth',
        'Follow live text updates as Sevilla host Barcelona in La Liga.'
      )}
      {newsArticle(
        'The Brazil & Barcelona great who never dared to dream',
        'Rivaldo is one of the world`s greatest players, a legend of Brazil and Barcelona. At 19, he looked very little like a footballer'
      )}
      {newsArticle(
        'The people `rage quitting` their jobs',
        'How workplace tensions are leading to angry resignations'
      )}
    </div>
  );
}

export default Widgets;
