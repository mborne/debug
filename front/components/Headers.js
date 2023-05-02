import { useState, useEffect } from "react";

export default function Headers() {
  const [state, setState] = useState({
  
  });

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "/api/headers"
        )
      ).json();

      setState(data);
    };

    dataFetch();
  }, []);

  const headerItems = Object.keys(state).map(key => 
    <li value={key}><b>{key}:</b> {state[key]}</li>
  );

  return (
    <>
      <h2>Request headers</h2>

      <ul id="headers">
          {headerItems}
      </ul>
    </>
  );
}
