import React from "react";
const ArticleCard = ({article}) => {
  return (
    <React.Fragment>
      
      <img
        src={article.urlToImage}
        alt={article.title}
        
      />
      <h3>{article.title}</h3>
      <p>{article.description?.slice(0, 100)}...</p>
    
    </React.Fragment>
  );
};
export default ArticleCard;
