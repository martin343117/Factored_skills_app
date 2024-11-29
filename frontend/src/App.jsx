import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/data")
            .then((response) => setData(response.data.data))
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div>
            <h1>React + FastAPI App</h1>
            <p>{data}</p>
        </div>
    );
}

export default App;
