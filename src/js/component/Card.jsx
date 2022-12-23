import React from "react";

export const Card = (props) => {
  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            Go somewhere
            </a>
        </div>
        </div>
    </div>
    

    
  );
};
export default Card;
