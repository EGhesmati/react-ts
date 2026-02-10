import Counter from "./components/counter";
import  type { ApiResponse } from "./types";

const response: ApiResponse = {
  status: "success",
  data: "Hello from TypeScript",
};

console.log(response);

function App() {
  return (
    <div>
      <h1>Day 7 Features</h1>
      <Counter initialValue={5} />
    </div>
  );
}

export default App;
