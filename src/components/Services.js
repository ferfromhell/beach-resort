import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "Free cocktails",
          info:
            "Deserunt dolore duis consequat est ullamco in consectetur pariatur ex voluptate veniam enim dolor do. Sint eiusmod mollit ad exercitation nisi."
        },
        {
          icon: <FaHiking />,
          title: "Endless Hiking",
          info:
            "Dolor veniam consectetur incididunt sit proident nostrud ea deserunt. Velit qui laboris qui in exercitation excepteur. "
        },
        {
          icon: <FaShuttleVan />,
          title: "Free shuttle",
          info:
            "Deserunt dolore duis consequat est ullamco in consectetur pariatur ex voluptate veniam enim dolor do. Sint eiusmod mollit ad exercitation nisi."
        },
        {
          icon: <FaBeer />,
          title: "Free beer",
          info:
            "Dolor veniam consectetur incididunt sit proident nostrud ea deserunt. Velit qui laboris qui in exercitation excepteur. "
        }
      ]
    };
  }
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
