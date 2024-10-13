import styled from "styled-components";
import Title from "../Title";

const CommentsDiv = styled.div`
    width: 100%;
    height: 923px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e2e8f0;
    row-gap: 80px;
`;

const CommentCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(636px, 1fr));
    gap: 20px;

    .commentCard{
        width: 636px;
        height: 413px;
        border-radius: 8px;
        transition: 0.5s;

        &:hover{
            transition: 0.5s;
            transform: translateY(-4px);
        }
        
        .commentCardTitle{
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            gap: 20px;
            height: 292px;
            background-color: white;
            border-radius: 8px 8px 0 0;
            padding: 50px 60px;
            font-size: 18.8px;
            font-weight: 500;
            line-height: 30px;
        }
        .author{
            height: 120px;
            background-color: #754ffe;
            border-radius: 0 0 8px 8px;
            position: relative;
            text-align: center;
            color: white;
            padding: 50px;

            img{
                width: 80px;
                height: 80px;
                border-radius: 100%;
                border-color: #754ffe !important;
                position: absolute;
                left: 43%;
                top: -35px;
            }
            p{
                font-size: 14px;
                color: lightgray;
                margin-top: -6px;
            }
        }
        .author2{
            img{
                border-color: #0ea5e9 !important;
            }
            background-color: #0ea5e9;
        }
    }
`

const Comments = () => {
    return(
        <CommentsDiv>
            <Title titelTheme={'Testimonials'} title={'What our learners are saying'} description={'12+ million people are already learning on Geeks'}/>

            <CommentCards>
                <div className="commentCard">
                    <div className="commentCardTitle">
                        <svg viewBox="0 0 24 24" role="presentation" style={{width: '3.3rem', height: '3.3rem', fill: 'lightgray'}}><path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z"></path></svg>
                        <p>The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.</p>
                    </div>
                    <div className="author">
                        <img src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg" className="border border-4" />
                        <h5>Barry Watson</h5>
                        <p>Web Developer,UK</p>
                    </div>
                </div>

                <div className="commentCard">
                    <div className="commentCardTitle">
                        <svg viewBox="0 0 24 24" role="presentation" style={{width: '3.3rem', height: '3.3rem', fill: 'lightblue'}}><path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z"></path></svg>
                        <p>The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.</p>
                    </div>
                    <div className="author author2">
                        <img src="https://geeks-react.netlify.app/static/media/avatar-2.397cdd4b772a83b9166e.jpg" className="border border-4" />
                        <h5>Linda Shenoy</h5>
                        <p>Developer and Bootcamp Instructor</p>
                    </div>
                </div>
            </CommentCards>
        </CommentsDiv>
    )
}

export default Comments;