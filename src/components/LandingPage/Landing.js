import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClock, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import StyledButton from '../Button';
import Input from '../Input';

const LandingDiv = styled.div`
    width: 100%;
    height: 111.2vh;
    display: flex;
    flex-direction: column;
    row-gap: 120px;
    
    .leftRight{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 150px;
        margin-top: 60px;
        padding: 0px 120px;

        .leftSec{
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 680px;
    
            h1{
                font-size: 55px;
                font-weight: 700;
                color: #1e293b;
            }
            b{
                font-size: 18px;
            }
            li{
                display: flex;
                align-items: center;
                gap: 10px;
    
                .icon{
                    color: rgb(245, 158, 11);
                }
            }
            .watchBtn{
                width: 157px;
                height: 51px;
                font-size: 18px;
            }
        }
    
        .rightSec{
            position: relative;
            width: 600px;
            height: 600px;
            padding-top: 100px;
    
            img{
                position: absolute;
                top: 300px;
                left: 225px;
                opacity: 0.5;
                z-index: 1;
            }
    
            .accCard{
                position: absolute;
                width: 526px;
                height: 484px;
                background-color: white;
                z-index: 2;
                
                .accCardDiv{
                    padding: 30px 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    
                    h4{
                        font-weight: 650;
                    }
        
                    .btns{
                        display: flex;
                        align-items: center;
                        gap: 5px;
        
                        .socialBtn{
                            width: 143px;
                            height: 40px;
                            display: flex;
                            justify-content: center;
                            background-color: #f1f5f9;
        
                            &:hover{
                                background-color: lightgrey;
                            }
                        }
                    }
        
                    .orDivider{
                        display: flex;
                        align-items: center;
                        text-align: center;
                        color: #b0bec5;
                        font-size: 13px;
        
                        &::after,
                        &::before{
                            content: "";
                            flex: 1;
                            border-bottom: 1px solid #e0e0e0;
                            margin: 0 10px;
                        }
                    }
        
                    .form{
                        .startBtn{
                            padding: 10px;
                            display: flex;
                            justify-content: center;
                            font-size: 16px;
                        }
                    }
                }
    
    
                .arrow{
                    padding: 20px 40px;
                    border-top: 1px solid #b0bec5;
    
                    p{
                        font-size: 16px;
                        span{
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }

    .bottomSec{
        border-top: 1px solid #e0e0e0;
        padding: 20px 0;
        width: 100%;

        ul{
            display: flex;
            justify-content: space-around;
            font-weight: 500;
            font-size: 18px;
            color: #0d1b2a;

            li{
                display: flex;
                align-items: center;
                gap: 5px;

                .check{
                    background-color: #f7c59f;
                    color: #b8762b;
                    padding: 5px;
                    border-radius: 100%;
                    font-size: 12px;
                }
            }

        }
    }

`;

const Landing = () => {
    return(
        <LandingDiv className="landing">
            <div className="leftRight">
                <div className='leftSec'>
                    <h1>Become a Vanilla JavaScript Developer</h1>
                    <b className='text-secondary'>In this tutorial, we are going to learn about JavaScript (Vanilla JS) - for building incredible, powerful JavaScript applications.</b>

                    <ul className='d-flex flex-column gap-2 text-secondary p-0 mt-3'>
                        <li><i class="bi bi-clock icon"></i> 4 Hours</li>
                        <li><i class="bi bi-camera-video icon"></i> 12 Videos</li>
                        <li><i class="bi bi-people icon"></i> 10,234+ Enrolled</li>
                    </ul>

                    <StyledButton type='success' className='watchBtn'>Watch Preview</StyledButton>
                </div>

                <div className="rightSec">
                    <img src="https://geeks-react.netlify.app/static/media/dots-pattern.2b1b2aa1a6876ac6ce727c050a3c83c5.svg"/>

                    <div className='accCard shadow'>
                        <div className="accCardDiv">
                            <div className='d-flex flex-column gap-4'>
                                <h4>Create Free Account</h4>

                                <div className="btns">
                                    <StyledButton className='socialBtn gap-1'>
                                        <svg viewBox="0 0 24 24" role="presentation" class="text-danger" style={{width: "0.9rem", height: "0.9rem"}}><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" style={{fill: "currentcolor"}}></path></svg>
                                        Google
                                    </StyledButton>

                                    <StyledButton className='socialBtn gap-1'>
                                    <svg viewBox="0 0 24 24" role="presentation" class="text-info" style={{width: "0.9rem", height: "0.9rem"}}><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" style={{fill: "currentcolor"}}></path></svg>
                                        Twitter
                                    </StyledButton>

                                    <StyledButton className='socialBtn gap-1'>
                                    <svg viewBox="0 0 24 24" role="presentation" class="text-primary" style={{width: "0.9rem", height: "0.9rem"}}><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" style={{fill: "currentcolor"}}></path></svg>
                                        Facebook
                                    </StyledButton>
                                </div>
                            </div>

                            <div className='orDivider'>
                                <span>OR</span>
                            </div>

                            <div className="form d-flex flex-column gap-3">
                                <Input  placeholder='Email'/>
                                <Input placeholder='Password'/>
                                <StyledButton type='primary' className='startBtn'>Start Courses for Free</StyledButton>
                            </div>
                        </div>

                        <div className='arrow'>
                            <p className='text-secondary'>By continuing you accept the <span className='text-black'>Terms of Use</span>, <span className="text-black">Privacy Policy</span>, and <span className="text-black">Data Policy</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottomSec shadow-sm">
                <ul>
                    <li><FontAwesomeIcon icon={faCheck} className='check'/> Shareable Certificate</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'/> Flexible Deadlines</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'/> 100% Online Courses</li>
                    <li><FontAwesomeIcon icon={faCheck} className='check'/> Approx.24 hours</li>
                </ul>
            </div>
        </LandingDiv>
    )
}

export default Landing;