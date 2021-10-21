import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

function PhotoList(props) {
    const { photoList, onPhotoRemoveClick, onPhotoEditClick } = props;
    return (
        <Row>
            {
                photoList.map(item => (
                    <Col key={item.id} xs="12" md="6" lg="3">
                        <PhotoCard
                            photo={item}
                            onRemoveClick={onPhotoRemoveClick}
                            onEditClick={onPhotoEditClick}
                        />
                    </Col>
                ))
            }
        </Row>
    )
}

PhotoList.propTypes = {
    photoList: PropTypes.array,
    onPhotoEditClick: PropTypes.func,
    onPhotoRemoveClick: PropTypes.func,
}

PhotoList.defaultProps = {
    photoList: [],
    onPhotoEditClick: null,
    onPhotoRemoveClick: null
}

export default PhotoList

