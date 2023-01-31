import React, { useState, useEffect } from "react";
import axios from "axios";
import bookmarkImage from "./bookmark.png";

const QuoteGenerator = (props) => {
  const [quote, setQuote] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [bookmarked, setBookmarked] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTags();
    fetchQuote();
  }, []);

  const fetchTags = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("https://api.quotable.io/tags");
      setTags(data.tags);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const url = selectedTag
        ? `https://api.quotable.io/random?tag=${selectedTag}`
        : "https://api.quotable.io/random";
      const { data } = await axios.get(url);
      setQuote(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
    fetchQuote();
  };

  const handleBookmark = () => {
    props.setBookmarks([...props.bookmarks, quote]);
    fetchQuote();
  };

  return (
    <div className="container">
      <div className="ui card">
        <div className="content">
          <div className="header">{quote.content}</div>
          <div className="description">
            ~{quote.author}
            <button onClick={handleBookmark}>
              <img
                src={bookmarked ? bookmarkImage : bookmarkImage}
                alt="Bookmark"
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="tags-dropdown">
          <select value={selectedTag} onChange={handleTagChange}>
            <option value="">All</option>
            <option value="technology">Technology</option>
            <option value="history">History</option>
            {tags &&
              tags.length &&
              tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
          </select>
        </div>
        <button className="nextQuote" onClick={fetchQuote}>
          Next Quotes
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
