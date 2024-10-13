import styled from "styled-components";

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 6px;
    padding: 8px 18px;
    transition: 0.5s;
    color: black;
    background-color: white;
    font-weight: 500;
    font-size: 14px;

    &:hover{
        transition: 0.3s;
        transform: translateY(-2px);
    }
    &:active{
      transform: translateY(1px);
    }

    ${(props) => {
        switch(props.type){
            case 'primary':
              return `
                background-color: #754ffe;
                color: white;
              `;
            case 'primary-light':
              return `
                background-color: #0ea5e9;
                color: white;
              `;
            case 'success':
              return `
                background-color: #38a169;
                color: white;
              `;
            case 'outline-success':
              return`
                background-color: white;
                color: #754ffe;
                border: 1px solid #754ffe;

                  &:hover{
                    background-color: #754ffe;
                    color: white;
                  }
              `
        }
    }}
`;

export default StyledButton;