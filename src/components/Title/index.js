import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
    
    p{
        text-transform: uppercase;
        color: rgb(117, 79, 254);
        letter-spacing: 2px;
        font-weight: 500;
    }
    h1{
        font-size: 40px;
        font-weight: 650;
    }
    h5{
        width: 900px;
        text-align: center;
        line-height: 30px;
    }
`

const Title = ({titelTheme, title, description}) => {
    return(
        <TitleDiv>
            <p>{titelTheme}</p>
            <h1>{title}</h1>
            <h5 className='text-secondary'>{description}</h5>
        </TitleDiv>
    )
}

export default Title;