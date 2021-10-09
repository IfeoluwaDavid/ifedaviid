import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import StyledButton from "../components/Button";
import quoteIcon from "../../src/icons/quotation-mark.png";
import RecommendationForm from "./RecommendationForm";
import "./References.css";

let comments = require("../../src/data/references-data.json");

comments = [];

const References = () => {
  const [showRecommendationForm, setShowRecommendationForm] = useState(false);
  const [hidePrompt] = useState(comments.length > 0 ? false : true);

  return (
    <PageTemplate>
      <div className="references-page-content">
        {showRecommendationForm ? (
          <RecommendationForm
            setShowRecommendationForm={setShowRecommendationForm}
          />
        ) : (
          <>
            <div className="references-page-header-container">
              <h3 className="references-page-header">References</h3>
              {!hidePrompt && (
                <StyledButton
                  text="Leave a Reference"
                  variant="link"
                  style={{ color: "#ffffff" }}
                  onClick={() => setShowRecommendationForm(true)}
                />
              )}
            </div>
            <div className="references-page-comments-list-container">
              {comments.length > 0 ? (
                comments.map((comment, idx) => {
                  return (
                    <div key={idx} className="references-page-comment-item">
                      <section className="references-page-quote-icon-container">
                        <img
                          className="references-page-quote-icon"
                          alt="QuoteIcon"
                          src={quoteIcon}
                        />
                      </section>
                      <div className="references-page-comment-container p-small-strong">
                        <p className="references-page-comment">
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
                      Unfortunately, I don't have any professional references to
                      showcase at the moment. Feel free to be the first.
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

export default withRouter(References);
