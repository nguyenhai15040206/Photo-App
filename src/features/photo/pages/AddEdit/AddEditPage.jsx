import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types'
import Banner from '../../../../components/Banner/Banner'
import PhotoForm from '../../components/PhotoForm/PhotoForm'
import { addPhoto, updatePhoto } from '../../photoSlice';
import { useHistory, useParams } from 'react-router-dom'
import './stytle.css'

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const { photoId } = useParams();
    console.log({ photoId });
    const isAddMode = !photoId;

    const editPhoto = useSelector(state => state.photos.find(x => x.id === +photoId))
    const initialValues = isAddMode
        ? {
            title: '',
            categoryId: null,
            photo: '',
        } : editPhoto;


    const handleSubmit = (values) => {
        return new Promise(resolve => {
            console.log(values);

            setTimeout(() => {
                if (isAddMode) {
                    const action = addPhoto(values);
                    console.log(action);
                    dispatch(action);
                } else {
                    // DO something here
                    console.log('Edit rồi á!');
                    const action = updatePhoto(values);
                    dispatch(action);
                }
                history.push('/photos')
                resolve(true)
            }, 2000);
        })
    }
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />
            <div className="photo-edit-form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

// AddEditPage.propTypes = {

// }

export default AddEditPage

