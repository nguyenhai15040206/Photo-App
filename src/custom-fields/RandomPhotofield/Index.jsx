import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import RandomPhoto from '../../components/RandomPhoto/RandomPhoto';
import { ErrorMessage } from 'formik';

function RamdomPhotoField(props) {
    const { field, form, lable } = props;

    const { name, value, onBlur } = field;

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl);
    }

    const { errors, touched } = form;
    const showError = errors[name] && touched[name]

    return (
        <FormGroup>
            {lable && <Label for={name}>{lable}</Label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>

    )
}

RamdomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    lable: PropTypes.string,

}

RamdomPhotoField.defaultProps = {
    lable: '',
}

export default RamdomPhotoField

