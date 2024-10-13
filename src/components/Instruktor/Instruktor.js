import styled from "styled-components";

const InstructorDiv = styled.div`
    width: 100%;
    height: 717px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;

    .titleDiv{
        width: 550px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h1{
            font-weight: 700;

            span{
                color: rgb(117, 79, 254);
            }
        }
        p{
            font-size: 22px;
        }

        .raiting{
            border-top: 1px solid #b0bec5;
            padding-top: 40px;

            h2{
                font-weight: 700;
            }
            p{
                font-size: 17px;
            }
        }
    }
`;

const Sponsor = styled.div`
    display: flex;
    width: 100%;
    height: 374px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 50px;

    .sponsoredImg{
        display: flex;
        align-items: center;
        gap: 100px;
    }
`;

const Description2 = styled.p`
    text-transform: uppercase;
    color: rgb(117, 79, 254);
    letter-spacing: 2px;
    font-weight: 500;
`

const Instructor = () =>{
    return(
        <div className="instructor">
            <InstructorDiv>
                <div className="titleDiv">
                    <Description2>your instructor</Description2>
                    <h1>Hi, I’m <span>James Davies</span>, <br /> I will be taking you through lessons.</h1>
                    <p className="text-secondary">Create beautiful website with this Geeks UI <br /> template. Get started building a site today.</p>

                    <div className="raiting d-flex gap-5">
                        <div>
                            <h2>45</h2>
                            <p className="text-secondary">Lessons</p>
                        </div>
                        <div>
                            <h2>10,500</h2>
                            <p className="text-secondary">Students</p>
                        </div>
                        <div>
                            <h2>12+</h2>
                            <p className="text-secondary">Learning Hours</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://geeks-react.netlify.app/static/media/instructor-img.1ed9cc40ee4734876e12.png" alt="" />
                </div>
            </InstructorDiv>

            <Sponsor>
                <Description2>Trusted by top-tier product companies</Description2>

                <div className="sponsoredImg">
                    <img src="https://geeks-react.netlify.app/static/media/gray-logo-stripe.6b556d06bcc209f1c051bbdb399131f0.svg" alt="" />
                    <img src="https://geeks-react.netlify.app/static/media/gray-logo-airbnb.5908aac3e8062333869d580f4b2f3d59.svg" alt="" />
                    <img src="https://geeks-react.netlify.app/static/media/gray-logo-discord.2e0bae69d24feccf4efdd3f80746031b.svg" alt="" />
                    <img src="https://geeks-react.netlify.app/static/media/gray-logo-intercom.870602b99ded665ecf0c2d5b2ffeb8c4.svg" alt="" />
                    <img src="https://geeks-react.netlify.app/static/media/gray-logo-pinterest.928eaa29223a809cc5554847139d26a9.svg" alt="" />
                    <img src="https://geeks-react.netlify.app/static/media/gray-logo-netflix.a47db6eaf2de7327844f27eb230da39c.svg" alt="" />
                </div>
            </Sponsor>
        </div>
    )
}

export default Instructor;