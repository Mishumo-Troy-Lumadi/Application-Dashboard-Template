import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Chip from "../components/Chip";
import ExtendFab from "../components/ExtendFab";
import Fab from "../components/Fab";
import FabToolTip from "../components/FabToolTip";
import Input from "../components/Input";

export default function Component() {

  function execute(e) {
    alert(`${e.target.textContent} was clicked`)
  }

  function onChange(e){
    console.log(e);
  }

  return (
    <div className="flex flex-col justify-center p-10 space-y-4">
      <Fab
        icon={faPlus}
        title="floating action"
        className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
        onClick={execute}
      />
      <FabToolTip
        icon={faPlus}
        title="Fab Tooltip"
        className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
        onClick={execute}
      />
      <ExtendFab
        icon={faPlus}
        title="expandable floating action"
        className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
        onClick={execute}
      />
      <Chip title="chip" onClick={execute} />
      <Button
        className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
        onClick={execute}
      >
        Button
      </Button>
      <Button
        className="bg-purple-700 hover:bg-purple-500 shadow-purple-600/50"
        icon={faPlus}
        onClick={execute}
      >
        Button
      </Button>
      <Input
        id="email"
        type="email"
        label="Email"
        containerStyle="flex-col space-y-1"
        labelStyle="text-purple-800"
        onChange={onChange}
      />
      <Input
        id="password"
        type="password"
        label="Password"
        containerStyle="flex-col space-y-1"
        labelStyle="text-purple-800"
        onChange={onChange}
      />
      <Input
        id="terms"
        type="checkbox"
        containerStyle="flex-row-reverse w-fit items-center"
        labelStyle="ml-2"
        className="h-4 w-4 rounded text-purple-800"
        label={
          <h1>
            I agree to <span className="text-purple-800 hover:underline">Terms</span> and <span className="text-purple-800 hover:underline">Privacy Policy</span>.
          </h1>
        }
      />
    </div>
  );
}
