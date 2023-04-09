import { FormControl } from "react-bootstrap";
import selectedOptions from "../Options";

const Browse = () => {
  return (
    <div className="ml-4 flex items-center cursor-pointer">
      <img
        src="https://cdn-icons-png.flaticon.com/128/795/795653.png"
        alt=""
        className="h-4 w-4 mr-1"
      />
      <FormControl as="select" className="cursor-pointer">
        <option>Browse</option>
        {selectedOptions.map(({ optionId, label }) => (
          <option key={optionId} value={`option${optionId}`}>
            {label}
          </option>
        ))}
      </FormControl>
    </div>
  );
};

export default Browse;
