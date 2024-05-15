import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//import Library from './chapter_03/Library';
//import Clock from './chapter_04/Clock';
//import CommentList from './chapter_05/CommentList';
//import NotificationList from './chapter_06/NotificationList';
//import Accommodate from './chapter_07/Accommodate';
//import ConfirmButton from './chapter_08/ComfirmButton';
//import LandingPage from './chapter_09/LandingPage';
//import AttendanceBook from './chapter_10/AttendanceBook';
//import SingUp from './chapter_11/SignUp';
//import Calculator from './chapter_12/Calculator';
//import ProfileCard from './chapter_13/profileCard';
//import DarkOrLight from './chpater_14/DarkOrLight';

import Blocks from './chapter_15/Blocks';

ReactDOM.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <DarkOrLight />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <ProfileCard />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <SingUp />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <AttendanceBook />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <ConfirmButton />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//     <React.StrictMode>
//       <NotificationList />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);

// ReactDOM.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
