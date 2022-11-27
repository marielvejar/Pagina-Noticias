import React, { useState, useEffect } from "react";
import { fetchNews } from "../api";
import { Row, Col, Container } from "react-bootstrap";

export const NewsSection = (request) => {
  const [newsSection, setNewsSection] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setNewsSection(await fetchNews(request));
    };
    fetchAPI();
  }, [request]);

  return (
    <section ClassName="NewsSection" id="NewsSection">
      <Container>
        <Row>
          <Col size={12}>
            <h1 style={{ fontSize: "30px" }}>{request.topHeading}</h1>
          </Col>
        </Row>
        <Row>
          {newsSection.length > 1
            ? newsSection.map((article, key) =>
                article.urlToImage === "" ||
                article.urlToImage === null ? null : (
                  <Col key={key} md={{ span: 8 }} sm={{ span: 24 }}></Col>
                )
              )
            : "Loading.."}
        </Row>
        {request.linkText != null ? (
          <Row>
            <Col></Col>
          </Row>
        ) : null}
      </Container>
    </section>
  );
};

export default NewsSection;
