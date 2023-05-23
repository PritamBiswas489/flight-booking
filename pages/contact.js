import React from 'react'
import styles from '@/css/contact.module.scss'
import cls from "classnames";
import Header from '@/components/Header';

const contact = () => {
  return (
   <>
    <Header/>

   <section>
    <div className="container">
    <div className="row">
    <div className="col-lg-3">Hello</div>
    <div className="col-lg-3">
      <div className={cls(styles.classone, styles.classtwo)}>Two</div>
    </div>
    <div className="col-lg-3">
      <div className={`${styles.classone} ${styles.classtwo}`}>Three</div>
    </div>
    </div>
    </div>
   </section>
   
   

  
   </>
    
  
  )
}

export default contact