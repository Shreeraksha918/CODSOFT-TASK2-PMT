import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../redux/taskSlice';
import ListCard from './ListCard';
import './tasklist.scss';

const TaskList = () => {
	const auth = useSelector((state) => state.auth);
	const tasks = useSelector((state) => state.task);

	const { currentUser } = auth;
	const { AllTasks } = tasks;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllTasks(currentUser.token, currentUser.id));
	}, [dispatch, currentUser.token, currentUser.id]);

	return (
		<div>
			<ul className='list-header'>
				<li>
					<h4>Id</h4>
				</li>
				<li>
					<h4>Issue Name</h4>
				</li>
				<li>
					<h4>Status</h4>
				</li>
				<li>
					<h4>Action</h4>
				</li>
			</ul>
			{Object.values(AllTasks).map((item) => {
				return <ListCard key={item._id} item={item} />;
			})}
		</div>
	);
};

export default TaskList;
