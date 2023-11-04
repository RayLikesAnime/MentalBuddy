
import './App.css';
import { DeepChat } from "deep-chat-react";


function Buddy() {
   
  return (
    
    <div className="App">
      <deep-chat
      camera="true" microphone="true"
      speechToText="true" textToSpeech="true"
      style={{ borderRadius: "10px" }}
     
  directConnection='{
    "huggingFace": {
      "key": "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",
      "conversation": {"model": "facebook/blenderbot-400M-distill", "parameters": {"temperature": 1}}
    }
  }'
></deep-chat>
    </div>
  );
}

export default Buddy;
