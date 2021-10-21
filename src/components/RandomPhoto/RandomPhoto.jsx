import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap';
import './stytle.css'

const getRamdomImgUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
}

function RandomPhoto(props) {
    const { name, imageUrl, onRandomButtonBlur, onImageUrlChange } = props

    const handleRamdomPhotoClick = async () => {
        if (onImageUrlChange) {
            const ramdomImageUrl = getRamdomImgUrl();
            onImageUrlChange(ramdomImageUrl);
        }
    }
    return (
        <div className="random-photo">
            <div className="random-photo-button mb-2">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRamdomPhotoClick}
                >
                    Ramdom a photo
                </Button>
            </div>
            <div className="random-photo-photo">
                {imageUrl && <img src={imageUrl}
                    alt="Ooops ... not found. Please click random again!"
                    onError={handleRamdomPhotoClick}
                />}
            </div>
        </div>
    )
}

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
}

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null,
}

export default RandomPhoto

