import React from "react";

const BookmarksPage = ({ bookmarks }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Bookmarked Quotes</h2>
      <ul style={styles.list}>
        {bookmarks &&
          bookmarks.length &&
          bookmarks.map((quote, id) => (
            <li key={id} style={styles.listItem}>
              <p style={styles.quote}>{quote.content}</p>
              <p style={styles.author}>~ {quote.author}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50
  },
  header: {
    fontSize: 25,
    marginBottom: 20,
    color: "white"
  },
  list: {
    listStyle: "none",
    width: "60%",
    margin: "0 auto"
  },
  listItem: {
    margin: 20,
    padding: 20,
    border: "1px solid black",
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#bd5b4c"
  },
  quote: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center"
  },
  author: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right"
  }
};

export default BookmarksPage;
