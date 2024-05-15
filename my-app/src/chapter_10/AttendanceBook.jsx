import React from "react";

const students = [
    {
        id: 1,
        name: "하나",
    },
    {
        id: 2,
        name: "둘",
    },
    {
        id: 3,
        name: "셋",
    },
    {
        id: 4,
        name: "넷",
    },
];

// 파라미터 방식으로 key 설정
function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}

        </ul>
    );
}

// index 방식으로 key 설정
// function AttendanceBook(props) {
//     return (
//         <ul>
//             {students.map((student, index) => {
//                 return <li key={index}>{student.name}</li>;
//             })}
//         </ul>
//     );
// }

export default AttendanceBook;