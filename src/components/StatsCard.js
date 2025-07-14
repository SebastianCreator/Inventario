import React from 'react';

const StatsCard = ({ title, value, icon, trend }) => {
  const trendColors = {
    up: 'ij-text-success',
    down: 'ij-text-danger',
    neutral: 'ij-text-warning'
  };

  return (
    <div className="ij-card ij-bg-card ij-text-card-foreground ij-shadow-sm ij-h-100">
      <div className="ij-card-body">
        <div className="ij-flex ij-justify-between ij-align-items-start">
          <div>
            <p className="ij-card-subtitle ij-text-muted">{title}</p>
            <p className="ij-card-text ij-fs-3 ij-fw-bold ij-text-foreground ij-mt-2">{value}</p>
          </div>
          <span className="ij-fs-4">{icon}</span>
        </div>
        <div className={`ij-mt-3 ij-flex ij-align-center ${trendColors[trend]}`}>
          {trend === 'up' && '↑ 12% este mes'}
          {trend === 'down' && '↓ 5% este mes'}
          {trend === 'neutral' && '→ Sin cambios'}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;