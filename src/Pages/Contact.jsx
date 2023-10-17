import React from 'react'
import './Contact.css'
import Navs from '../Components/Navs'
import Footer from '../Components/Footer'

const Contact = () => {
    return (
        <>
            {/* start nav */}
            <Navs/>
            {/* start nav */}
            <div className="contact">
                <div className="head">
                    <h3>contact us</h3>
                    <p>Proident, sunt in culpa qui officia deserunt mollit 
                        anim id est laborum. Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23204.058794346933!2d31.40668606973782!3d30.171309529658473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145810c330e05d5d%3A0x13ef89ed5e914b06!2z2YXYr9mK2YbZhyDYp9mE2LPZhNin2YXYjCDYp9mE2LPZhNin2YUg2KfZhNi62LHYqNmK2KnYjCDZgtiz2YUg2KPZiNmEINin2YTYs9mE2KfZhdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1689859865196!5m2!1sar!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="form">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-10 col-sm-11">
                                <form>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <label>name</label>
                                            <input type="text" placeholder='Name' />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label>email</label>
                                            <input type="email" placeholder='email' />
                                        </div>
                                    </div>
                                    <label>subject</label>
                                    <input type="text" placeholder='Subject' />
                                    <label>message</label>
                                    <textarea placeholder='Message' ></textarea>
                                    <button type="submit">let`s talk</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start footer */}
            <Footer/>
            {/* end footer */}
        </>
    )
}

export default Contact
