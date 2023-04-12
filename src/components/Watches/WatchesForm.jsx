import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const watchesFormSchema = Yup.object({
  title: Yup.string().required("Обязательное поле"),
  timezone: Yup.string()
    .matches(
      /^-?(((([0][0-9])|([1][0-3])):(([03][0])|([14][5])))|14:00)/,
      "Необходимо ввести временную зону. Например: -03:00 или 09:30"
    )
    .required("Обязательное поле"),
});

const WatchesForm = ({ onAddTimezone }) => {
  const initialValues = {
    title: "",
    timezone: "",
  };

  const addTimezone = (values, actions) => {
    const { title, timezone } = values;

    actions.resetForm();

    onAddTimezone({
      title,
      timezone,
      id: nanoid(),
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={watchesFormSchema}
      onSubmit={addTimezone}
    >
      <Form className="watches-form">
        <div className="form-group">
          <label htmlFor="title">Название</label>
          <Field className="form-field" type="text" name="title" />
          <p className="error-text">
            <ErrorMessage name="title" />
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="timezone">Временная зона</label>
          <Field className="form-field" type="text" name="timezone" />
          <p className="error-text">
            <ErrorMessage name="timezone" />
          </p>
        </div>
        <button className="watches-form__submit-btn" type="submit">
          Добавить
        </button>
      </Form>
    </Formik>
  );
};

WatchesForm.propTypes = {
  onAddTimezone: PropTypes.func.isRequired,
};

export default WatchesForm;
