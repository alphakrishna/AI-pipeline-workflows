import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { Button, Box } from "@mui/material";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const payload = { nodes, edges };
      const formData = new URLSearchParams();
      formData.append("pipeline", JSON.stringify(payload));

      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      const data = await response.json();
      const { num_nodes, num_edges, is_dag } = data;

      window.alert(
        `Pipeline Summary:\n\n- Nodes: ${num_nodes}\n- Edges: ${num_edges}\n- Is DAG: ${is_dag ? "Yes" : "No"}`
      );
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          textTransform: "none",
          py: 1.5,
          borderRadius: 2,
          boxShadow: 2,
          fontWeight: 500,
          background:"#6366f1"
        }}
      >
        Submit Pipeline
      </Button>
    </Box>
  );
};
