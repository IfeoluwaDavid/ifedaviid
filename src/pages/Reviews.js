import React from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const comments = require("../../src/data/reviews-data.json");

const MainContainer = styled.div`
  display: block;
  justify-content: center;

  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 15%;
    margin-right: 50px;
  }

  h3 {
    width: auto;
    color: white;
    font-weight: bold;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  div {
    width: auto;
    max-width: 1000px;
    text-align: right;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  p,
  strong {
    color: #343434;
    letter-spacing: 1px;
  }

  small {
    letter-spacing: 1px;
  }

  @media (max-width: 980px) {
    display: block;
    section {
      width: 100%;
      margin-right: 0px;
    }
    div {
      margin: 0px 0px 20px 0px;
      text-align: center;
    }
    h3 {
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
`;

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  padding: 10px 50px 10px 50px;
  border-radius: 10px;
  margin: 20px 0px 20px 0px;
`;

const QuoteIcon = styled(FontAwesomeIcon)`
  color: #343434;
  margin: 50px;
  transform: scale(3);
`;

const Reviews = () => {
  return (
    <PageTemplate>
      <MainContainer>
        <h3>Recommendations</h3>
        {comments.map((comment) => {
          return (
            <CommentContainer>
              <section>
                <QuoteIcon icon={faQuoteLeft} />
              </section>
              <div>
                <p>{comment.message}.</p>
                <strong>- {comment.name}</strong>
                <br />
                <small>{comment.jobPosition}</small>
              </div>
            </CommentContainer>
          );
        })}
      </MainContainer>
    </PageTemplate>
  );
};

export default withRouter(Reviews);
