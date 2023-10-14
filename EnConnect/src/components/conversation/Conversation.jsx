import React, { useRef, useState } from "react";

import { doc, getDoc, updateDoc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import "./conversation.css";

export default function Conversation({ receiver, user }) {
  const [conversationId, setConversationId] = useState(null); //Initially conversation id is null
  const [messages, setMessages] = useState([]); //Initializing empty array to store messages
  var [lastmessageencrypted,setlastmessageencrypted] = useState("");  //To handle encryption and decryption process
  var [lastmessagedecrypted,setlastmessagedecrypted] = useState("");
  var [messagesent,setmessagesent] = useState("");  //Storing the sent message
  var [secretkey,setsecretkey] = useState("");  //Secret key for AES
  var [messageencrypted,setMessageencrypted] = useState("");  //Storing the encrypted version of the sent message

  var [dhprime,setdhprime] = useState("");
  var [dhgenerator,setdhgenerator] = useState("");
  var [senderpriv,setsenderpriv] = useState("");
  var [senderpub,setsenderpub] = useState("");

  const currentMessage = useRef(null);    //Current message reference initialized to null
  const chatBodyRef = useRef(null); //To make the chat screen scrollable

  var CryptoJS = require("crypto-js");

  // handle sending the messages
  const sendMessage = async () => {
    if (!currentMessage.current.value) return;

    messagesent = currentMessage.current.value; //Message entered by the user
    setmessagesent(messagesent);
    
    // Encrypt
    const sharedsecret = secretkey.toString(); //Getting the Diffie Hellman shared secret key
    
    var ciphertext = CryptoJS.AES.encrypt(currentMessage.current.value, sharedsecret).toString(); //Encryption
    messageencrypted = ciphertext;
    setMessageencrypted(messageencrypted);

    const myMessage = { //Uid and ciphertext of message entered by the user in a message object

      message: ciphertext,
      uid: user.uid,
    };
    
    // add and save encrypted message to firestore
    const conversationRef = doc(db, "conversations", conversationId);
    const docSnap = await getDoc(conversationRef);

    // append message to existing conversation
    //If conversation already exists
    if (docSnap.exists()) {
      const docData = docSnap.data();
      await updateDoc(conversationRef, {
        messages: [...docData.messages, myMessage],
      });

      
    } else {
      // create a new conversation
      await setDoc(doc(db, "conversations", conversationId), {
        messages: [myMessage],
      });
    }

    ciphertext = "";
    currentMessage.current.value = "";
  };

  //Method to compute the Diffie Hellman shared secret key
  const setSecretKey = async () => {
    var dhprime,dhgen,receiverpub,senderpriv,senderpub;  //Required variables

    if (!receiver || !user) return; //If no receiver is selected we return

    setmessagesent("");
    setMessageencrypted("");
    setlastmessageencrypted("");
    setlastmessagedecrypted("");

    
    const dhRef = doc(db, "dhparameters", "dh");  //Getting the DH prime and generator from the dhparameters collection in firebase
    const docSnap = await getDoc(dhRef);

    if (docSnap.exists()) {
        const docData = docSnap.data();
        dhprime = docData.prime;
        setdhprime(dhprime);
        dhgen = docData.generator
        setdhgenerator(dhgen);
    }

    const pubkeyRef = doc(db,"users",user.uid); //Getting the sender's private and public key from the users collection in firebase
    const docSnap1 = await getDoc(pubkeyRef);

    if(docSnap1.exists()) {
      const docData1 = docSnap1.data();
      senderpriv = docData1.privkey;
      setsenderpriv(senderpriv);
      senderpub = docData1.pubkey;
      setsenderpub(senderpub);
    }

    const privkeyRef = doc(db,"users",receiver.uid);  ////Getting the receiver's public key from the users collection in firebase
    const docSnap2 = await getDoc(privkeyRef);

    if(docSnap2.exists()) {
      const docData2 = docSnap2.data();
      receiverpub = docData2.pubkey;
    }

    let sharedSecret = power(receiverpub,senderpriv,dhprime); //Computing the value of the shared secret
    setsecretkey(sharedSecret);
    let myConvId;

    if (receiver.uid > user.uid) myConvId = receiver.uid + user.uid;  //Appending the ids in alphabetical order to get the Conversation id in the database
    else myConvId = user.uid + receiver.uid;

    setConversationId(myConvId);
  }

  // set conversationId
  React.useEffect(() => {
    setSecretKey(); //Calculating the Diffie Hellman shared secret
  }, [receiver, user]);

  // get converastion from firestore
  React.useEffect(() => {
    if (!conversationId || !secretkey) return;

    const sharedsecret = secretkey.toString();  //Getting the Diffie Hellman shared secret key

    const unsub = onSnapshot(
      doc(db, "conversations", conversationId), //Conversations collection in firebase
      (doc) => {
        const currentData = doc.data(); //Getting the data (All messages)

        if (currentData?.messages.length > 0) {   //For each message
          
          currentData.messages.forEach(element => {
            lastmessageencrypted = element.message; //Collecting encrypted message

            //Decryption of message with DH shared secret
            var bytes  = CryptoJS.AES.decrypt(element.message, sharedsecret);
            element.message = bytes.toString(CryptoJS.enc.Utf8);
            lastmessagedecrypted = bytes.toString(CryptoJS.enc.Utf8);
          });

          //Before decryption
          setlastmessageencrypted(lastmessageencrypted);
          
          //After decryption
          setlastmessagedecrypted(lastmessagedecrypted);
          setMessages(currentData.messages); //Setting message to screen
          
        }
        else setMessages([]); //If tere are no messages in the conversation
      }
    );

    return unsub;
  }, [conversationId]);

  // send message with enter
  const handleEnterKeyPressDown = (e) => {
    if ((e.code === "Enter" || e.key === "Enter") && !e.shiftKey) {
      sendMessage();
      currentMessage.current.value = "";
    }
  };

  //Scroll to bottom of the chat
  const scrollToBottomOfChat = () => {
    if(!chatBodyRef.current) return;
    chatBodyRef.current.style.scrollBehaviour = "smooth";
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  };

  React.useEffect(() => {
    scrollToBottomOfChat();
  },[messages,chatBodyRef]); 

  return (
    <div className="chatscreen">
      
      {receiver ? ( //If we have a receiver
        <div className="chat">
          <p title={receiver.email} className="receiver">You are chatting with {receiver.email}</p>

          {/* Conversation messages */}
          <div className="conversation-messages" ref={chatBodyRef}>
            {messages.map((obj, i) => (
                <div key={i} className = "message-container" style={{justifyContent:obj.uid === user.uid && "flex-end"}}>
                  <div className="message-content">{obj.message}</div>
                </div>
              ))}
          </div>

          {/* Input bar to enter messages */}
            <div className="input-container">
                <div className="input-message">
                    <br/><input placeholder="Enter message" ref={currentMessage}  onKeyPress={handleEnterKeyPressDown}/>
                </div>
            <button onClick={sendMessage} currentMessage="Hello">Send</button>
          </div>
        </div>
      ) : ( //If no receiver
        <div className="nochat">
          <p>Start chatting with someone ...</p>
        </div>
      )}

      {/*Showing encryption and decryption process on the screen*/}

{receiver ? (
<div className="encryption-details"> 
        <div className='encryption-elements'>
          <form>
            <br/>
            Diffie Hellman Prime:<br /> <input value={dhprime} readonly="readonly" ></input><br/><br/>

            Diffie Hellman Generator:<br /> <input value={dhgenerator} readonly></input><br/><br/>
            
            Chosen private key:<br /> <input value={senderpriv} readonly></input><br/><br/>
            
            Public key:<br /> <input value={senderpub} readonly></input><br/><br/>
            
            Secret key from DH for AES:<br /> <input value={secretkey} readonly></input><br/><br/>

            Sent message is:<br /> <input value={messagesent} readonly="readonly" onChange={(e) => setmessagesent(e.target.value)}/><br/><br/>

            Message encrypted as:<br /> <input value={messageencrypted} readonly="readonly" onChange={(e1) => setMessageencrypted(e1.target.value)} /><br/><br/>

            Incoming message is :<br /> <input value={lastmessageencrypted} readonly="readonly" onChange={(e2) => lastmessageencrypted(e2.target.value)} /><br/><br/>

            Message decrypted as:<br /> <input value={lastmessagedecrypted} readonly="readonly" onChange={(e3) => lastmessagedecrypted(e3.target.value)} /><br/><br/>
            </form>
          
        </div>
      </div>
):(
  <div></div>
)}
    </div>
  );
}

// Power function to return value of a ^ b mod P  Source: https://www.geeksforgeeks.org/how-to-avoid-overflow-in-modular-multiplication/#:~:text=We%20can%20multiply%20recursively%20to,to%20log%20n%20exponentiation%20algorithm).
function power(a, b, p){
  let res = 0; //Initialize result
  a = a % p;
  while (b > 0){
      // If b is odd, add 'a' to result
      if (b % 2 == 1){
          res = (res + a) % p;
      }

      // Multiply 'a' with 2
      a = (a * 2) % p;

      // Divide b by 2
      b =b/2;
  }
   
  // Return result
  return res % p;
}
