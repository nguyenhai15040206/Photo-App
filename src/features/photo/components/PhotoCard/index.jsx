import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./style.css";

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick } = props;

  const handleRemoveClick = () => {
    if (onRemoveClick) {
      onRemoveClick(photo);
    }
  };

  const handleEditClick = () => {
    if (onEditClick) {
      onEditClick(photo);
    }
  };
  return (
    <div className="photo">
      <LazyLoadImage src={photo.photo} effect="blur" alt={photo.title} />
      <div className="photo-overlay">
        <h3 className="photo-title">{photo.title}</h3>
        <div className="photo-actions">
          <div>
            <Button
              outline
              size="sm"
              color="light"
              onClick={() => {
                handleEditClick();
              }}
            >
              Edit
            </Button>
          </div>
          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={() => {
                handleRemoveClick();
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemoveClick: null,
};

export default PhotoCard;
