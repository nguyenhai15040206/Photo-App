import React from 'react'
import PropTypes from 'prop-types'
import { FastField, Form, Formik } from 'formik'
import * as yup from 'yup'
import { FormGroup, Button, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import InputField from '../../../../custom-fields/InputField/Index';
import SelectField from '../../../../custom-fields/SelectedField/Index';
import RamdomPhotoField from '../../../../custom-fields/RandomPhotofield/Index';
function PhotoForm(props) {

    // const { initialValues, isAddMode } = props;
    const { initialValues, isAddMode } = props

    const validationShema = yup.object().shape({
        title: yup.string().required('This is field is required'),
        categoryId: yup.number().required('This is field is required').nullable(),

        photo: yup.string().required('This is field is required')
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={validationShema}
        //validationSchema={validationSchema}
        >
            {formikProps => {
                 const { isSubmitting } = formikProps;
                //console.log({ values, errors, touched })
                return (
                    <Form>
                        <FastField
                            // disable={true}
                            name="title"
                            component={InputField}

                            lable="Title"
                            placeholder="Eg: Wow nature ..."
                        />
                        <FastField
                            name="categoryId"
                            component={SelectField}

                            lable="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                        <FastField

                            name="photo"
                            component={RamdomPhotoField}
                            lable="Photo"
                        />

                        <FormGroup>
                            <Button type="submit" color={isAddMode ? "primary" : "success"}>{isAddMode ? 'Add a ablum' : 'Update your photo'}
                                {isSubmitting && <Spinner size="sm" />}
                            </Button>
                        </FormGroup>
                    </Form>

                )
            }}
        </Formik>
    )
}

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
    onsubmit: null,
}

export default PhotoForm

