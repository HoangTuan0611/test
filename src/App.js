import "./App.css";

import InputExampleInput from "./components/Input/input";
import MyButton from "./components/Button/Button";
import "semantic-ui-css/semantic.min.css";
import MyInput from "./components/Input/input";
import InputDropdown from "./components/Input/InputDropdown";
import MySelect from "./components/Select/Select";
import Myinput from "./components/Input/myinput";

function App() {
  const options = [
    {
      key: ".com",
      value: ".com",
      image: {
        avatar: true,
        src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
      },
    },
    {
      key: ".net",
      value: ".net",
      image: {
        avatar: true,
        src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
      },
    },
    {
      key: ".org",
      value: ".org",
      image: {
        avatar: true,
        src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
      },
    },
  ];

  const countryOptions = [
    { key: "af", value: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", text: "Aland Islands" },
    { key: "al", value: "al", text: "Albania" },
    { key: "dz", value: "dz", text: "Algeria" },
    { key: "as", value: "as", text: "American Samoa" },
    { key: "ad", value: "ad", text: "Andorra" },
    { key: "ao", value: "ao", text: "Angola" },
    { key: "ai", value: "ai", text: "Anguilla" },
    { key: "ag", value: "ag", text: "Antigua" },
    { key: "ar", value: "ar", text: "Argentina" },
    { key: "am", value: "am", text: "Armenia" },
    { key: "aw", value: "aw", text: "Aruba" },
    { key: "au", value: "au", text: "Australia" },
    { key: "at", value: "at", text: "Austria" },
    { key: "az", value: "az", text: "Azerbaijan" },
    { key: "bs", value: "bs", text: "Bahamas" },
    { key: "bh", value: "bh", text: "Bahrain" },
    { key: "bd", value: "bd", text: "Bangladesh" },
    { key: "bb", value: "bb", text: "Barbados" },
    { key: "by", value: "by", text: "Belarus" },
    { key: "be", value: "be", text: "Belgium" },
    { key: "bz", value: "bz", text: "Belize" },
    { key: "bj", value: "bj", text: "Benin" },
  ];

  return (
    <>
      <MyInput placeholder="Email" type="text" />
      <MyInput placeholder="Day" type="number" />
      <MyInput placeholder="Year" type="number" />
      <br></br>
      <InputDropdown options={options} />

      <MySelect placeholder="Select your country" options={countryOptions} />

      <MyButton primary color="blue">
        Next
      </MyButton>

      <MyButton className="btn__back" basic color="blue">
        Back
      </MyButton>

      <Myinput/>
    </>
  );
}

export default App;
