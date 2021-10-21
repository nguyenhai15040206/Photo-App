import React from 'react'
import Banner from '../../../../components/Banner/Banner'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PhotoList from '../../components/PhotoList';
import { removePhoto } from '../../photoSlice';

function Mainpage(props) {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch(state => state.photos);
    const history = useHistory();
  //console.log('List is:', photos);

    const handleRemovePhotoClick = (photo) => {
        //console.log("Photo remove: ", photo.id);
        const photoId = photo.id;
        const action = removePhoto(photoId);
        dispatch(action);

    }

    const handleEditPhotoClick = (photo) => {
        //console.log("Edit Photo is: ", photo);
        const editPhotoUrl = `/Photos/${photo.id}`
        history.push(editPhotoUrl)
    }
    return (
        <div>
            <div className="photo-main">
                <Banner title="🎉 Your awesome photos 🎉" />
                <div className="container text-center">
                    <div className="mt-2">
                        <Link to="/photos/add">
                            Add new photo
                        </Link>
                    </div>
                    <PhotoList
                        onPhotoEditClick={handleEditPhotoClick}
                        onPhotoRemoveClick={handleRemovePhotoClick}
                        photoList={photos}
                    />

                </div>
            </div>
        </div>
    )
}


export default Mainpage

