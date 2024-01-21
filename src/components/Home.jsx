import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import menuIcon from "../img/menu.png";
import cartIcon from "../img/cart.png";

import perfume from "../img/perfume.png";
import multiLift from "../img/multiLift.png";
import styler from "../img/styler.png";
import facePowder from "../img/facePowder.png";

import frag from "../img/frag.webp";

import deep from "../img/deep.png";

import arrowIcon from "../img/arrow.png";

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


function Home() {

    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();

    return (
        <header className="App-header">


        <div 
            style={{
                width: 387, 
                height: "795px", 
                marginTop: 0, 
                background: "linear-gradient(160.94deg, #FFFFFF 3.83%, #FCF3F4 76.26%)",
                borderRadius: 45 
                }}
            >

        </div>
        
        <Link to="/">
        <img
            src={menuIcon}
                style={{
                    position: "absolute",
                    marginTop: -750,
                    marginLeft: -158
                }}
            >

            
        </img>
        </Link>

        <Link to="/MyCart">
        <img
            src={cartIcon}
                style={{
                    position: "absolute",
                    marginTop: -760,
                    marginLeft: 130
                }}
            >

            
        </img>
        </Link>

        <p
              style={{
                position: "absolute",
                width: "270px",
                height: "89px",
                marginLeft: -50,
                marginTop: -450,
                fontFamily: 'Merriweather',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "34px",
                lineHeight: "150%",
                /* or 42px */

                textAlign: "Left",

                color: "#6A515E",
              }}
            >
              Cute beauty <br/> for you
            </p>

        
        <div
            style={{
                width: 330,
                height: 70,
                marginTop: -270,
                borderRadius: 18,
                backgroundColor: "#FFFFFF",
                position: "absolute",
            }}
        >   

            <p
                style={{
                    position: "absolute",
                    width: "245px",
                    height: "89px",
                    marginLeft: 40,
                    marginTop: 25,
                    fontFamily: 'Merriweather',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "17px",
                    lineHeight: "150%",
                    /* or 42px */
    
                    textAlign: "Left",
    
                    color: "#BBBBBB",
                  }}
            >
                Search
            </p>

        </div>


        {
            visible ?
            <>
            <div style={{
                display: "flex",
                flexDirection: "row"
            }}>
                
                {
                    [0, 1, 2, 3, 4].map((data, key) => (

                        <div style={{
                            width: 60,
                            height: 30,
                            background: "linear-gradient(160.94deg, #FFAE88 3.83%, #8F93EA 76.26%)",
                            position: "absolute",
                            marginTop: - 480 ,
                            marginLeft: - (150 - (data*70)),
                            borderRadius: 50
        
                        }}>
        
                        </div>

                    ))




                }


            </div>


                
            <div style={{
                display: "flex",
                flexDirection: "row",
                //overflowX: 'scroll',
                maxWidth: 0,

            }}>
                
                
                {/* {
                    ["Diamond Ring", "Gold Ring", "Lancome"].map((data, key) => (

                        <div style={{
                            width: 200,
                            height: 300,
                            background: "white",
                            position: "absolute",
                            marginTop: - 430 ,
                            marginLeft: - (160 - (key*220)),
                            borderRadius: 35
        
                        }}>

                            <p style={{
                                position: "absolute",
                                color: "black",
                                marginTop: 170,
                                marginLeft: 22,
                                fontSize: 24,
                                fontWeight: "700"
                            }}>{data}</p>
                            <p style={{
                                position: "absolute",
                                color: "black",
                                marginTop: 210,
                                marginLeft: 0,
                                fontSize: 14
                            }}>Pure ring with Diamonds (0.1400 Ct)</p>

                            <div style={{
                                width: 130,
                                height: 40,
                                position: "absolute",
                                marginTop: 250,
                                marginLeft: 35,
                                borderRadius: 9,
                                background: "linear-gradient(160.94deg, #FFAE88 3.83%, #8F93EA 76.26%)",
                            }}>
                                <p
                                    style={{
                                        position: "absolute",
                                        marginTop: 5,
                                        marginLeft: 30
                                    }}
                                >$ 600</p>
                            </div>
        
                        </div>

                    ))




                } */}

                <div style={{width: 380, marginTop: -430, marginLeft: -190}}>
                <ScrollMenu style={{}} /* LeftArrow={LeftArrow} RightArrow={RightArrow} */>

                    <div style={{
                        marginLeft: 30
                    }}></div>
                    
                    {
                        ["NIVEA MEN", "FRAGRANCE", "Lancome", "Diamond Ring", "Gold Ring", "Lancome", "Diamond Ring", "Gold Ring", "Lancome"].map((data, key) => (

                            <div 
                                onClick={() => navigate("/Product")}
                                style={{
                                width: 200,
                                height: 300,
                                background: "white",
                                marginTop: 0 ,
                                marginRight: 20,
                                borderRadius: 35,
                                marginBottom: 80
                            }}>
    
                                <img 
                                    src={key%2 == 0 ? deep : frag}
                                    style={{
                                        position: "absolute",
                                        width: 110,
                                        marginTop: 30,
                                        marginLeft: -55
                                    }}
                                    ></img> 
                                <p style={{
                                    position: "absolute",
                                    color: "black",
                                    marginTop: 170,
                                    marginLeft: 22,
                                    fontSize: 24,
                                    fontWeight: "700",
                                    width: 160
                                }}>{data}</p>
                                <p style={{
                                    position: "absolute",
                                    color: "black",
                                    marginTop: 210,
                                    marginLeft: 10,
                                    width: 190,
                                    fontSize: 14
                                }}>DEEP 48h</p>
    
                                <div style={{
                                    width: 130,
                                    height: 40,
                                    position: "absolute",
                                    marginTop: 250,
                                    marginLeft: 35,
                                    borderRadius: 9,
                                    background: "linear-gradient(160.94deg, #FFAE88 3.83%, #8F93EA 76.26%)",
                                }}>
                                    <p
                                        style={{
                                            position: "absolute",
                                            marginTop: 9,
                                            marginLeft: 40
                                        }}
                                    >۸۷،۰۰۰</p>
                                </div>
            
                            </div>
    
                        

                    ))}
                    </ScrollMenu>
                    </div>
                
                

            </div>

            {/* <div style={{
                    width: 500,
                    height: 490,
                    backgroundColor: "black",
                    position: "absolute",
                    marginTop: 300,
                    marginLeft: 887
                }}>

                </div> */}

            
            </>
            :false
        }
        

        <div style={{
                        width: 385,
                        height: 85,
                        background: "white",
                        position: "absolute",
                        marginTop: 705 ,
                        marginLeft: 0,
                        borderRadius: 35
    
                    }}>
    
                    </div>

        <div onClick={() => (setVisible(!visible))}>
        <div 
          style={{
            
            transform: "rotateY(0deg) rotate(45deg)",
            position: "absolute",
            width: "52px",
            height: "52px",
            marginTop: -75,
            marginLeft: -25,
            borderRadius: "20px",
            backgroundImage: "linear-gradient(291deg, #8F93EA, #FFAE88)",
            }}
          >

        
          
          

        </div>

        <div
            
          style={{
            position: "absolute",
            marginTop: -60,
            marginLeft: -15
        }}>
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.6652 11.7783L22.3693 20.7431C19.3906 24.9846 17.9012 27.1053 15.8225 27.1053C13.7438 27.1053 12.2544 24.9846 9.27569 20.7431L2.89939 11.6639C1.76251 10.045 1.19406 9.23562 1.0427 8.34616C0.954465 7.82771 0.969338 7.29695 1.08646 6.78425C1.2874 5.90467 1.90028 5.12836 3.12603 3.57573C3.94142 2.54291 4.34911 2.0265 4.87314 1.67579C5.18067 1.46997 5.51527 1.30782 5.86737 1.19398C6.46735 1 7.12529 1 8.44118 1H23.064C24.3881 1 25.0501 1 25.6545 1.19708C25.9796 1.30308 26.2897 1.45031 26.5773 1.63518C27.1121 1.97891 27.5306 2.49192 28.3676 3.51793C29.6712 5.11594 30.323 5.91494 30.5309 6.83036C30.6418 7.31875 30.66 7.82363 30.5845 8.31874C30.4431 9.24674 29.8505 10.0906 28.6652 11.7783Z" stroke="#FEFBFC" stroke-width="1.5"/>
            <path d="M26.1423 1.17255L21.3267 7.53594H30.4266" stroke="#FEFBFC" stroke-width="1.5"/>
            <path d="M15.3058 1L10.3182 7.53537H20.4653" stroke="#FEFBFC" stroke-width="1.5"/>
            <path d="M16.1641 1L21.1516 7.53537H11.0046" stroke="#FEFBFC" stroke-width="1.5"/>
            <path d="M5.33107 1.17255L10.1466 7.53594H1.21793" stroke="#FEFBFC" stroke-width="1.5"/>
            <path d="M10.3182 7.36349L14.8503 25.9165C15.0987 26.9335 16.5447 26.9335 16.7931 25.9165L21.3252 7.36349" stroke="#FEFBFC" stroke-width="1.5"/>
            </svg>
        </div>


        </div>

        
        <div
            
          style={{
            position: "absolute",
            marginTop: 700,
            marginLeft: 240
        }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>

        <div
            
          style={{
            position: "absolute",
            marginTop: 700,
            marginLeft: -240
        }}>
            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


        </div>


        

        



      </header>
    );
  }
  
export default Home;