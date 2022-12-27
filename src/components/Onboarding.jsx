import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import arrowIcon from "../img/arrow.png";

import perfume from "../img/perfume.png";
import multiLift from "../img/multiLift.png";
import styler from "../img/styler.png";
import facePowder from "../img/facePowder.png";

import union from "../img/Union.svg";

function Onboarding() {

  const [activeKey, setActiveKey] = useState(0);
  const navigate = useNavigate();
  
    return (
        <header className="App-header">
        
        {
          activeKey === 0 ?
          <img 
            src={perfume}
          style={{
            position: "absolute",
            width: 400,
            marginTop: -330
          }}
        ></img> :
        false
        }

        {
          activeKey === 1 ?
          <img 
            src={multiLift}
          style={{
            position: "absolute",
            width: 400,
            marginTop: -280
          }}
        ></img> :
        false
        }

        {
          activeKey === 2 ?
          <img 
            src={styler}
          style={{
            position: "absolute",
            width: 400,
            marginTop: -280
          }}
        ></img> :
        false
        }

        {
          activeKey === 3 ?
          <img 
            src={facePowder}
          style={{
            position: "absolute",
            width: 400,
            marginTop: -280
          }}
        ></img> :
        false
        }
        


        <div style={{width: 387, height: 472, backgroundColor: "#F2CAD2", borderRadius: 60 }}>

        </div>

        <div style={{width: 387, height: 350, marginTop: -30, backgroundColor: "#F2CFD9", borderRadius: 60 }}>

        </div>

        

        <div 
          style={{
            position: "absolute",
            width: "337px",
            height: "85px",
            top: "58%", 
            borderRadius: "50% / 100% 100% 0 0",

            }}
          >

        </div>

        <img 
            src={union}
          style={{
            position: "absolute",
            width: 400,
            marginTop: 450,
            width: 350
          }}
        ></img>

        <div 
          style={{
            

            position: "absolute",
            width: "340.3px",
            height: "198.26px",
            borderRadius: "25px",
            marginTop: 500
            }}
          >

        <div>

          {

          
            [0, 1, 2, 3].map((data, key) => (

              <div style={{
                width: 10,
                height: 10,
                background: key == activeKey ? "rgba(160, 103, 132, 1)" : "rgba(160, 103, 132, 0.16)",
                position: "absolute",
                marginTop: -20,
                marginLeft: (125 + (key*25)),
                borderRadius: 10
              }}>
    
              </div>



            ))

          }
          
        </div>

            <p
              style={{
                position: "absolute",
                width: "295px",
                height: "89px",
                left: "20px",
                top: "0px",

                fontFamily: 'Merriweather',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "150%",
                /* or 42px */

                textAlign: "center",

                color: "#6A515E",
              }}
            >
              {
                activeKey == 0 ?
                "The best Perfumes find in labelle.ir!"
                : false
              }
              {
                activeKey == 1 ?
                "Lift your skin with multi-lift cream!"
                : false
              }
              {
                activeKey == 2 ?
                "Darker eyelashes w/ sourcils styler!"
                : false
              }
              {
                activeKey == 3 ?
                "Real scent of flowers in spring!"
                : false
              }
              
            </p>

        </div>

        {/* <div 
          style={{
            

            position: "absolute",
            width: "90px",
            height: "90px",
            top: "81%",
            borderRadius: "50px",
            backgroundColor: "#f8e7ec",
            }}
          >

        </div> */}

    {/* <Link to="Home" style={{marginLeft: -60}}> */}
    <div
      onClick={() => (
        activeKey < 3 ?
        setActiveKey(activeKey+1) :
        navigate("Home")
        )}
    >
        <div 
          style={{
            marginLeft: -30,
            marginTop: -105,
            transform: "rotateY(0deg) rotate(45deg)",
            position: "absolute",
            width: "60px",
            height: "60px",
            borderRadius: "20px",
            backgroundImage: "linear-gradient(291deg, #8F93EA, #FFAE88)",
            }}
          >

        </div>

        
        <div 
          style={{
            marginLeft: -29,
            marginTop: -104,
            transform: "rotateY(0deg) rotate(45deg)",
            position: "absolute",
            width: "58px",
            height: "58px",
            borderRadius: "20px",
            backgroundColor: "#f8e7ec",
            }}
          >

        </div>

        <div 
          style={{
            marginLeft: -26,
            marginTop: -101,
            transform: "rotateY(0deg) rotate(45deg)",
            position: "absolute",
            width: "52px",
            height: "52px",
            borderRadius: "20px",
            backgroundImage: "linear-gradient(291deg, #8F93EA, #FFAE88)",
            }}
          >
          
          

        </div>

        
        <img 
            src={arrowIcon}
          style={{
            marginLeft: -17,
            marginTop: -85,
            position: "absolute",

          }}
        ></img>

        
        
    </div>
    {/* </Link> */}

      </header>
    );
  }
  
export default Onboarding;