import React from 'react';
import { Intellectual } from '../types';

interface IntellectualCardProps {
  intellectual: Intellectual;
  onClose?: () => void;
}

const IntellectualCard: React.FC<IntellectualCardProps> = ({ intellectual, onClose }) => {
  return (
    <div className="intellectual-card">
      <div className="card-header">
        <h2>{intellectual.name}</h2>
        {onClose && (
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        )}
      </div>
      
      <div className="card-content">
        <div className="info-section">
          <strong>Life:</strong> {intellectual.birth} - {intellectual.death || 'present'}
        </div>
        
        <div className="info-section">
          <strong>Nationality:</strong> {intellectual.nationality}
        </div>
        
        <div className="info-section">
          <strong>Fields:</strong>
          <div className="fields">
            {intellectual.fields.map((field, index) => (
              <span key={index} className="field-tag">
                {field}
              </span>
            ))}
          </div>
        </div>
        
        <div className="info-section">
          <strong>Biography:</strong>
          <p>{intellectual.biography}</p>
        </div>
        
        <div className="info-section">
          <strong>Major Achievements:</strong>
          <ul className="achievements-list">
            {intellectual.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        
        {intellectual.wikiUrl && (
          <div className="info-section">
            <a 
              href={intellectual.wikiUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="wiki-link"
            >
              Learn more on Wikipedia →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntellectualCard;