import { Button, Dialog, TextField } from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "./helpers/validationSchema";
import { FormUl, FormWrap, PopupEl } from "./styles";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toUpper } from "./helpers/toUpper";

interface IProps {
  CustomFormWrap?: React.FC<{
    children: React.ReactNode;
    onSubmit: () => void;
  }>;
}

interface IInputOptions {
  bigLitters?: boolean;
  setStartPlus?: boolean;
}

const initialValues = {
  firstName: "",
  // mail: "",
  phone: "+",
};

const inputs = [
  {
    id: "firstName",
    label: "Фамилия Имя",
    className: "",
    options: { bigLitters: true },
  },
  {
    id: "phone",
    label: "Телефон",
    className: "",
    options: { setStartPlus: true },
  },
];

const plusRegex = /^\+.*/;

const Form: React.FC<IProps> = (props) => {
  const router = useRouter();
  const [hostname, setHostname] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const handleClickOpen = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const sendForm = useCallback(
    async (values: typeof initialValues) => {
      const { data } = await axios.post("/api/sendData", {
        // link_id: 2461,
        fname: `${values.firstName}`,
        // email: `${values.mail}`,
        fullphone: `${values.phone}`,
        source: hostname,
        // ip: `${ip}`,
        // description: description,
      });
    },
    [hostname]
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      sendForm(values);
      // handleClickOpen();
      resetForm();
      router.push("/thanks");
    },
  });

  useEffect(() => {
    const currentUrl = window.location.hostname;

    if (currentUrl) {
      setHostname(currentUrl);
    }
  }, []);

  const getValue = (value: string, options?: IInputOptions) => {
    let newValue = value;

    if (options) {
      const { bigLitters, setStartPlus } = options;
      if (bigLitters) {
        newValue = toUpper(newValue);
      }

      if (setStartPlus) {
        if (!plusRegex.test(newValue)) {
          newValue = `+${newValue}`;
        }
      }
    }

    return newValue;
  };

  return (
    <>
      <FormWrap onSubmit={formik.handleSubmit}>
        <FormUl>
          {inputs.map((input, index) => {
            const id = input.id as keyof typeof initialValues;
            return (
              <li key={`${input.label}_${index}`}>
                <TextField
                  variant="filled"
                  label={input.label}
                  id={id}
                  name={id}
                  onChange={formik.handleChange}
                  value={getValue(
                    formik.values[id as keyof typeof initialValues],
                    input.options
                  )}
                />
                {formik.errors[id] && formik.touched[id] ? (
                  <span className="error-text">{formik.errors[id]}</span>
                ) : null}
              </li>
            );
          })}
          <div>
            <Button className="formButton" variant="contained" type="submit">
              Вернуть деньги
            </Button>
          </div>
        </FormUl>
        <Dialog
          open={showPopup}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <PopupEl>
            <p className="pop-title">СПАСИБО! МЫ ПОЛУЧИЛИ ВАШУ ЗАЯВКУ!</p>
            <p className="pop-description">
              В ближайшее время с вами свяжется наш специалист для уточнения
              деталей вашей задачи.
            </p>
            <Button variant="contained" autoFocus>
              Продолжить
            </Button>
          </PopupEl>
        </Dialog>
      </FormWrap>
    </>
  );
};

export default Form;
