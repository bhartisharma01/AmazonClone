import React from 'react';
// import { Link } from 'react-router-dom';
import { Grid } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import AmazonLogo from '../../Assets/Images/AmazonLogo.png';
import style from '../../Assets/Styles/Header.module.css';

function Header() {
    return (
        <>
            <Grid container spacing={1} className={style.Amazon_Header}>
                <Grid item md={3} className='LogoGrid'>
                    <div className={style.Header_Logo}>
                        <div className={style.Logo}>
                            {/* <Link to="/"> */}
                            <a href="/"><img src={AmazonLogo} alt='Logo' className='AmazonLogo' /></a>
                            {/* </Link> */}
                        </div>
                        <div className={style.Header_option}>
                            <span className={style.Header_option_one}> Hello</span>
                            {/* <RoomOutlinedIcon />  */}
                            <span className={style.Header_option_two}>Select your address</span>
                        </div>
                    </div>


                </Grid>
                <Grid item md={6} className='LogoGrid'>
                    <div className={style.Header_Search}>
                        <div className={style.Header_Search_input}>
                            <div class="input-group">
                                <input type="search" class="form-control rounded" className={style.Header_search_box} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            </div>
                        </div>
                        <div className={style.Header_Search_icon}>
                            <SearchIcon />
                        </div>
                    </div>

                </Grid>
                <Grid item md={3}>
                    <div className={style.Header_options_nav}>
                        <div className={style.Header_option}>
                            <span className={style.Header_option_one}>Hello, Sign in</span>
                            <span className={style.Header_option_two}>Account & Lists</span>
                        </div>
                        <div className={style.Header_option}>
                            <span className={style.Header_option_one}>Returns</span>
                            <span className={style.Header_option_two}>& Orders</span>
                        </div>
                        <div className={style.Header_option}>
                            <span className={style.Header_option_one}>Your </span>
                            <span className={style.Header_option_two}>Prime</span>
                        </div>
                        <div className={style.Header_option_basket}>
                            <ShoppingCartOutlinedIcon className={style.shoppingCart} />
                            <div className={style.Header_option_two}>0</div>
                        </div>
                    </div>
                </Grid>

            </Grid>

        </>
    );
}

export default Header
