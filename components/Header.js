import React from 'react';
// import style from '@/css/app.module.scss'
import style from '@/components/header.module.scss'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <>
        <header className={style.mainHeader}>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <div className={style.logo}>
                  <Link href={'/'}>
                    <Image alt='' src="/images/logo.svg" placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                    </Link>
                </div>
              </div>
              <div className="col-auto">
                {/* <ul className='d-flex suppLog'> */}
                <ul className={`d-flex ${style.suppLog}`}>
                  <li>
                    <Link href="#">
                      <Image src="/images/setting.svg" width={28} height={28} alt="" /> Support
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                    <Image src="/images/login.svg" width={28} height={28} alt="" />Login | Sign up</Link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header



// export default function Header(){
//     return (<div>header</div>);
// }