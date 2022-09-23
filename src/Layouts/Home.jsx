import React from 'react';
import ProductsOne from '../Components/ProductsOne';
import slider1 from '../Assets/Images/slider1.jpg';
import style from '../Assets/Styles/Home.module.css';
import { ProductsAPI } from '../api/ProductsAPI';
import { Grid } from '@mui/material';


function Home() {
    return (
        <>
            <Grid container spacing={1} className={style.Home__page}>
                <div className={style.home_container}>
                    <div className="home">
                        {/* <Link to='/'> */}
                            <img src={slider1} alt="Slider1" className={style.home_slider} />
                        {/* </Link> */}
                    </div>
                    <div className={style.product_row}>
                        <div className={style.wrapper}>
                            {ProductsAPI.map((val, index) => {
                                return (
                                    <ProductsOne
                                        ProductName={val.ProductName}
                                        ProductImage={val.ProductImage}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Products' Row2*/}
                    <div className={style.product_row}>
                        <div className={style.wrapper}>
                            {ProductsAPI.map((val, index) => {
                                return (
                                    <ProductsOne
                                        ProductName={val.ProductName}
                                        ProductImage={val.ProductImage}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    )
}

export default Home
