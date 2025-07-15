import React from 'react';

const StatsCard = ({ title, value, icon, trend }) => {
  const trendColors = {
    up: ' text-success',
    down: ' text-danger',
    neutral: ' text-warning'
  };

  return (
    <div className=" card  bg-card  text-card-foreground  shadow-sm  h-100">
      <div className=" card-body">
        <div className=" flex  justify-between  align-items-start">
          <div>
            <p className=" card-subtitle  text-muted">{title}</p>
            <p className=" card-text  fs-3  fw-bold  text-foreground  mt-2">{value}</p>
          </div>
          <span className=" fs-4">{icon}</span>
        </div>
        <div className={` mt-3  flex  align-center ${trendColors[trend]}`}>
          {trend === 'up' && '↑ 12% este mes'}
          {trend === 'down' && '↓ 5% este mes'}
          {trend === 'neutral' && '→ Sin cambios'}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;