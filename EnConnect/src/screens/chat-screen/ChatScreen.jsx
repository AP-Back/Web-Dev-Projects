import { collection, getDocs } from 'firebase/firestore';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import ChatHeads from '../../components/chatheads/ChatHeads';
import Conversation from '../../components/conversation/Conversation';
import { db } from '../../firebase';
import "./chat-screen.css";

export default function ChatScreen({setUser,user}) {

let history = useHistory();

const [chatHeads, setchatHeads] = useState([]); //Initially no chat heads so empty array
const [receiver, setreceiver] = useState(null); //Since no receiver is clicked yet reciever is initially null

React.useEffect(() => { //Checking if the user is logged in
  //Getting user from localstorage
  const user = JSON.parse(localStorage.getItem("user"));

  //Setting log in state for the user as active
  if(user) setUser(user);
  //If not logged in we go back to the login screen
  else history.push("/");

},[history,setUser]);

React.useEffect(() => { //To fetch the available users from firebase
  if(!user) return; //If not logged in we return back

  (async() => { 
    const querySnapshot = await getDocs(collection(db,"users"));  //Querying for all the users
    setchatHeads( //Setting the chatheads on the screen to the query results
      querySnapshot.docs
      .map((doc) => doc.data())
      .filter((obj) => obj.uid !== user.uid)
      );
  })();

},[user]);

  return (
    <div className='chat-screen'>
        <div className='half-screen chat-heads'>
          {/*Chatheads with available users to chat to */}
          <ChatHeads items={chatHeads} setreceiver={setreceiver} />
        </div>

        <div className='half-screen conversation'>
          {/*Conversation screen to chat with the selected receiver */}
          <Conversation receiver={receiver} user={user} />
        </div>


    </div>
  )
}
