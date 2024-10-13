import styled from "styled-components";
import Title from "../Title";

// section styled
const LearnDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 100px;
    width: 100%;
    height: 1097px;
    background-color: #e2e8f0;

    .cards{
        height: 579px;
        display: grid;
        grid-template-columns: repeat(2, minmax(636px, 1fr));
        gap: 20px;
    }
`;

// card styled
const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 40px;
  max-width: 636px;
  max-height: 265px;
`;

const CardHeader = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Icon = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-color: #754ffe;
`;

const CourseTitle = styled.h4`
  font-size: 28px;
`;

const CourseDetails = styled.p`
  color: #6c757d;
  margin: 5px 0 0 0;
  text-transform: uppercase;
  display: flex;
  gap: 20px;
  font-size: 12px;
  font-weight: 500;
`;

const Badge = styled.span`
  background-color: #ffc107;
  color: white;
  padding: 2px 10px;
  border-radius: 5px;
  margin: -10px 0 0 -15px;
`;

const CardBody = styled.p`
  font-size: 16.5px;

`;

const ViewDetailsLink = styled.a`
  color: #754ffe;

  &:hover {
    text-decoration: underline;
  }
`;

const cardsData = [
    {
        imgSrc: 'https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg',
        title: 'Introduction to JavaScript',
        details1: 'courses - 1',
        details2: '6 lessons',
        details3: '1 hour 12 min',
        bagde: <Badge>Free</Badge>,
        bodyText: 'In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare.',
    },
    {
        imgSrc: 'https://geeks-react.netlify.app/static/media/feature-icon-2.35b3b77394deb3cd7ebf78b8464fab62.svg',
        title: 'JavaScript Beginning',
        details1: 'courses - 2',
        details2: '4 lessons',
        details3: '32 min',
        bodyText: 'Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada.',
    },
    {
        imgSrc: 'https://geeks-react.netlify.app/static/media/feature-icon-3.7cfb20a1964dfcd934da6b2267d68bc9.svg',
        title: 'Variables and Constants',
        details1: 'courses - 3',
        details2: '8 lessons',
        details3: '10 min',
        bodyText: 'Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs.',
    },
    {
        imgSrc: 'https://geeks-react.netlify.app/static/media/feature-icon-4.4e54d5c3aeac9d9d151971629ba18abf.svg',
        title: 'Types and Operators',
        details1: 'courses - 4',
        details2: '10 lessons',
        details3: '32 min',
        bodyText: 'In lobortis quam eu augue spendisse imperdiet nec orci ipsum, tempus pharetra posuere imperdiet, lacinia a nisl.',
    }
]


const Learn = () => {
    return(
        <LearnDiv >
            <Title titelTheme={'Course Description'} title={'What will you learn?'} description={'Vanilla JS is a fast, lightweight, cross-platformframework for building incredible, powerful JavaScript applications.'}/>

            <div className="cards">
                {cardsData.map((item) => (
                    <Card className="shadow-sm">
                        <CardHeader>
                            <Icon src={item.imgSrc} alt="Icon" />
                            <div>
                                <CourseTitle>{item.title}</CourseTitle>
                                <CourseDetails><span className="text-black">{item.details1}</span>  <span>{item.details2}</span>  <span>{item.details3}</span></CourseDetails>
                            </div>
                            {item.bagde}
                        </CardHeader>
                        <CardBody className="text-secondary mt-4">
                            {item.bodyText}
                        </CardBody>
                        <ViewDetailsLink href="#">View Chapter Details +</ViewDetailsLink>
                    </Card>
                ))}
            </div>
        </LearnDiv>
    )
}

export default Learn;