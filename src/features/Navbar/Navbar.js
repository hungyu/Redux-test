import React from 'react'
import { fetchNotifications } from '../notifications/notificationsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllNotifications } from '../notifications/notificationsSlice'

const Navbar = props => {
	const dispatch = useDispatch()

	const fetchNewNotifications = () => {
		dispatch(fetchNotifications())
	}

	const notifications = useSelector(selectAllNotifications)
	const numUnreadNotifications = notifications.filter(n => !n.read).length

  let unreadNotificationsBadge

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    )
  }

	return (
		<div>
			<div>
				{unreadNotificationsBadge}
			</div>
			<button onClick={fetchNewNotifications}>
				Refresh Notification
			</button>
		</div>
	)
}

export default Navbar