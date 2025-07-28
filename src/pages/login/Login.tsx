import AuthForm from "../../components/authform/AuthForm";

function Login() {
  return (
    <AuthForm
      title="Welcome back!"
      helperText="Log in to continue tracking your mood and sleep"
      buttonText="Sign In"
      linkText="Don't have an account?"
      linkHref="/auth/login"
      linkAction="Sign Up"
    />
  );
}

export default Login;
