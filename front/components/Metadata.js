import { useState, useEffect } from "react";
// import "./styles.css";

export default function Metadata() {
  const [state, setState] = useState({
    version: 'Loading...',
    hostname: 'Loading...',
    arch: 'Loading...'
  });

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "/api/metadata"
        )
      ).json();

      setState(data);
    };

    dataFetch();
  }, []);

  return (
    <>
      <h2>Server properties</h2>

      <ul id="metadata">
        <li><b>Version:</b> {state.version}</li>
        <li><b>Hostname:</b> {state.hostname}</li>
        <li><b>Architecture:</b> {state.arch}</li>
        <li><b>Color:</b> {state.color ? state.color : "null"}</li>
      </ul>
    </>
  );
}
