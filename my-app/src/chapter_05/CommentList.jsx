import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "정혜민",
        comment: "안녕하세요. 정혜민입니다.",
    },
    {
        name: "유재석",
        comment: "안녕하세요. 유재석입니다.",
    },
    {
        name: "강호동",
        comment: "안녕하세요. 강호동입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;