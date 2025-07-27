import BasicButton from "../../components/button/BasicButton";
import Icon from "../../components/icon/Icon";
import TextInput from "../../components/input/Input";

function Homepage() {
  return (
    <div className="text-red-700 bg-green-300">
      <p>Homepage</p>
      <Icon name="check" />
      <TextInput name="email" type="email" />
      <BasicButton>Sign up</BasicButton>
    </div>
  );
}

export default Homepage;
