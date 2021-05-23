import React from "react";
import './Body.css';

const Body = () => {
  return (
    <section className="showcase">
      <video muted loop autoplay="autoplay">
        <source src="./1.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="text">
        <h2>Never stop</h2>
        <h3>exploring the world</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          veritatis molestiae corrupti voluptatibus reprehenderit voluptatem
          consequuntur, debitis aperiam hic quisquam!
        </p>
        <a href="#">explore</a>
      </div>

      <ul className="social">
        <li>
          <a>
            <img src="./chat.png" alt="" />
          </a>
        </li>
        <li>
          <a>
            <img src="./email.png" alt="" />
          </a>
        </li>
        <li>
          <a>
            <img src="./care.png" alt="" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Body;
