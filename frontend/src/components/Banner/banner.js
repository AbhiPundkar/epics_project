import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className="banner-banner">
      <div className="bannerContainer banner-banner1">
        <h1 className="banner-banner-heading heading2">
          {props.bannerHeading}
        </h1>
        <span className="banner-banner-sub-heading bodySmall">
          <span>
            <span>
              <span>
                Our platform analyzes soil conditions to provide personalized
                crop suggestions, helping farmers make informed decisions for a
                successful harvest. With our expertise and technology, you can
                enhance productivity and profitability in your fields.
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
        <button className="buttonFilled">{props.bannerButton}</button>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  bannerHeading: 'Empowering Farmers with Smart Crop Recommendations',
  bannerButton: 'Learn More',
}

Banner.propTypes = {
  bannerHeading: PropTypes.string,
  bannerButton: PropTypes.string,
}

export default Banner
