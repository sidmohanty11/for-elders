import React from 'react';
import Card from './Card';
import './Start.css';

const TheStartBody = () => {
    return (
      <div className="the_dashboard_body">
        <Card title="Let's Get Started" leadTo="/register" to="Go" description="Tell us More about yourself so that we can provide you with our best services!" imageUrl="./more.png" />
      </div>
    );
}

export default TheStartBody;
