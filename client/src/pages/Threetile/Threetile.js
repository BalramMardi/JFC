import React, { useEffect, useState } from "react";
import "./threetile.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Threetile = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Get all news
  const getAllNews = async () => {
    try {
      const { data } = await axios.get("api/v1/news/get-news");
      setNews(data.news);
      setLoading(false); // Stop loading once data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  const threeNews = news.filter((n) => n.tile === true).slice(0, 3);

  const [num, setNum] = useState(2);

  const hover1 = () => setNum(1);
  const hover2 = () => setNum(2);
  const hover3 = () => setNum(3);

  return (
    <>
      {loading ? (
        // Loading placeholder or skeleton
        <div className="skeleton-loader">
          <div className="skeleton-tile skeleton-tile-left"></div>
          <div className="skeleton-tile skeleton-tile-middle"></div>
          <div className="skeleton-tile skeleton-tile-right"></div>
        </div>
      ) : threeNews.length > 0 ? (
        <div className="three-container">
          <div
            className={num === 1 ? "button1 food" : "button"}
            onMouseOver={hover1}
            onClick={() => navigate(`/news/${threeNews[0].slug}`)}
          >
            <img
              src={`api/v1/news/news-photo/${threeNews[0]._id}`}
              alt="first"
              className={num === 1 ? "imgscale" : "imgnotscale"}
              onMouseOver={hover1}
            />
            <div className="info first">
              <div className="title first-title">{threeNews[0].title}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    threeNews[0]?.desc.split(/\s+/).slice(0, 20).join(" ") +
                    " . . .",
                }}
                className="des first-des"
              ></div>
              <div className="time first-time">{threeNews[0].date}</div>
            </div>
            <div className="overlay"></div>
          </div>
          <div
            className={num === 2 ? "button2 food" : "button"}
            onMouseOver={hover2}
            onClick={() => navigate(`/news/${threeNews[1].slug}`)}
          >
            <img
              src={`api/v1/news/news-photo/${threeNews[1]._id}`}
              alt="middle"
              className={num === 2 ? "imgscale" : "imgnotscale"}
              onMouseOver={hover2}
            />
            <div className="info first">
              <div className="title middle-title">{threeNews[1].title}</div>
              <div
                className="des middle-des"
                dangerouslySetInnerHTML={{
                  __html:
                    threeNews[1]?.desc.split(/\s+/).slice(0, 20).join(" ") +
                    " . . .",
                }}
              ></div>
              <div className="time middle-time">{threeNews[1].date}</div>
            </div>
            <div className="overlay"></div>
          </div>
          <div
            className={num === 3 ? "button3 food" : "button"}
            onMouseOver={hover3}
            onClick={() => navigate(`/news/${threeNews[2].slug}`)}
          >
            <img
              src={`api/v1/news/news-photo/${threeNews[2]._id}`}
              alt="third"
              className={num === 3 ? "imgscale" : "imgnotscale"}
              onMouseOver={hover3}
            />
            <div className="info third">
              <div className="title third-title">{threeNews[2].title}</div>
              <div
                className="des third-des"
                dangerouslySetInnerHTML={{
                  __html:
                    threeNews[2]?.desc.split(/\s+/).slice(0, 20).join(" ") +
                    " . . .",
                }}
              ></div>
              <div className="time third-time">{threeNews[2].date}</div>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      ) : (
        <p>not found</p>
      )}
    </>
  );
};

export default Threetile;
