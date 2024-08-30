import React, { useEffect, useState } from "react";
import "./newsDetail.css";
import axios from "axios";
import { useParams } from "react-router";
import Footer from "../../components/footer/Footer";

import NewsCanvas from "./NewsCanvas";

const NewsDetails = () => {
  const params = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    if (params?.slug) getNews();
  }, [params?.slug]);

  const getNews = async () => {
    try {
      const { data } = await axios.get(`/api/v1/news/get-news/${params?.slug}`);
      setNews(data?.news);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="newsD-container mt-28">
        <div className="news-container">
          <div className="news-img1">
            {news._id && (
              <img
                src={`/api/v1/news/news-photo/${news?._id}`}
                className="card-img-top"
                alt={news?.title}
                style={{ filter: "blur(10px)" }}
              />
            )}
          </div>

          <div className="news-img2">
            {news._id && (
              <img
                src={`/api/v1/news/news-photo/${news?._id}`}
                className="card-img-top"
                alt={news?.title}
              />
            )}
          </div>
          <div className="news-article pb-4">
            <div className="news-heading">
              <h1>{news?.title}</h1>
            </div>
            <div
              className="news-desc-large"
              dangerouslySetInnerHTML={{ __html: news?.desc }}
            />
            {/* <pre className="news-desc-large">{news?.desc}</pre> */}
            <NewsCanvas />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default NewsDetails;
