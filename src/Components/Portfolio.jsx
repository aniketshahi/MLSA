/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me.jpg";

const imageAltText = "My picture";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Ticket Booking site For MoonTrip",
    description:
      "This project is a website for a hypothetical space tourism company named Moon Trip. The website provides comprehensive information about the company's mission to take civilians to the Moo.",
    url: "https://aniket0608.github.io/MoonWalk-aniket0608.github.io/",
  },
  {
    title: "App Starting Interface",
    description:
      "Application Stated Phase showing login and signup.",
    url: "https://github.com/aniket0608/nfsu_edu/tree/Nfsu_edu",
  },
  {
    title: "My Resume Site",
    description:
      "Created my first portfolio website deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://aniket0608.github.io/portfolio-aniket0608.github.io/",
  },
  {
    title: "Notepad",
    description:
      "This project is a simple Notepad application developed in C# using Windows Forms.",
    url: "https://github.com/aniket0608/Notepad",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
