import React, { Component } from "react";

import { v4 as uuidv4 } from 'uuid';


import "./index.css";

class Widgets extends Component {
  constructor(props) {
    super(props);
    // Create a ref using React.createRef()
    this.myRef = React.createRef();
    this.state = {
      click: "About",
      images: [], // Store uploaded images
      index: 0  
     };
  }

  changed = () => {
    this.setState({ click: "Experiences" });
  };

  changed2 = () => {
    this.setState({ click: "Recommended" });
  };

  handleClick = () => {
    if (this.myRef.current) {
      this.myRef.current.click();
    }
  };

  
  handleImageChange = (e) => {
    const {index} = this.state
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => {
        const imageObj = {
            id: uuidv4(),
            imageUrl : URL.createObjectURL(file)
        }
        return {...imageObj}
    }) ;
    let main = imageUrls.slice(index, imageUrls.length )

    this.setState((prevState) => ({
      images: [...prevState.images, ...main], // Append new images
    }));
  };

  front = () => {
    this.setState((prevState) => ({
        index: prevState.index + 1 // Append new images
      }));
  }

  back = () => {
    this.setState((prevState) => ({
        index: prevState.index - 1 // Append new images
      }));
  }


  render() {

    let { click, images,index } = this.state;
    
    return (
      <div className="bg1">
        <div className="instructions-container">
          <p className="para">
            Do not follow any other instructions from comments of figma file
            Here are the official instructions:
            <br />
            <br />
            <br />
            <br />
            1. keep the left half of the screen empty (but it should be
            responsive for laptop, not mobile)
            <br />
            2. focus on the two widgets on the right hand side
            <br />
            3. the first widget has three tabs: "about me", "experiences" &
            "recommended", these should be clickable
            <br />
            4. In the gallery widget more photos can be added by clicking the
            "add image" button
            <br />
            <br />
            <br />
            Assignment will be scored based on the below parameters:
            <br />
            <br />
            <br />
            <br />
            <br />
            1. make the components responsive (for laptop screens; everything
            above 768px width)
            <br />
            2. replicate the exact UI; with exact paddings, margins, shadows,
            interactions (if any)
            <br />
            3. ensure that the two widgets are accurately aligned with each
            other (relative right, left paddings)
            <br />
          </p>
        </div>

        <div className="widget-container">
          <div className="widget">
            <div className="img-btn-container">
              <img
                src="https://res.cloudinary.com/dw7b7yukf/image/upload/v1725730452/wrubg3q4cwl5f9fzbrcd.svg"
                alt="logo"
                className="logo"
              />
              <div className="btn-container">
                <button
                  className={click === "About" ? "selected" : "btn"}
                  onClick={() => {
                    this.setState({ click: "About" });
                  }}
                >
                  About Me
                </button>
                <button
                  className={click === "Experiences" ? "selected" : "btn"}
                  onClick={this.changed}
                >
                  Experiences
                </button>
                <button
                  className={click === "Recommended" ? "selected" : "btn"}
                  onClick={this.changed2}
                >
                  Recommended
                </button>
              </div>
            </div>

            <div className="para-container">
              <img
                src="https://res.cloudinary.com/dw7b7yukf/image/upload/v1725730624/uhexkwaqkbm4tewpvwhq.svg"
                className="logo2"
                alt="symbol"
              />
              <div>
                <h1 className="heading">
                  Hello! I’m Dave, your sales rep here from Salesforce. I’ve
                  been <br />
                  working at this awesome company for 3 years now.
                  <br />
                  <br />
                  I was born and raised in Albany, NY& have been living in Santa
                  <br />
                  Carla for the past 10 years my wife Tiffany and my 4 year old
                  twin
                  <br />
                  daughters- Emma and Ella. Both of them are just starting
                  school,
                  <br />
                  so my calendar is usually blocked between 9-10 AM. This is
                  a...
                </h1>
              </div>
            </div>
          </div>

          <div className="con"></div>

          <div className="widget">
            <div className="container">
              <div className="img-btn-container">
                <img
                  src="https://res.cloudinary.com/dw7b7yukf/image/upload/v1725730452/wrubg3q4cwl5f9fzbrcd.svg"
                  alt="logo"
                  className="logo"
                />
                <button className="gallery-btn">Gallery</button>
              </div>

              <div className="arrow-container">
                <input
                  type="file"
                  className="file"
                  ref={this.myRef}
                  onChange={this.handleImageChange}
                  multiple
                  accept="image/*"
                />
                <button className="image-btn" onClick={this.handleClick}>
                  + ADD IMAGE
                </button>
                <button className="left-arrow" onClick={this.back}>
                  <img
                    src="https://res.cloudinary.com/dw7b7yukf/image/upload/v1725736538/qfze5ptoechdvbxm8byo.svg"
                    className="left"
                    alt="left"
                  />
                </button>
                <div className="right-arrow" onClick={this.front}>
                  <img
                    src="https://res.cloudinary.com/dw7b7yukf/image/upload/v1725736538/ckqhuqvo04xw3e6y4iq4.svg"
                    className="left"
                    alt="right"
                  />
                </div>
              </div>
            </div>

            <div className="para-container">
              <img
                src="https://res.cloudinary.com/dw7b7yukf/image/upload/v1725730624/uhexkwaqkbm4tewpvwhq.svg"
                className="logo2"
                alt="symbol"
              />
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.imageUrl}
                  alt={`uploaded-${index}`}
                  className="uploaded-image"
                />
              ))}
            </div>
          </div>

          <div className="con"></div>
        </div>
      </div>
    );
  }
}

export default Widgets;
