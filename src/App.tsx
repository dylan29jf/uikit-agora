import AgoraUIKit from "agora-react-uikit";
import { useState } from "react";

function App() {
  const [videoCall, setVideoCall] = useState<boolean>();
  const rtcProps = {
    appId: "35e17201cc274772ba873333a373a71a",
    channel: "test",
    token: null, // enter your channel token as a string
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
}

export default App;
