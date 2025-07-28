import AuthForm from "../../components/authform/AuthForm";

function SignUp() {
  return (
    <AuthForm
      title="Create an account"
      helperText="Join to track your daily mood and sleep with ease."
      buttonText="Sign Up"
      linkText="Already got an account?"
      linkHref="/auth/signup"
      linkAction="Log in."
    />
  );
}

export default SignUp;
