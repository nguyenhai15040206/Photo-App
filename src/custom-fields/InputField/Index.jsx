import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { ErrorMessage } from "formik";

function InputField(props) {
  const { field, form, type, lable, placeholder } = props;

  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  // trong moojt field bao gồm [name,value, onChange, onBlur]
  // const [name,value,onChange,onBlur] = field;
  return (
    <div>
      <FormGroup>
        {lable && <Label for={name}>{lable}</Label>}
        <Input
          id={name}
          {...field}
          type={type}
          placeholder={placeholder}
          invalid={showError}
        />
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </div>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  lable: PropTypes.string,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  lable: "",
  placeholder: "",
};

export default InputField;
