import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요. 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },    
];

var timer;

class NotificationList extends React.Component {

    // 생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화함
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    // 1초마다 정해진 작업 수행
    // reservedNotifications로부터 알림 데이터를 하나씩 가져와 state에 있는 Notifications 배열에 넣고 업데이트함
    componentDidMount() {
        const {notifications} = this.state;

        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification key={notification.id} id={notification.id} message={notification.message} />
                    )
                })}
            </div>
        );
    }
}

export default NotificationList;