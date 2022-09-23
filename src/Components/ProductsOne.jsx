import React from 'react'
//import ProductImages from '../Assets/Images/Products/index';

import style from '../Assets/Styles/ProductOne.module.css';
function ProductsOne(props) {
  return (
    <>
      <div className={style.product_one}>

        {/* <h2 className={style.product_heading}>{props.ProductHeading}</h2> */}
        <h2 className={style.product_heading}>Car & bike essentials | Up to 60% off</h2>
        <div className={style.product_block}>
      
          <div className={style.product_block_odd}>
            <img src={props.ProductImage} alt="" className={style.product_img} />
            <p className={style.product_name}>{props.ProductName}</p>
          </div>
          <div className={style.product_block_even}>
          <img src={props.ProductImage} alt="" className={style.product_img} />
            <p className={style.product_name}>{props.ProductName}</p>
          </div>
          <div className={style.product_block_odd}>
            <img src={props.ProductImage} alt="" className={style.product_img} />
            <p className={style.product_name}>{props.ProductName}</p>
          </div>
          <div className={style.product_block_even}>
            <img src={props.ProductImage} alt="" className={style.product_img} />
            <p className={style.product_name}>{props.ProductName}</p>
          </div>
        </div>
        <div className="product_btn">
          <a href="#" className={style.product_link}>See more</a>
        </div>
      </div>


    </>
  )
}

export default ProductsOne
