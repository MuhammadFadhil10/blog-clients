import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
const NavBack = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	return <IoChevronBack onClick={goBack} />;
};

export default NavBack;
