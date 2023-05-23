import Head from "next/head";
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import { Inter } from "next/font/google";
// import styles from '@/styles/Home.module.css'
import cls from "classnames";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import style from "@/css/app.module.scss";
import style2 from "@/css/index.module.scss";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";


const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false })
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import bg from "../public/images/home-banner.jpg";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, onChange] = useState(new Date());
  const [valueTwo, onChangeTwo] = useState(new Date());
  const [valueThree, onChangeThree] = useState(new Date());

  const options = {
    // autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    animateOut: 'fadeOut',
    loop: true,
    margin: 20,
    stagePadding: 20,
    nav: true,
    dots: false,
    navElement: 'div',
    // navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i> "],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1300: {
        items: 4,
      },
    },
  };

  return (
    <>
      <Header />

      <section
        className={style2.homeBanner}
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        {/* <Image src={'/images/logo.png'}></Image>
        <Link href={'/contact'}></Link> */}
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={style2.bookFlight}>
                <h4>Book Your Flight</h4>
                <div className="row g-3">
                  <div className="col-12">
                    <div className={style2.radio}>
                      <ul className="d-flex">
                        <li className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="rd-1"
                          />
                          <label className="form-check-label" htmlFor="rd-1">
                            Default radio
                          </label>
                        </li>
                        <li className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="rd-2"
                          />
                          <label className="form-check-label" htmlFor="rd-2">
                            Default radio
                          </label>
                        </li>
                        <li className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="rd-3"
                          />
                          <label className="form-check-label" htmlFor="rd-3">
                            Default radio
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className={style2.inputArea}>
                      <div className="d-flex justify-content-between align-items-center">
                        <label>From</label>
                        <span>
                          <Image
                            src="/images/plain.svg"
                            width={16}
                            height={14}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className={style2.inputBox}>
                        <input
                          type="text"
                          placeholder="New York"
                          className={style2.formInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className={style2.inputArea}>
                      <div className="d-flex justify-content-between align-items-center">
                        <label>To</label>
                        <span>
                          <Image
                            src="/images/plain.svg"
                            width={16}
                            height={14}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className={style2.inputBox}>
                        <input
                          type="text"
                          placeholder="London"
                          className={style2.formInput}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                    <div className={style2.inputArea}>
                      <div className="w-100">
                        <label>Departure</label>
                      </div>
                      <DatePicker onChange={onChange} value={value} />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                    <div className={style2.inputArea}>
                      <div className="w-100">
                        <label>Departure</label>
                      </div>
                      <DatePicker onChange={onChangeTwo} value={valueTwo} />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-4 col-4">
                    <div className={style2.inputArea}>
                      <div className="w-100">
                        <label>Passengers & Class</label>
                      </div>
                      <div className={style2.inputBox}>
                        <select>
                          <option value="">1 Adult</option>
                          <option value="">2 Adult</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between align-items-center mt-4">
                  <div className="col d-flex align-items-center">
                    <div className="checkbox custom">
                      <label>
                        <input type="checkbox" defaultChecked /> Non Stop
                        FlightOnly
                      </label>
                    </div>
                    <div className={style2.bannSearch}>
                      <input
                        type="text"
                        placeholder="Search prefer airlines "
                        className={style2["input-1"]}
                      />
                      <button type="button" className={style2["srcButton"]}>
                        <Image
                          src="/images/search-icon.svg"
                          width={18}
                          height={18}
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div>
                      <button className={style2.findFlight}>
                        find your flight
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`destinationsSection ${style2.bgWhite} ${style2.destinationsSection}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={style2.sectionTitle}>
                <h2>These top destinations are just click away</h2>
              </div>
              <div className={style2.citiesDestination}>
                <div className="tabArea">
                  <ul className="nav mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Link
                        href="#"
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        href="#"
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Profile
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <OwlCarousel className="owl-theme" {...options}>
                      <div class="item">
                        <div className={style2.citiesDestinationBox}>
                          <Link href="#">
                            <Image
                              alt=""
                              src="/images/destination/1.jpg"
                              placeholder="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <div className={style2.destinationName}>
                              <h5>Lorem Ipsum</h5>
                              <h6>From $10,540 </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div class="item">
                        <div className={style2.citiesDestinationBox}>
                          <Link href="#">
                            <Image
                              alt=""
                              src="/images/destination/2.jpg"
                              placeholder="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <div className={style2.destinationName}>
                              <h5>Lorem Ipsum</h5>
                              <h6>From $10,540 </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div class="item">
                        <div className={style2.citiesDestinationBox}>
                          <Link href="#">
                            <Image
                              alt=""
                              src="/images/destination/2.jpg"
                              placeholder="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <div className={style2.destinationName}>
                              <h5>Lorem Ipsum</h5>
                              <h6>From $10,540 </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div class="item">
                        <div className={style2.citiesDestinationBox}>
                          <Link href="#">
                            <Image
                              alt=""
                              src="/images/destination/4.jpg"
                              placeholder="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <div className={style2.destinationName}>
                              <h5>Lorem Ipsum</h5>
                              <h6>From $10,540 </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div class="item">
                        <div className={style2.citiesDestinationBox}>
                          <Link href="#">
                            <Image
                              alt=""
                              src="/images/destination/3.jpg"
                              placeholder="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <div className={style2.destinationName}>
                              <h5>Lorem Ipsum</h5>
                              <h6>From $10,540 </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <OwlCarousel className="owl-theme" {...options}>
                      <div class="item">
                        <div className={style2.citiesDestinationBox}>
                          <Link href="#">
                            <Image
                              alt=""
                              src="/images/destination/1.jpg"
                              placeholder="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <div className={style2.destinationName}>
                              <h5>Lorem Ipsum</h5>
                              <h6>From $10,540 </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div class="item">
                        <div className={style2.citiesDestinationBox}>
                          <Link href="#">
                            <Image
                              alt=""
                              src="/images/destination/2.jpg"
                              placeholder="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <div className={style2.destinationName}>
                              <h5>Lorem Ipsum</h5>
                              <h6>From $10,540 </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div class="item">
                        <div className={style2.citiesDestinationBox}>
                          <Link href="#">
                            <Image
                              alt=""
                              src="/images/destination/3.jpg"
                              placeholder="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <div className={style2.destinationName}>
                              <h5>Lorem Ipsum</h5>
                              <h6>From $10,540 </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div class="item">
                        <div className={style2.citiesDestinationBox}>
                          <Link href="#">
                            <Image
                              alt=""
                              src="/images/destination/4.jpg"
                              placeholder="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <div className={style2.destinationName}>
                              <h5>Lorem Ipsum</h5>
                              <h6>From $10,540 </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div class="item">
                        <div className={style2.citiesDestinationBox}>
                          <Link href="#">
                            <Image
                              alt=""
                              src="/images/destination/3.jpg"
                              placeholder="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                            />
                            <div className={style2.destinationName}>
                              <h5>Lorem Ipsum</h5>
                              <h6>From $10,540 </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style2.travelersChoose}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={style2.sectionTitle}>
                <h2>Why travelers choose mitigate flight</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className={style2.travelersChooseBox}>
                <span>
                  <Image
                    alt=""
                    src="/images/big-name.svg"
                    placeholder="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </span>
                <h4>Big Names, great Deal</h4>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className={style2.travelersChooseBox}>
                <span>
                  <Image
                    alt=""
                    src="/images/worry.svg"
                    placeholder="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </span>
                <h4>Search Without worry</h4>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className={style2.travelersChooseBox}>
                <span>
                  <Image
                    alt=""
                    src="/images/flexibility.svg"
                    placeholder="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </span>
                <h4>book with flexibility</h4>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className={style2.travelersChooseBox}>
                <span>
                  <Image
                    alt=""
                    src="/images/trusted.svg"
                    placeholder="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                </span>
                <h4>Trusted and free</h4>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style2.PopularFlights}>
        <div className="container">
          <div className="row g-3">
            <div className="col-12">
              <div className={style2.sectionTitle}>
                <h2>Popular flights near you</h2>
                <p>Find Deals on domestic and international flights</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className={`d-flex align-items-center ${style2.PopularFlightsBox}`}>
                <div className={style2.pfbLeft}>
                  <span>
                    <Image alt="" src="/images/populer-flight/1.jpg" placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </span>
                </div>
                <div className={style2.pfbRight}>
                  <h5><span>London</span> <span><Image alt="" src="/images/r-trip.svg" placeholder="logo" width={25} height={14} sizes="100vw" /></span> <span>Lisbon</span></h5>
                  <p><span>23rd may</span> - <span>29th may</span> round trip</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className={`d-flex align-items-center ${style2.PopularFlightsBox}`}>
                <div className={style2.pfbLeft}>
                  <span>
                    <Image alt="" src="/images/populer-flight/1.jpg" placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </span>
                </div>
                <div className={style2.pfbRight}>
                  <h5><span>London</span> <span><Image alt="" src="/images/r-trip.svg" placeholder="logo" width={25} height={14} sizes="100vw" /></span> <span>Lisbon</span></h5>
                  <p><span>23rd may</span> - <span>29th may</span> round trip</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className={`d-flex align-items-center ${style2.PopularFlightsBox}`}>
                <div className={style2.pfbLeft}>
                  <span>
                    <Image alt="" src="/images/populer-flight/1.jpg" placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </span>
                </div>
                <div className={style2.pfbRight}>
                  <h5><span>London</span> <span><Image alt="" src="/images/r-trip.svg" placeholder="logo" width={25} height={14} sizes="100vw" /></span> <span>Lisbon</span></h5>
                  <p><span>23rd may</span> - <span>29th may</span> round trip</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className={`d-flex align-items-center ${style2.PopularFlightsBox}`}>
                <div className={style2.pfbLeft}>
                  <span>
                    <Image alt="" src="/images/populer-flight/1.jpg" placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </span>
                </div>
                <div className={style2.pfbRight}>
                  <h5><span>London</span> <span><Image alt="" src="/images/r-trip.svg" placeholder="logo" width={25} height={14} sizes="100vw" /></span> <span>Lisbon</span></h5>
                  <p><span>23rd may</span> - <span>29th may</span> round trip</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className={`d-flex align-items-center ${style2.PopularFlightsBox}`}>
                <div className={style2.pfbLeft}>
                  <span>
                    <Image alt="" src="/images/populer-flight/1.jpg" placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </span>
                </div>
                <div className={style2.pfbRight}>
                  <h5><span>London</span> <span><Image alt="" src="/images/r-trip.svg" placeholder="logo" width={25} height={14} sizes="100vw" /></span> <span>Lisbon</span></h5>
                  <p><span>23rd may</span> - <span>29th may</span> round trip</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className={`d-flex align-items-center ${style2.PopularFlightsBox}`}>
                <div className={style2.pfbLeft}>
                  <span>
                    <Image alt="" src="/images/populer-flight/1.jpg" placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                  </span>
                </div>
                <div className={style2.pfbRight}>
                  <h5><span>London</span> <span><Image alt="" src="/images/r-trip.svg" placeholder="logo" width={25} height={14} sizes="100vw" /></span> <span>Lisbon</span></h5>
                  <p><span>23rd may</span> - <span>29th may</span> round trip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style2.mapSection}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={style2.mapSectionWrap}>
                <div className={`d-flex flex-wrap justify-content-between align-items-center ${style2.mapTop}`}>
                  <div className={style2.mapTopLeft}>
                    <ul className="d-flex flex-wrap">
                      <li><span><Image alt="" src="/images/plain-2.svg" placeholder="" width={16} height={16} /></span> One way</li>
                      <li><span><Image alt="" src="/images/adult.svg" placeholder="" width={16} height={16} /></span> 1Adult</li>
                      <li><span><Image alt="" src="/images/economy.svg" placeholder="logo" width={16} height={16} /></span> Economy</li>
                    </ul>
                  </div>
                  <div className={style2.mapTopRight}>
                    <p>Looking for Travel Ideas? <Link href="#">Explore Map <Image alt="" src="/images/map.svg" placeholder="" width={20} height={20} /></Link></p>
                  </div>
                </div>
                <div className={style2.mapMid}>
                  <div className="row g-3">
                    <div className="col">
                      <div className={style2.mapMidInput}>
                        <label>From</label>
                        <input type="text" placeholder="New York" className={style2["input-2"]} />
                      </div>
                    </div>
                    <div className="col">
                      <div className={style2.mapMidInput}>
                        <label>Departure</label>
                        <DatePicker onChange={onChangeThree} value={valueThree} />
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type="button" className={style2.srcBtn}>
                      <Image alt="" src="/images/search-icon.svg" placeholder="" width={30} height={30} sizes="100vw" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={style2.mapImg}>
                  <Image alt="" src="/images/map.png" placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style2.newsLatter}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-auto col-md-auto col-sm-12">
            <Image alt="" src="/images/envelope.svg" placeholder="" width={147} height={98} sizes="100vw" />
            </div>
            <div className="col-lg-auto col-md-auto col-sm-12">
              <div className={style2.newsLatterDesk}>
                <h5>Sign up for exclusive email for coupons</h5>
                <p>Exclusive access to coupons, special offers and promotion</p>
              </div>
            </div>
            <div className="col-lg col-md col-sm-12">
              <input type="text" placeholder="example@example.com" className={style2["input-3"]}/>
            </div>
            <div className="col-lg-auto col-md-auto col-sm-12">
              <button type="button" className={style2.sendDeal}>Send me deal</button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
