import React from 'react'
import "./Profile.css"
import heroBg from "./images/icon_image.jpeg"
import AOS from 'aos'

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the

});

export default function Profile() {
    return (
        <>
            <section id="header">
                <div className=" container">
                    <div className="logo"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"

                    >
                        <img src="https://www.freepnglogos.com/uploads/a-logo-5.png" alt="" />
                        <span>WEBRESUME</span>
                    </div>
                    <div className='parent_header'>
                        <div className="parent_heading"
                        >
                            <span>Hey I'm <span></span></span>
                            <span>Dr. VEERESH<span></span></span>
                            <span>FUSKELE <span></span></span>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <button>Download CV</button>
                            </div>
                        </div>
                        <div className="parent_image"
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="false"
                            data-aos-once="true"
                            data-aos-anchor-placement="cemter-top"
                        >
                            <img src={heroBg} alt=" fds" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
