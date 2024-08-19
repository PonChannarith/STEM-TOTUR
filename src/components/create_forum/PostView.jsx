import React from 'react';
import DOMPurify from 'dompurify';

const PostView = ({ title, description }) => {
  return (
    <div className="post-view">
      <h1 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }} />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
    </div>
  );
};

export default PostView;
