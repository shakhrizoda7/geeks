import styled from "styled-components";

const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    width: 100%;
    height: 360px;
    padding: 70px 100px;
    font-size: 15px;
    color: #475569;
    
    .top-div{
        display: flex;
        justify-content: space-between;
        
        .aboutSite{
            width: 415px;
        }

        .liImg{
            img{
                width: 147px;
            }
        }
    }
    .bottom-div{
        border-top: 1px solid lightgray;

        ul{
            font-size: 15px;

            a{
                color: #475569;
            }
        }
    }

`

const Footer  = () => {
    return(
        <FooterDiv>
            <div className="top-div">
                <div className="aboutSite ">
                    <img src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg"/>
                    <p className="mt-4">Geek is feature-rich components and beautifully Bootstrap UIKit for developers, built with bootstrap responsive framework.</p>

                    <div className="d-flex gap-2">
                        <a href="#"><svg viewBox="0 0 24 24" role="presentation" style={{width: '1.05rem', height: '1.05rem', fill: 'gray'}}><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path></svg></a>
                        <a href="#"><svg viewBox="0 0 24 24" role="presentation" style={{width: '1.05rem', height: '1.05rem', fill: 'gray'}}><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path></svg></a>
                        <a href="#"><svg viewBox="0 0 24 24" role="presentation" style={{width: '1.05rem', height: '1.05rem', fill: 'gray'}}><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path></svg></a>
                    </div>
                </div>

                <div className="d-flex flex-column gap-3">
                    <h5>Company</h5>

                    <ul className="p-0 d-flex flex-column gap-2">
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="d-flex flex-column gap-3">
                    <h5>Support</h5>

                    <ul className="p-0 d-flex flex-column gap-2">
                        <li>Help and Support</li>
                        <li>Become Instructor</li>
                        <li>Get the app</li>
                        <li>FAQ’s</li>
                        <li>Tutorial</li>
                    </ul>
                </div>

                <div className="d-flex flex-column gap-3">
                    <h5>Get in touch</h5>

                    <ul className="p-0 d-flex flex-column gap-2">
                        <li>339 McDermott Points Hettingerhaven, NV <br /> 15283</li>
                        <li className="mt-4">Email: <a href="#" className="text-decoration-none">support@geeksui.com</a></li>
                        <li>Phone: <b className="text-black">(000) 123 456 789</b></li>

                        <div className="d-flex gap-2 liImg mt-3">
                            <li><a href="#"><img src="https://geeks-react.netlify.app/static/media/appstore.b464860c93223b3fc15fc7d026bcdca0.svg"/></a></li>
                            <li><a href="#"><img src="https://geeks-react.netlify.app/static/media/playstore.f23c3dcbde32e767203274d4b1749cc7.svg"/></a></li>
                        </div>
                    </ul>
                </div>
            </div>

            <div className="bottom-div d-flex justify-content-between pt-2">
                <div>
                    <p>© 2024 Geeks-UI, Inc. All Rights Reserved</p>
                </div>

                <div>
                    <ul className="d-flex gap-4">
                        <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
                        <li><a href="#" className="text-decoration-none">Cookie Notice</a></li>
                        <li><a href="#" className="text-decoration-none">Do Not Sell My Personal Information</a></li>
                        <li><a href="#" className="text-decoration-none">Terms of Use</a></li>
                    </ul>
                </div>
            </div>
        </FooterDiv>
    )
}

export default Footer;