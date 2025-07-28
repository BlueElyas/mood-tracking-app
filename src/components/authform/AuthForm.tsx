import { Label, Text } from "react-aria-components";
import TextInput from "../input/TextInput";
import BasicButton from "../button/BasicButton";

interface Props {
  title: string;
  helperText?: string;
  buttonText: string;
  linkText: string;
  linkHref: string;
  linkAction: string;
}

function AuthForm(props: Props) {
  const { title, helperText, buttonText, linkText, linkHref, linkAction } =
    props;
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col  justify-center min-h-[503px] w-full max-w-[530px] gap-3">
      <Text className="text-4xl font-text-neutral-900 font-semibold">
        {title}
      </Text>
      <Text className="text-neutral-300">{helperText}</Text>
      <form>
        <div className="mb-4 flex flex-col text-neutral-800 font-semibold text-sm">
          <Label className="mb-2" htmlFor="email">
            Email address
          </Label>
          <TextInput placeholder="name@gmail.com" type="email" name="email" />
        </div>
        <div className="mb-4 flex flex-col text-neutral-800 font-semibold text-sm">
          <Label className="mb-2" htmlFor="password">
            Password
          </Label>
          <TextInput type="password" name="password" />
        </div>
        <BasicButton style="w-full">{buttonText}</BasicButton>
        <div className="text-center text-sm text-neutral-500 mt-8">
          <Text>
            {linkText}{" "}
            <a href={linkHref} className="text-blue-500 hover:underline">
              {linkAction}
            </a>
          </Text>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
