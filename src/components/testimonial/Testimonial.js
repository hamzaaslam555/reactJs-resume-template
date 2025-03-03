import React from 'react'
import './_testimonial.scss'

const Testimonial = () => {

    return (
        <div className="fullwidth-block testimonial-section">
        <div className="container">
            <div className="quote-slider">
                <ul className="slides">
                    <li>
                        <blockquote>
                            <p>Despite working under tight deadlines, the quality of Hamza's work has remained excellent.With his dedication,grit and dilligence, i am confident that he will be successful in all his future endeavours. </p>
                            <cite>Dave Rodriguze</cite>
                            <span>CO Founder, Kayac Studios</span>
                        </blockquote>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Testimonial