import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import menuIcon from "../img/menu.png";
import cartIcon from "../img/cart.png";

import perfume from "../img/perfume.png";
import multiLift from "../img/multiLift.png";
import styler from "../img/styler.png";
import facePowder from "../img/facePowder.png";

import dry from "../img/dry.jpg";
import rexona from "../img/rexona.jpg";

import arrowIcon from "../img/arrow.png";
import arrowLeft from "../img/arrow-left.svg";


import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


function MyCart() {

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
            backgroundColor: "white",
            borderWidth: "0.1px",
            borderStyle: "solid",
            borderColor: "rgba(225, 225, 225, 1)",
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
                marginLeft: 165,
                marginTop: -583,
                fontFamily: 'Merriweather',
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "28px",
                lineHeight: "150%",
                /* or 42px */

                textAlign: "Left",

                color: "#6A515E",
              }}
            >
              سبد خرید
            </p>
        
        
        {
            ["Rexona Deo", "Nivea Deep"].map((data, key) => (
                <div style={{
                    position: "absolute",
                    width: 350,
                    height: 130,
                    borderRadius: 25,
                    backgroundColor: "white",
                    marginTop: - (350 - (key*300)),
                    marginLeft: 0
                }}>
                    <p style={{
                        fontFamily: 'Merriweather',
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "18px",
                        color: "#6A515E",
                        marginTop: 20,
                        marginLeft: -30
                    }}>
                        {data}
                    </p>
                    <p style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "13px",
                        color: "#9B97B6",
                        marginTop: -15,
                        marginLeft: -10
                    }}>
                        رکسونا اسپرت مردانه موشن
                    </p>
                    
                    <div>
        
                        <div style={{
                            width: 23.33,
                            height: 23.33,
                            borderRadius: 21,
                            backgroundColor: "#E4F4FF",
                            position: "absolute",
                            marginLeft: 110
                        }}>
                            <p style={{
                                color: "black",
                                marginTop: -2
                            }}>
                                -
                            </p>
                        </div>
        
                        <p style={{
                                color: "black",
                                marginTop: 3,
                                position: "absolute",
                                marginLeft: 145,
                                fontFamily: "Poppins",
                                fontSize: "12px",
                                fontWeight: "400"
                            }}>
                                1
                            </p>
        
                        <div style={{
                            width: 23.33,
                            height: 23.33,
                            borderRadius: 21,
                            backgroundImage: "linear-gradient(160.94deg, #FFAE88 3.83%, #8F93EA 76.26%)",
                            position: "absolute",
                            marginLeft: 160
                        }}>
                            <p style={{
                                color: "black",
                                marginTop: -2
                            }}>
                                +
                            </p>
                        </div>
        
                    </div>

                    <div style={{
                        position: "absolute",
                        width: 65,
                        height: 30,
                        borderRadius: 25,
                        backgroundImage: "linear-gradient(291deg, #E4F4FF, #DFF1FF)",
                        marginTop: -3,
                        marginLeft: 275
                    }}>
                        <p style={{
                            fontFamily: 'Poppins',
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "14px",
                            color: "#6A515E",
                            marginTop: 5
                        }}>
                            ۱۲۴،۰۰۰
                        </p>
                    </div>
                    <img 
                                src={key == 0 ? rexona : dry}
                                style={{
                                    position: "absolute",
                                    width: 80,
                                    marginTop: -65,
                                    marginLeft: -160
                                }}
                                ></img> 
                </div>
            ))
        }
        
        

        <div style={{
                    position: "absolute",
                    width: 350,
                    height: 200,
                    borderRadius: 25,
                    backgroundColor: "white",
                    marginTop: 350 ,
                    marginLeft: 0
                }}>
                    <p style={{
                        fontFamily: 'calibri',
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "22px",
                        color: "#6A515E",
                        marginTop: 0,
                        marginLeft: 0
                    }}>
                        لیست پرداخت
                    </p>

                    <p style={{
                        fontFamily: 'Merriweather',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "17px",
                        color: "#6A515E",
                        marginTop: 20,
                        marginLeft: -250
                    }}>
                        
                        ۲۴۸،۰۰۰
                    </p>

                    <p style={{
                        fontFamily: 'Merriweather',
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "#6A515E",
                        marginTop: -44,
                        marginLeft: 245
                    }}>
                        
                        مجموع اقلام
                    </p>

                    <p style={{
                        fontFamily: 'Merriweather',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "17px",
                        color: "#6A515E",
                        marginTop: 30,
                        marginLeft: -250
                    }}>
                        ۳۵،۰۰۰
                        
                    </p>

                    <p style={{
                        fontFamily: 'Merriweather',
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "16px",
                        color: "#6A515E",
                        marginTop: -44,
                        marginLeft: 245
                    }}>
                        
                        هزینه ارسال
                    </p>

                    <div style={{
                        width: 310,
                        height: 1,
                        backgroundColor: "#EFEFF2",
                        marginLeft: 25
                    }}>

                    </div>

                    <p style={{
                        fontFamily: 'Merriweather',
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#6A515E",
                        marginTop: 20,
                        marginLeft: -240
                    }}>
                        
                        ۲۸۳،۰۰۰
                    </p>

                    <p style={{
                        fontFamily: 'Merriweather',
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#6A515E",
                        marginTop: -35,
                        marginLeft: 200
                    }}>
                        مبلغ قابل پرداخت
                        
                    </p>



                </div>
        


        
            


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
                            ورود به درگاه پرداخت
                            
                        </p>
    
                    </div>

        


        

        



      </header>
    );
  }
  
export default MyCart;