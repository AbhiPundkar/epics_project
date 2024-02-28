import React from 'react'

import PropTypes from 'prop-types'

import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-pricing">
      <div className="pricingContainer">
        <div className="pricing-container">
          <span className="overline">
            <span>Pricing</span>
            <br></br>
          </span>
          <h2 className="heading2">{props.pricingHeading}</h2>
          <span className="pricing-pricing-sub-heading bodyLarge">
            <span>
              <span>
                Select a plan that suits your requirements and get ready to
                optimize your crop production.
              </span>
            </span>
          </span>
        </div>
        <div className="pricing-container01">
          <div className="freePricingCard pricing-pricing-card">
            <div className="pricing-container02">
              <span className="pricing-text05 heading3">{props.text}</span>
              <span className="bodySmall">{props.freePlanDescription}</span>
            </div>
            <div className="pricing-container03">
              <span className="pricing-text06">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-free-plan-price">
                {props.freePlanPrice}
              </span>
            </div>
            <div className="pricing-container04">
              <div className="pricing-container05">
                <span className="pricing-text09">{props.text4}</span>
                <span className="bodySmall">{props.freePlanFeatures}</span>
              </div>
              <div className="pricing-container06">
                <span className="pricing-text10">{props.text5}</span>
                <span className="bodySmall">{props.freePlanFeatures1}</span>
              </div>
              <div className="pricing-container07">
                <span className="pricing-text11">{props.text6}</span>
                <span className="bodySmall">{props.freePlanFeatures2}</span>
              </div>
              <div className="pricing-container08">
                <span className="pricing-text12">{props.text7}</span>
                <span className="bodySmall">{props.freePlanFeatures3}</span>
              </div>
            </div>
            <button className="pricing-button buttonOutline">
              {props.button}
            </button>
          </div>
          <div className="basicPricingCard pricing-pricing-card1">
            <div className="pricing-container09">
              <span className="pricing-text13 heading3">{props.text1}</span>
              <span className="bodySmall">{props.basicPlanDescription}</span>
            </div>
            <div className="pricing-container10">
              <span className="pricing-text14">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-basic-plan-pricing">
                {props.basicPlanPricing}
              </span>
              <span className="pricing-text17">{props.text2}</span>
            </div>
            <div className="pricing-container11">
              <div className="pricing-container12">
                <span className="pricing-text18">{props.text8}</span>
                <span className="bodySmall">{props.text9}</span>
              </div>
              <div className="pricing-container13">
                <span className="pricing-text20">{props.text10}</span>
                <span className="bodySmall">{props.freePlanFeatures4}</span>
              </div>
              <div className="pricing-container14">
                <span className="pricing-text21">{props.text11}</span>
                <span className="bodySmall">{props.freePlanFeatures5}</span>
              </div>
              <div className="pricing-container15">
                <span className="pricing-text22">{props.text12}</span>
                <span className="bodySmall">{props.freePlanFeatures6}</span>
              </div>
              <div className="pricing-container16">
                <span className="pricing-text23">{props.text13}</span>
                <span className="bodySmall">{props.freePlanFeatures7}</span>
              </div>
            </div>
            <button className="pricing-button1 buttonFilledSecondary">
              {props.button1}
            </button>
          </div>
          <div className="proPricingCard pricing-pricing-card2">
            <div className="pricing-container17">
              <span className="pricing-text24 heading3">
                <span>PRO</span>
                <br></br>
              </span>
              <span className="bodySmall">{props.proPlanDescription}</span>
            </div>
            <div className="pricing-container18">
              <span className="pricing-text27">
                <span>$</span>
                <span></span>
              </span>
              <span className="pricing-pro-plan-pricing">
                {props.proPlanPricing}
              </span>
              <span className="pricing-text30">{props.text3}</span>
            </div>
            <div className="pricing-container19">
              <div className="pricing-container20">
                <span className="pricing-text31">{props.text14}</span>
                <span className="bodySmall">{props.text15}</span>
              </div>
              <div className="pricing-container21">
                <span className="pricing-text33">{props.text16}</span>
                <span className="bodySmall">{props.freePlanFeatures8}</span>
              </div>
              <div className="pricing-container22">
                <span className="pricing-text34">{props.text17}</span>
                <span className="bodySmall">{props.freePlanFeatures9}</span>
              </div>
              <div className="pricing-container23">
                <span className="pricing-text35">{props.text18}</span>
                <span className="bodySmall">{props.freePlanFeatures10}</span>
              </div>
              <div className="pricing-container24">
                <span className="pricing-text36">{props.text19}</span>
                <span className="bodySmall">{props.freePlanFeatures11}</span>
              </div>
            </div>
            <button className="pricing-button2 buttonFilledSecondary">
              {props.button2}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Pricing.defaultProps = {
  pricingHeading: 'Choose the Right Plan for Your Farming Needs',
  button: 'Continue with Free',
  button1: 'Try the Basic plan',
  button2: 'Try the PRO plan',
  text: 'Free',
  freePlanDescription: 'Get started with basic crop suggestions',
  freePlanPrice: 'Free',
  text1: 'BASIC',
  basicPlanDescription:
    'Unlock more crop options and personalized recommendations',
  basicPlanPricing: '$9.99/month',
  text2: '/ month',
  proPlanDescription:
    'Maximize your crop yield with expert advice and premium features',
  proPlanPricing: '$19.99/month',
  text3: '/ month',
  text4: '✔',
  freePlanFeatures: 'Access to soil analysis tool',
  text5: '✔',
  freePlanFeatures1: 'Recommendations for common crops',
  text6: '✔',
  freePlanFeatures2: 'Limited customer support',
  text7: '✔',
  freePlanFeatures3: 'Monthly newsletter',
  text8: '✔',
  text9: 'All features of FREE plan',
  text10: '✔',
  freePlanFeatures4: 'Advanced soil analysis tool',
  text11: '✔',
  freePlanFeatures5: 'Recommendations for a wide variety of crops',
  text12: '✔',
  freePlanFeatures6: 'Priority customer support',
  text13: '✔',
  freePlanFeatures7: 'Seasonal planting guide',
  text14: '✔',
  text15: ' All features of BASIC plan',
  text16: '✔',
  freePlanFeatures8: 'Customized soil health report',
  text17: '✔',
  freePlanFeatures9: 'Tailored crop recommendations based on soil condition',
  text18: '✔',
  freePlanFeatures10: 'Dedicated account manager',
  text19: '✔',
  freePlanFeatures11: 'Exclusive access to webinars',
}

Pricing.propTypes = {
  pricingHeading: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  button2: PropTypes.string,
  text: PropTypes.string,
  freePlanDescription: PropTypes.string,
  freePlanPrice: PropTypes.string,
  text1: PropTypes.string,
  basicPlanDescription: PropTypes.string,
  basicPlanPricing: PropTypes.string,
  text2: PropTypes.string,
  proPlanDescription: PropTypes.string,
  proPlanPricing: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  freePlanFeatures: PropTypes.string,
  text5: PropTypes.string,
  freePlanFeatures1: PropTypes.string,
  text6: PropTypes.string,
  freePlanFeatures2: PropTypes.string,
  text7: PropTypes.string,
  freePlanFeatures3: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  freePlanFeatures4: PropTypes.string,
  text11: PropTypes.string,
  freePlanFeatures5: PropTypes.string,
  text12: PropTypes.string,
  freePlanFeatures6: PropTypes.string,
  text13: PropTypes.string,
  freePlanFeatures7: PropTypes.string,
  text14: PropTypes.string,
  text15: PropTypes.string,
  text16: PropTypes.string,
  freePlanFeatures8: PropTypes.string,
  text17: PropTypes.string,
  freePlanFeatures9: PropTypes.string,
  text18: PropTypes.string,
  freePlanFeatures10: PropTypes.string,
  text19: PropTypes.string,
  freePlanFeatures11: PropTypes.string,
}

export default Pricing
