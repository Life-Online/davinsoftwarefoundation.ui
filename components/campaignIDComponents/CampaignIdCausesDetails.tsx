import React from 'react'
import Image from "next/image";

function CampaignIdCausesDetails() {
  return (
    <section className="causes-details">
    <div className="container">
        <div className="row">
            <div className="col-xl-8 col-lg-7">
                <div className="causes-details__left-bar">
                    <div className="causes-details__img">
                        <div className="causes-details__img-box">
                            <Image src="/assets/images/resources/causes-details-img.jpg" width="500" height="500"  alt=""/>
                            <div className="causes-details__category">
                                <span>Medical</span>
                            </div>
                        </div>
                        <div className="causes-details__progress">
                            <div className="bar">
                                <div className="bar-inner count-bar" data-percent="36%">
                                    <div className="count-text">36%</div>
                                </div>
                            </div>
                            <div className="causes-details__goals">
                                <p><span>$25,270</span> Raised</p>
                                <p><span>$30,000</span> Goal</p>
                            </div>
                        </div>
                    </div>
                    <div className="causes-details__text-box">
                        <h3>Raise Fund for Clean & Healthy Water</h3>
                        <p className="causes-details__text-1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
                        <p className="causes-details__text-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="causes-details__images-box">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="causes-details__images-single">
                                    <Image src="/assets/images/resources/causes-details-images-1.jpg" width="500" height="500"  alt=""/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="causes-details__images-single">
                                    <Image src="/assets/images/resources/causes-details-images-2.jpg" width="500" height="500"  alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="causes-details__summary">
                        <div className="causes-details__summary-text">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing. </p>
                        </div>
                        <div className="causes-details__summary-list">
                            <ul className="causes-details__summary-list-box list-unstyled">
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-arrow-circle-right"></i>
                                    </div>
                                    <div className="text">
                                        <p>Making this first true generator</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-arrow-circle-right"></i>
                                    </div>
                                    <div className="text">
                                        <p>Many desktop publish packages</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-arrow-circle-right"></i>
                                    </div>
                                    <div className="text">
                                        <p>Lorem Ipsum is not simply</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-arrow-circle-right"></i>
                                    </div>
                                    <div className="text">
                                        <p>If you are going to passage</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-arrow-circle-right"></i>
                                    </div>
                                    <div className="text">
                                        <p>It has roots in a piece</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="causes-details__share">
                        <div className="causes-details__share-btn-box">
                            <a href="#" className="causes-details__share-btn thm-btn"><i className="fas fa-arrow-circle-right"></i>Donate Us Now</a>
                        </div>
                        <div className="causes-details__share-social">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-dribbble"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="causes-details__download">
                        <div className="causes-details__left">
                            <div className="icon">
                                <Image src="/assets/images/resources/causes-details-download-icon.png" width="500" height="500"  alt=""/>
                            </div>
                            <div className="text">
                                <h4>Our Presentation</h4>
                            </div>
                        </div>
                        <div className="causes-details__download-btn-box">
                            <a href="#" className="causes-details__download-btn thm-btn"><i className="fas fa-arrow-circle-right"></i>Download Now</a>
                        </div>
                    </div>
                    <div className="comment-one">
                        <h3 className="comment-one__title">Comments</h3>
                        <div className="comment-one__single">
                            <div className="comment-one__image">
                                <Image src="/assets/images/blog/comment-1-1.jpg" width="500" height="500"  alt=""/>
                            </div>
                            <div className="comment-one__content">
                                <h3>David Marks <span>3 hours ago</span></h3>
                                <p>Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.</p>
                                <a href="#" className="comment-one__btn thm-btn"><i className="fas fa-arrow-circle-right"></i>Reply</a>
                            </div>
                        </div>
                        <div className="comment-one__single">
                            <div className="comment-one__image">
                                <Image src="/assets/images/blog/comment-1-2.jpg" width="500" height="500"  alt=""/>
                            </div>
                            <div className="comment-one__content">
                                <h3>Christine Eve <span>3 hours ago</span></h3>
                                <p>Sending love. My nephews Nick and Anthony Salaber are your teammates, so I know the caliber person you are. Our whole family is sending our best to you and your family.</p>
                                <a href="#" className="comment-one__btn thm-btn"><i className="fas fa-arrow-circle-right"></i>Reply</a>
                            </div>
                        </div>
                    </div>
                    <div className="comment-form">
                        <h3 className="comment-form__title">Leave a Comment</h3>
                        <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="comment-form__input-box">
                                        <input type="text" placeholder="Your name" name="name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="comment-form__input-box">
                                        <input type="email" placeholder="Email address" name="email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="comment-form__input-box">
                                        <textarea name="message" placeholder="Write message"></textarea>
                                    </div>
                                    <button type="submit" className="thm-btn comment-form__btn"><i className="fas fa-arrow-circle-right"></i>Submit Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-5">
                <div className="causes-details__right">
                    <div className="causes-details__organizer">
                        <div className="causes-details__organizer-img">
                            <Image src="/assets/images/resources/causes-details-organizar-img-1.jpg" width="500" height="500"  alt=""/>
                        </div>
                        <div className="causes-details__organizer-content">
                            <p>Created 20 Jan, 2021</p>
                            <h5>Organizer: <span>Jessica Smith</span></h5>
                            <ul className="causes-details__organizer-list list-unstyled">
                                <li><i className="fas fa-map-marker-alt"></i>Education</li>
                                <li><i className="fas fa-map-marker-alt"></i>Wrightwood, Canada</li>
                            </ul>
                        </div>
                    </div>
                    <div className="causes-details__donations">
                        <h3 className="causes-details__donations-title">Recent Donations</h3>
                        <ul className="list-unstyled causes-details__donations-list">
                            <li>
                                <div className="causes-details__donations-img">
                                    <Image src="/assets/images/resources/recent-donation-img-1.jpg" width="500" height="500"  alt=""/>
                                </div>
                                <div className="causes-details__donations-content">
                                    <h4>$20</h4>
                                    <h5>David Marks <span>3 hours ago</span></h5>
                                    <p>God bless you dear</p>
                                </div>
                            </li>
                            <li>
                                <div className="causes-details__donations-img">
                                    <Image src="/assets/images/resources/recent-donation-img-2.jpg" width="500" height="500"  alt=""/>
                                </div>
                                <div className="causes-details__donations-content">
                                    <h4>$60</h4>
                                    <h5>Jessica Rose <span>6 hours ago</span></h5>
                                    <p>God bless you dear</p>
                                </div>
                            </li>
                            <li>
                                <div className="causes-details__donations-img">
                                    <Image src="/assets/images/resources/recent-donation-img-3.jpg" width="500" height="500"  alt=""/>
                                </div>
                                <div className="causes-details__donations-content">
                                    <h4>$30</h4>
                                    <h5>Kevim Martin <span>1 day ago</span></h5>
                                    <p>God bless you dear</p>
                                </div>
                            </li>
                            <li>
                                <div className="causes-details__donations-img">
                                    <Image src="/assets/images/resources/recent-donation-img-4.jpg" width="500" height="500"  alt=""/>
                                </div>
                                <div className="causes-details__donations-content">
                                    <h4>$180</h4>
                                    <h5>Anonymous <span>1 day ago</span></h5>
                                    <p>God bless you dear</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default CampaignIdCausesDetails
