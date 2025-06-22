import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async() => {

      try{
        const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=3d7ed99245e84ea193674c7f127002b4');
        const data = await res.json();
        setArticles(data.articles)
      }
      catch(error){
        console.error('Error Fetching articles', error)
      }
      finally{
        setLoading(false);
      }
    };
    fetchArticles();
  },[])

  if(loading) return <h2>Loading...</h2>
  if(articles.length === 0){
    return<h2>No article found</h2>
  }
  return (
    <React.Fragment>
      <div className="article-list">
        {
          articles.map((article,index) => (
            <div className="single-card" key={index}>
               <Link to={`/article/${index}`} key={index} >
                  <ArticleCard article={article}/>
                </Link>
            </div>
           
          ))
        }
      </div>

    
    </React.Fragment>
  );
};

export default ArticleList;
