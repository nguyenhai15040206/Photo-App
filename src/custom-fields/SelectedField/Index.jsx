import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select'
// import { ErrorMessage } from 'formik';

function SelectField(props) {
    const {
        field, form,
        lable, placeholder, disable, options
    } = props;

    const { name, value } = field;
    const selectedValuesChange = options.find(option => option.value === value);
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            }
        };
        field.onChange(changeEvent);
    }
    return (
        <FormGroup>
            {lable && <Label for="categoryId">Category</Label>}
            <Select
                id={name}
                {...field}
                value={selectedValuesChange}
                onChange={handleSelectedOptionChange}

                disable={disable}
                placeholder={placeholder}
                options={options}

            >
            </Select>
            {showError && <p style={{ color: 'red' }}>{errors[name]}</p>}
            {/* <span className={showError ? 'is-invalid' : ''}></span>
            <ErrorMessage name={name} component={FormFeedback} /> */}
        </FormGroup>
    )
}

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    lable: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool,
    options: PropTypes.array,
}

SelectField.defaultProps = {
    lable: '',
    placeholder: '',
    disable: false,
    options: []
}

export default SelectField

