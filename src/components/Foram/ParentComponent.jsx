import React, { useState } from "react";
import { Subjects } from "./Subjects";
import { QuestionCreatePost } from "./QuestionCreatePost";

export function ParentComponent() {
    const [showCreatePost, setShowCreatePost] = useState(false);

    const handleCreateQuestionClick = () => {
        setShowCreatePost(true);
    };

    const handleCloseCreatePost = () => {
        setShowCreatePost(false);
    };

    return (
        <div>
            <Subjects onCreateQuestionClick={handleCreateQuestionClick} />
            {showCreatePost && <QuestionCreatePost onClose={handleCloseCreatePost} />}
        </div>
    );
}
