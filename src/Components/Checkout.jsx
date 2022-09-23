import React from 'react'
import Grid from '@mui/material/Grid';
import style from '../Assets/Styles/Checkout.module.css';


function Checkout() {
    return (
        <>
            <div className={style.checkout__page}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <div className={style.checkout__left}>
                            <div className="shopping__cart">
                                <h1 className={style.shopping__cart__heading}>Shopping Cart</h1>
                                <a href="#" className={style.shopping__select}>Deselect all items</a>
                                <p className={style.checkout__price__heading}>Price</p>
                            </div>
                            <div className={style.shopping__list}>
                                <div className="shopping__image">
                                    <img src="https://m.media-amazon.com/images/I/61MPuPo79zL._AC_AA180_.jpg" alt="" />
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={9}>
                                        <div className="shoppingProduct__details">
                                            <h4 className={style.shopping__product__name}>
                                                Fire-Boltt Beam Bluetooth Calling Smartwatch with 1.72” Full Touch & 320*380 Pixel Resolution, AI Voice Assistant, IP68 Rating, 60 Sports Modes…
                                            </h4>
                                            <p className={style.in__stock}>In stock</p>
                                            <p className={style.free_shipping}>Eligible for FREE Shipping</p>
                                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" className="amazon__fulfiller" />
                                            <div className="product__keep">
                                                <span className="product__quantity">
                                                    <select class="form-select" className={style.checkout__quantity} aria-label="Qty">
                                                        <option selected>Qty: 1</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </span>
                                                <a href="#" className={style.product__delete}>Delete</a>
                                                <a href="#" className={style.product__save}>Save for later</a>
                                                <a href="#" className={style.product__more}>See more like this</a>
                                            </div>

                                        </div>
                                    </Grid>
                                    <Grid item xs={3} className={style.price_box}>
                                        <div className={style.product__price}> Rs 5000</div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={style.shopping__list}>
                                <div className="shopping__image">
                                    <img src="https://m.media-amazon.com/images/I/61MPuPo79zL._AC_AA180_.jpg" alt="" />
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={9}>
                                        <div className="shoppingProduct__details">
                                            <h4 className={style.shopping__product__name}>
                                                Fire-Boltt Beam Bluetooth Calling Smartwatch with 1.72” Full Touch & 320*380 Pixel Resolution, AI Voice Assistant, IP68 Rating, 60 Sports Modes…
                                            </h4>
                                            <p className={style.in__stock}>In stock</p>
                                            <p className={style.free_shipping}>Eligible for FREE Shipping</p>
                                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" className="amazon__fulfiller" />
                                            <div className="product__keep">
                                                <span className="product__quantity">
                                                    <select class="form-select" className={style.checkout__quantity} aria-label="Qty">
                                                        <option selected>Qty: 1</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </span>
                                                <a href="#" className={style.product__delete}>Delete</a>
                                                <a href="#" className={style.product__save}>Save for later</a>
                                                <a href="#" className={style.product__more}>See more like this</a>
                                            </div>

                                        </div>
                                    </Grid>
                                    <Grid item xs={3} className={style.price_box}>
                                        <div className={style.product__price}> Rs 5000</div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={style.checkout__right}>
                            <div className={style.subtotal_details}>
                                <h3 className={style.product__subtotal}>Subtotal (10 items): </h3>
                                <p className={style.subtotal__price}>Rs 10, 000 </p>
                            </div>
                            <div className={style.buy__now__btn}>
                                <button class="btn btn-primary" className={style.buy__btn} type="button">Proceed to Buy</button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Checkout
