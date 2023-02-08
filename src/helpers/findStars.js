export const findStars = (num) => {
  if (num > 1 && num <= 2) {
    return (
      <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
    );
  } else if (num > 2 && num <= 3) {
    return (
      <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>
    );
  } else if (num > 3 && num <= 4.3) {
    return (
      <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
      </div>
    );
  } else if(num > 4.3 && num <= 5) {
    return (
      <div className="rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    );
  }
};
