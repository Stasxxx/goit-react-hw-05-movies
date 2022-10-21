import { BsArrowLeft } from 'react-icons/bs';
import { GoBack, Container } from './BackLink.styled';
// import { Link } from 'react-router-dom';

export const BackLink = ({to, children}) => {
    return (
        <Container>
        <GoBack to={to}>
            <BsArrowLeft size="20" />
            {children}
            </GoBack>
        </Container>
    )
}