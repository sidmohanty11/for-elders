import React from 'react';
import Card from './Card';
import './Start.css';

const TheStartBody = () => {
    return (
      <div className="the_dashboard_body">
        <Card
          title="Let's Get Started/Change Info"
          leadTo="/register"
          to="Go"
          description="Tell us More about yourself so that we can provide you with our best services!"
          imageUrl="./register.png"
        />
        <Card
          title="If already registered jump to dashboard"
          leadTo="/dashboard"
          to="Go"
          description="Jump to the dashboard where we can check on your meds, hope you are liking us till now!"
          imageUrl="./dashboard.png"
        />
      </div>
    );
}

export default TheStartBody;
