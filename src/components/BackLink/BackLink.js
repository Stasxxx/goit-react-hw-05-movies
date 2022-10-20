import { BsArrowLeft } from 'react-icons/bs';
import { GoBack } from './BackLink.styled';
// import { Link } from 'react-router-dom';

export const BackLink = ({to, children}) => {
    return (
        <GoBack to={to}>
            <BsArrowLeft size="24" />
            {children}
        </GoBack>
    )
}