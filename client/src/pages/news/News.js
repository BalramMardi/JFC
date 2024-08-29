import React, { useEffect, useState } from "react";
import "./news.css";
import { useNavigate } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";

const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  //getallNews
  const getAllNews = async () => {
    try {
      const { data } = await axios.get("api/v1/news/get-news");
      setNews(data.news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);
  return (
    <div className="news-container">
      <div className="news-title">JFC News</div>
      <div className="news-tiles">
        {news?.map((e, key) => {
          if (key < 8) {
            return (
              <div
                key={key}
                className="newsdata-tiles"
                onClick={() => navigate(`/news/${e.slug}`)}
              >
                <div className="newsdata-tiles-img">
                  {/* <img
                    src={`api/v1/news/news-photo/${e._id}`}
                    alt={e.title}
                    height="100%"
                    width="100%"
                  /> */}
                  <LazyLoadImage
                    alt={e.title}
                    width="100%"
                    height="100%"
                    effect="blur"
                    src={`api/v1/news/news-photo/${e._id}`}
                    placeholderSrc={`api/v1/news/news-photo/${e._id}`}
                  />
                </div>
                <div className="newsdata-tiles-data">
                  <text className="newsdata-tiles-title">
                    {/* {e.title.split(/\s+/).slice(0, 13).join(" ")} ... */}
                    {e.title.split("").slice(0, 50).join("") +
                      (e.title.length > 13 ? "..." : "")}
                  </text>
                  <div
                    className="newsdata-tiles-des"
                    dangerouslySetInnerHTML={{
                      __html: e?.desc.split(/\s+/).slice(0, 15).join(" "),
                    }}
                  >
                    {/* {e.desc.split(/\s+/).slice(0, 15).join(" ")} ... */}
                  </div>
                </div>
                <div className="newsdata-tiles-bottom">
                  <div className="newsdata-team">🔴{e.team} team</div>
                  <div className="newsdata-date">{e.date}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default News;
