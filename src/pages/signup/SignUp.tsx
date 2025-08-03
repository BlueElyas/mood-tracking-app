import Icon from "../../components/icon/Icon";
import { Formik } from "formik";
import { Label, Text } from "react-aria-components";
import BasicButton from "../../components/button/BasicButton";
import TextInput from "../../components/input/TextInput";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const title = "Create an account";
  const helperText = "Join to track your daily mood and sleep with ease.";
  const buttonText = "Create an account";
  const linkText = "Already got an account?";
  const linkHref = "/login";
  const linkAction = "Log in";

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .min(2, "Too short!")
      .required("An email is required"),
  });

  const navigate = useNavigate();

  function handleSubmit(values: { email: string; password: string }) {
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/");
  }

  return (
    <>
      <div className="bg-lightGradient h-screen flex flex-col gap-12 items-center justify-center">
        <Icon name="logo" />
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col  justify-center min-h-[503px] w-full max-w-[530px] gap-3">
          <Text className="text-4xl font-text-neutral-900 font-semibold">
            {title}
          </Text>
          <Text className="text-neutral-300">{helperText}</Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <form onSubmit={formikProps.handleSubmit}>
                <div className="mb-4 flex flex-col text-neutral-800 font-semibold text-sm">
                  <Label className="mb-2" htmlFor="email">
                    Email address
                  </Label>
                  <TextInput
                    placeholder="name@gmail.com"
                    type="email"
                    name="email"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    value={formikProps.values.email}
                  />
                </div>
                <div className="mb-4 flex flex-col text-neutral-800 font-semibold text-sm">
                  <Label className="mb-2" htmlFor="password">
                    Password
                  </Label>
                  <TextInput
                    type="password"
                    name="password"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    value={formikProps.values.password}
                  />
                </div>
                <BasicButton type="submit" style="w-full">
                  {buttonText}
                </BasicButton>
                <div className="text-center text-sm text-neutral-500 mt-8">
                  <Text>
                    {linkText}{" "}
                    <a
                      href={linkHref}
                      className="text-blue-500 hover:underline"
                    >
                      {linkAction}
                    </a>
                  </Text>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default SignUp;
