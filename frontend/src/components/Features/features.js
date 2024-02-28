import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard from './feature-card'
import './features.css'

const Features = (props) => {
  return (
    <div className="features-features">
      <div className="featuresContainer">
        <div className="features-features1">
          <div className="features-container">
            <span className="overline">
              <span>features</span>
              <br></br>
            </span>
            <h2 className="features-features-heading heading2">
              {props.featuresHeading}
            </h2>
            <span className="features-features-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Make informed decisions for a successful harvest</span>
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
          </div>
          <div className="features-container1">
            <FeatureCard
              heading="Soil Analysis"
              subHeading="Get detailed analysis of your soil composition"
            ></FeatureCard>
            <FeatureCard
              heading="Crop Recommendation"
              subHeading="Receive personalized crop suggestions based on soil condition"
            ></FeatureCard>
            <FeatureCard
              heading="Seasonal Guidance"
              subHeading="Guidance on which crops to grow during different seasons"
            ></FeatureCard>
            <FeatureCard
              heading="Optimal Yield"
              subHeading="Tips on how to maximize yield based on soil health"
            ></FeatureCard>
          </div>
        </div>
      </div>
    </div>
  )
}

Features.defaultProps = {
  featuresHeading: 'Empowering Farmers with Data-Driven Insights',
}

Features.propTypes = {
  featuresHeading: PropTypes.string,
}

export default Features
