import styled from "styled-components";
import Title from "../Title";
import Accordion from 'react-bootstrap/Accordion';
import StyledButton from "../Button";


const QuestionDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 100px;
    padding: 140px;

    .accordion{
        width: 660px;

        .accordion-item{
            border: none !important;
            border-bottom: 1px solid lightgray !important;
            margin-top: 10px !important;
            
            .accordion-body{
                font-size: 17px;
            }
            
            .accordion-button{
                color: black !important;
                background-color: white !important;
            }
        }
    }

    button{
        margin-top: -20px;
    }
`

const Question = () => {
    return(
        <QuestionDiv>
            <Title titelTheme={'Need to Know'} title={'Frequently Asked Questions.'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non accumsan in, tempor dictum neque.'}/>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h5>What is the cost of online course</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        Create beautiful website with this Geeks UI template. Get started building a site today.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h5>What do I need to take a course?</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h5>What do I receive for taking this course?</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <h5>What will get if I subscribe to this Certificate?</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <StyledButton type="outline-success">More questions? Visit the Learner Help Center.</StyledButton>
        </QuestionDiv>
    )
};
export default Question;