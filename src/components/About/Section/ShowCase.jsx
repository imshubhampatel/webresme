import React from 'react'

export default function ShowCase() {
    return (
        <div>
            <section id="about">
                <div class="about-wrapper container" style={{ maxWidth: "1157px" }}>
                    <div class="about-text">
                        <div data-aos="fade-right">
                            <p class="small">About-Us</p>
                            <h2 className='heads'>What decision-makers want is a solution to their problem.</h2>
                            <p>Self-motivated individual with strong technical and administrative skills. Effective team player with interpersonal
                                skills. Hardworking and result-oriented. Ability to persist & explore new ways of finding a solution to problems.
                            </p>
                        </div>
                    </div>
                    <div class="about-img" data-aos="fade-left">
                        <img src="https://builder-broadcast.s3.ap-south-1.amazonaws.com/1648808615815.jpeg" alt="straw-berry" />
                    </div>
                </div>
            </section>
        </div>
    )
}
