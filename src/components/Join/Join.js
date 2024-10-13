import styled from "styled-components";
import Title from "../Title";
import StyledButton from "../Button";

const JoinDiv = styled.div`
    width: 100%;
    height: 440px;
    background-color: #e2e8f0;
    background-image: url('https://geeks-react.netlify.app/static/media/course-graphics.171832eb5421ed89e4654944532c6886.svg');
    background-position: center;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .titleDiv{
        h5{
            width: 750px;
        }
    }
    .btnsDiv{
        display: flex;
        gap: 10px;
    }
`

const Join = () => {
    return(
        <JoinDiv>
            <div className="titleDiv">
                <Title title={'Join more than 1 million learners worldwide'} description={'Effective learning starts with assessment. Learning a new skill is hard work—Signal makes it easier.'}/>
            </div>

            <div className="btnsDiv">
                <StyledButton type="primary">Start Learning for Free</StyledButton>
                <StyledButton type="primary-light">Geeks for Business</StyledButton>
            </div>
        </JoinDiv>
    )
};

export default Join;