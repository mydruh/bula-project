import React from "react";

import styles from "./SearchResultSummery.module.css";

export function SearchResultSummery(props) {
  let resultStats = null;
  if (props.amountResults && props.showResults) {
    resultStats = (
      <p>
        Showing 1-{props.showResults} out of {props.amountResults} results
      </p>
    );
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["search-summery"]}>
        <h2 className="subtitle">
          <strong>{props.term}</strong> in {props.location}
        </h2>
        {resultStats}
      </div>
      <div className={styles.filter}>
        <button className="button">
          <span className="icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>All filters</span>
        </button>
        <div className="buttons has-addons">
        <button class="button">
              <input type="radio" id="dewey1" name="drone" value="dewey1" onClick={(e) => {
                window.currentPrice = 1
              }}/>
              <label for="dewey1">$</label>
            </button>
          <button class="button">
              <input type="radio" id="dewey2" name="drone" value="dewey2" onClick={(e) => {
                window.currentPrice = 2
              }}/>
              <label for="dewey2">$$</label>
            </button>

            <button class="button">
              <input type="radio" id="dewey3" name="drone" value="dewey3" onClick={(e) => {
                window.currentPrice = 3
              }}/>
              <label for="dewey3">$$$</label>
            </button>
            <button class="button">
              <input type="radio" id="dewey4" name="drone" value="dewey4" onClick={(e) => {
                window.currentPrice = 4
              }}/>
              <label for="dewey4">$$$$</label>
            </button>
        </div>
        <button className="button">
          <span className="icon">
            <i className="fas fa-clock"></i>
          </span>
          <span>Open Now</span>
        </button>
        <button className="button">
          <span className="icon">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span>Cashback</span>
        </button>
      </div>
    </div>
  );
}
