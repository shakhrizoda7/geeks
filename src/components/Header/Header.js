import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEllipsis, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import StyledButton from '../Button';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;

    .navLeft{
        display: flex;
        align-items: center;

        img{
            cursor: pointer;
        }

        nav{
            ul{
                display: flex;
                font-size: 15px;
                font-weight: 500;

                li{
                    cursor: pointer;
                }
            }
        }

        .searchCourses{
            padding: 6px 0px 6px 40px;

        }
    }

    .navRight{
        display: flex;
        align-items: center;

        i{
            font-size: 28px;
            cursor: pointer;
        }
    }
`;

const Header = () => {
    return(
        <HeaderDiv className="header shadow-sm px-3">
            <div className="navLeft gap-4">
                <img src="https://geeks-react.netlify.app/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg" />

                <nav>
                    <ul className='gap-3 m-0'>
                        <li>Browse <FontAwesomeIcon icon={faChevronDown}/></li>
                        <li>Landings <FontAwesomeIcon icon={faChevronDown}/></li>
                        <li>Pages <FontAwesomeIcon icon={faChevronDown}/></li>
                        <li>Accounts <FontAwesomeIcon icon={faChevronDown}/></li>
                        <li><FontAwesomeIcon icon={faEllipsis} /></li>
                    </ul>
                </nav>

                <div className='position-relative'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='position-absolute ms-3 mt-2 text-secondary'/>
                    <Input placeholder='Search Courses' className='searchCourses'/>
                </div>
            </div>

            <div className="navRight gap-2">
                <i class="bi bi-brightness-high-fill text-secondary bg-light px-2 rounded-circle"></i>
                <StyledButton className='shadow-sm'>Sign In</StyledButton>
                <StyledButton type="primary">Sign Up</StyledButton>
            </div>
        </HeaderDiv>
    )
}

export default Header;