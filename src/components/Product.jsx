import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import menuIcon from "../img/menu.png";
import cartIcon from "../img/cart.png";

import perfume from "../img/perfume.png";
import multiLift from "../img/multiLift.png";
import styler from "../img/styler.png";
import facePowder from "../img/facePowder.png";

import arrowIcon from "../img/arrow.png";
import arrowLeft from "../img/arrow-left.svg";

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


function Product() {

    const [visible, setVisible] = useState(true);

    return (
        <header className="App-header">


        <div 
            style={{
                width: 387, 
                height: "795px", 
                marginTop: 0, 
                backgroundColor: "#fdfdfd",
                borderRadius: 45 
                }}
            >

        </div>
        
        <Link to="/Home">
        <div style={{
            width: 46,
            height: 46,
            borderRadius: 17,
            backgroundColor: "#F5F5F5",
            position: "absolute",
            marginTop: -750,
            marginLeft: -175
        }}>
        <img
            src={arrowLeft}
                style={{
                    position: "absolute",
                    marginTop: 10,
                    marginLeft: -12
                }}
            >

            
        </img>
        </div>
        
        </Link>



        
        

            <p
              style={{
                position: "absolute",
                width: "270px",
                height: "89px",
                marginLeft: -50,
                marginTop: 0,
                fontFamily: 'Merriweather',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "150%",
                /* or 42px */

                textAlign: "Left",

                color: "#6A515E",
              }}
            >
              Pink Diamond
            </p>
        
        <div style={{
            position: "absolute",
            width: 65,
            height: 30,
            borderRadius: 25,
            backgroundImage: "linear-gradient(291deg, #E4F4FF, #DFF1FF)",
            marginTop: -75,
            marginLeft: 220
        }}>
            <p style={{
                fontFamily: 'Poppins',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "12px",
                color: "#6A515E",
                marginTop: 5
            }}>
                20% off
            </p>
        </div>

        
        


        {
            visible ?
            <>



                
            <div style={{
                display: "flex",
                flexDirection: "row",
                //overflowX: 'scroll',
                maxWidth: 0,

            }}>

                    <img 
                        src={perfume}
                        style={{
                            position: "absolute",
                            width: 200,
                            marginTop: -720,
                            marginLeft: -100
                        }}
                        ></img> 
                
                
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

                <div style={{width: 380, marginTop: -400, marginLeft: -190}}>
                <div style={{display: "flex", flexDirection: "row"}} /* LeftArrow={LeftArrow} RightArrow={RightArrow} */>

                    <div style={{
                        marginLeft: 30
                    }}></div>
                    
                    {
                        ["pink", "$600", "20%", "0.14 Ct"].map((data, key) => (

                            <div style={{
                                width: 60,
                                height: 90,
                                background: "white",
                                marginTop: 0 ,
                                marginRight: 20,
                                borderRadius: 25,
                                marginBottom: 80
                            }}>
    
                                <img 
                                    src={key%2 == 0 ? perfume : multiLift}
                                    style={{
                                        position: "absolute",
                                        width: 40,
                                        marginTop: 10,
                                        marginLeft: -20
                                    }}
                                    ></img> 

                                <p style={{
                                    position: "absolute",
                                    color: "black",
                                    marginTop: 60,
                                    marginLeft: -65,
                                    width: 190,
                                    fontSize: 14
                                }}>{data}</p>
    

            
                            </div>
    
                        

                    ))}
                    </div>
                    </div>

                    <p
                    style={{
                        position: "absolute",
                        width: "270px",
                        height: "89px",
                        marginLeft: -160,
                        marginTop: -300,
                        fontFamily: 'Merriweather',
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "150%",
                        /* or 42px */

                        textAlign: "Left",

                        color: "#6A515E",
                    }}
                    >
                    About
                    </p>

                    <p
                    style={{
                        position: "absolute",
                        width: "320px",
                        height: "89px",
                        marginLeft: -160,
                        marginTop: -275,
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "28px",
                        /* or 42px */

                        textAlign: "Left",

                        color: "#9B97B6",
                    }}
                    >
                    Round Cut Cubic Zircon Stones. 925 Sterling Silver with Rhodium Platting. Cubic zircon is Master Replica of Diamond. Best Stone After masionate and Diamond. Best Material After. Gold is Sterling Silver its main Metal Used. Perfect Gift For you Special Ones
                    </p>
                
                

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
                        width: 310,
                        height: 65,
                        backgroundImage: "linear-gradient(291deg, #8F93EA, #FFAE88)",
                        position: "absolute",
                        marginTop: 690 ,
                        marginLeft: 0,
                        borderRadius: 18,
                        
    
                    }}>

                        <p style={{
                            color: "white",
                            fontFamily: 'Merriweather',
                            fontSize: "18px",
                            fontWeight: "600",
                            marginTop: 20
                        }}>
                            Add to Cart
                        </p>
    
                    </div>

        


        

        



      </header>
    );
  }
  
export default Product;