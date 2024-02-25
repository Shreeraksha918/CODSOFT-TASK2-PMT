import './Sidebar.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;

	return (
		<div>
			<ul className='sidebar'>
				<li className='list-item'>
					<h3>{currentUser.username}</h3>
				</li>
				<li className='list-item'>
					<Link to='/dashboard' ><h4>Dashboard</h4></Link>
				</li>
				<li className='list-item'>
					<Link to='/settings'><h4>Settings</h4></Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
