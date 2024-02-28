import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-hero">
      <div className="heroContainer hero-hero1">
        <div className="hero-container">
          <h1 className="hero-hero-heading heading1">{props.heroHeading}</h1>
          <span className="hero-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>Maximize Your Yield with Data-Driven Insights</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <div className="hero-btn-group">
            <button className="buttonFilled">{props.heroButton1}</button>
            <button className="buttonFlat">{props.heroButton2}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  heroHeading: 'Optimize Your Crop Selection',
  heroButton1: 'Get Started',
  heroButton2: 'Learn More →',
}

Hero.propTypes = {
  heroHeading: PropTypes.string,
  heroButton1: PropTypes.string,
  heroButton2: PropTypes.string,
}

export default Hero
