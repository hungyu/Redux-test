import React from 'react'
import { fetchNotifications } from '../notifications/notificationsSlice'
import { useDispatch} from 'react-redux'

const Navbar = props => {
	const dispatch = useDispatch()

	const fetchNewNotifications = () => {
		dispatch(fetchNotifications())
	}

	return (
		<button onClick={fetchNewNotifications}>
			Refresh Notification
		</button>
	)
}

export default Navbar