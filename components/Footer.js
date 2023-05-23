import React from 'react'
import style from '@/components/footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
        <footer>
            <section className={style.footerTop}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg col-md-col-sm-4 col-12">
                            <div className={style.footerBox}>
                                <h5>Quick links</h5>
                                <ul>
                                    <li>
                                        <Link href="#">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms of Use</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Media Room</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Security</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg col-md-col-sm-4 col-12">
                            <div className={style.footerBox}>
                                <h5>COMPANY</h5>
                                <ul>
                                    <li>
                                        <Link href="#">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms of Use</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Media Room</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Security</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg col-md-col-sm-4 col-12">
                            <div className={style.footerBox}>
                                <h5>COMPANY</h5>
                                <ul>
                                    <li>
                                        <Link href="#">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms of Use</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Media Room</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Security</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg col-md-col-sm-4 col-12">
                            <div className={style.footerBox}>
                                <h5>COMPANY</h5>
                                <ul>
                                    <li>
                                        <Link href="#">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms of Use</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Media Room</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Security</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg col-md-col-sm-4 col-12">
                            <div className={style.footerBox}>
                                <h5>COMPANY</h5>
                                <ul>
                                    <li>
                                        <Link href="#">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms of Use</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Media Room</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Security</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.footerBtm}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-auto col-md-auto col-sm-auto col-12">
                            <ul className='d-flex align-items-center'>
                            <li>connect with us</li>
                                <li>
                                    <Link href="#"><Image src="/images/twitter.svg" width={15} height={12}  alt="" /></Link>
                                </li>
                                <li>
                                <Link href="#"><Image src="/images/facebook.svg" width={7} height={12}  alt="" /></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-auto col-md-auto col-sm-auto col-12">
                            <p>. Copyright@ 2023 Company . All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    </>
  )
}

export default Footer