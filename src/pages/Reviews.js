import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import StyledButton from "../../src/components/Button";
import quoteIcon from "../../src/icons/quotation-mark.png";
import RecommendationForm from "./RecommendationForm";
import "./Reviews.css";

let comments = require("../../src/data/reviews-data.json");

comments = [];

const Reviews = () => {
  const [showRecommendationForm, setShowRecommendationForm] = useState(false);
  const [hidePrompt] = useState(comments.length > 0 ? false : true);

  return (
    <PageTemplate>
      <div className="reviews-page-content">
        {showRecommendationForm ? (
          <RecommendationForm
            setShowRecommendationForm={setShowRecommendationForm}
          />
        ) : (
          <>
            <div className="reviews-page-header-container">
              <h3 className="reviews-page-header">References</h3>
              {!hidePrompt && (
                <StyledButton
                  text="Leave a Reference"
                  variant="link"
                  style={{ color: "#ffffff" }}
                  onClick={() => setShowRecommendationForm(true)}
                />
              )}
            </div>
            <div className="reviews-page-comments-list-container">
              {comments.length > 0 ? (
                comments.map((comment, idx) => {
                  return (
                    <div key={idx} className="reviews-page-comment-item">
                      <section className="reviews-page-quote-icon-container">
                        <img
                          className="reviews-page-quote-icon"
                          alt="QuoteIcon"
                          src={quoteIcon}
                        />
                      </section>
                      <div className="reviews-page-comment-container p-small-strong">
                        <p className="reviews-page-comment">
                          {comment.message}.
                        </p>
                        <strong>- {comment.name}</strong>
                        <br />
                        <small>{comment.jobPosition}</small>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="no-comments-placeholder-container">
                  <div className="no-comments-prompt">
                    <p className="no-comments-text">
                      Unfortunately, I don't have any professional
                      recommendations to showcase at the moment. Feel free to be
                      the first.
                    </p>
                    <StyledButton
                      text="Leave a Reference"
                      variant="dark"
                      onClick={() => setShowRecommendationForm(true)}
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </PageTemplate>
  );
};

export default withRouter(Reviews);
