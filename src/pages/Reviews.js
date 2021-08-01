import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import styled from "styled-components";
import quoteIcon from "../../src/icons/quotation-mark.png";

const comments = require("../../src/data/reviews-data.json");

const MainContainer = styled.div`
  display: block;
  justify-content: center;

  div {
    width: auto;
    max-width: 1000px;
    text-align: right;
    margin-top: 10px;
    margin-bottom: 10px;
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
  }
`;

const CommentsContainer = styled.div`
  display: flex;
  justify-content: center;
  background: white;
  padding: 10px 50px 10px 50px;
  border-radius: 10px;
  margin: 0px 0px 20px 0px;

  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 15%;
    margin-right: 50px;
  }

  @media (max-width: 980px) {
    section {
      width: 100%;
      margin-right: 0px;
    }
    div {
      padding: 20px;
    }
  }
`;

const BottomContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    width: auto;
    color: white;
    font-weight: bold;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  a {
    color: white;
    text-decoration: underline;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 980px) {
    display: block;
    margin-bottom: 20px;
    h3 {
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 20px;
    }
  }
`;

const QuoteIcon = styled.img`
  color: #343434;
  margin: 40px;
  height: 80px;
`;

const Reviews = () => {
  const [hidePrompt] = useState(comments.length > 0 ? false : true);

  return (
    <PageTemplate>
      <MainContainer>
        <TopContainer>
          <h3>Recommendations</h3>
          {!hidePrompt && (
            <a href="https://github.com/IfeoluwaDavid?tab=repositories">
              Submit a Recommendation
            </a>
          )}
        </TopContainer>
        <BottomContainer>
          {comments.length > 0
            ? comments.map((comment) => {
                return (
                  <CommentsContainer>
                    <section>
                      <QuoteIcon alt="ProfilePhoto" src={quoteIcon} />
                    </section>
                    <div>
                      <p>{comment.message}.</p>
                      <strong>- {comment.name}</strong>
                      <br />
                      <small>{comment.jobPosition}</small>
                    </div>
                  </CommentsContainer>
                );
              })
            : null}
        </BottomContainer>
      </MainContainer>
    </PageTemplate>
  );
};

export default withRouter(Reviews);
