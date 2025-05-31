// submit.js
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const payload = {
        nodes,
        edges,
      };

      const formData = new URLSearchParams();
      formData.append("pipeline", JSON.stringify(payload));

      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const data = await response.json();
      console.log("Full response:", data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
