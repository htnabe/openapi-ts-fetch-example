import { useContext, useEffect } from "react";
import "./App.css";
import { ApiClientContext } from "./contexts/AppClientProvider";

function App() {
  const apiClient = useContext(ApiClientContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.GET("/pet/{petId}", {
        params: {
          path: {
            petId: 10,
          },
        },
      });
      if (response.data) {
        console.log(response.data);
      }
    };

    fetchData();
  }, [apiClient]);

  return (
    <>
      <div className="card">
        <p>name is </p>
      </div>
    </>
  );
}

export default App;
