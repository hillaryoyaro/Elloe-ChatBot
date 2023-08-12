// eslint-disable-next-line no-unused-vars
import React from "react";
import { 
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow} from "react-chat-engine-advanced";
import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";


const Chat = () => {
  //create the chat prop using useMultiChatLogic
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "Oyaro",
    "12345678"
  )
return <div style={{ flexBasis: "100%"}}>
  <MultiChatSocket {...chatProps}/> {/*Pass chatProps to render the component and give us authethication to connect to react chat Engine website */}
  {/*Creating the Logic using the component*/}
  <MultiChatWindow  
    {...chatProps}
    style={{ height: "100vh"}}
    renderChatHeader={(chat) => <Header chat={chat}/>}
    renderMessageForm={ (props) => {
      return(
        <StandardMessageForm props={props} activeChat={chatProps.chat}/>
      )
    }}
  />
</div> 
};

export default Chat;