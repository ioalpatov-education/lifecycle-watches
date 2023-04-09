import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const watchesFormSchema = Yup.object({
  title: Yup.string().required("Обязательное поле"),
  timeZone: Yup.string()
    .matches(
      /^-?(((([0][0-9])|([1][0-3])):(([03][0])|([14][5])))|14:00)/,
      "Необходимо ввести временную зону. Например: -03:00"
    )
    .required("Обязательное поле"),
});

const WatchesForm = () => {
  const initialValues = {
    title: "",
    timeZone: "",
  };

  const addTimeZone = () => {};

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={watchesFormSchema}
      onSubmit={addTimeZone}
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
          <label htmlFor="timeZone">Временная зона</label>
          <Field className="form-field" type="text" name="timeZone" />
          <p className="error-text">
            <ErrorMessage name="timeZone" />
          </p>
        </div>
        <button className="watches-form__submit-btn" type="submit">
          Добавить
        </button>
      </Form>
    </Formik>
  );
};

export default WatchesForm;
