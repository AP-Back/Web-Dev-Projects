import { createUserWithEmailAndPassword } from '@firebase/auth';
import { addDoc, collection, getDoc, setDoc, doc } from '@firebase/firestore';
import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { db, auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "./login-screen.css";
export default function LoginScreen({ setUser }) {

    let history = useHistory();

    const Crypto = require('crypto');
    var generator = 0; //Diffie Hellman Prime and Generator value initialized to 0
    var prime = 0;

    const email = useRef(null);   //Reference for email initially null
    const password = useRef(null);    //Reference for password initially null

    const register = async () => { //Method to register
        const myEmail = email.current.value;    //Getting the user input
        const myPassword = password.current.value;

        try {
            const responseFromAuth = await createUserWithEmailAndPassword(  //Waiting for a response from firebase authentication (user creation)
                auth,
                myEmail,
                myPassword
            );

            const userId = responseFromAuth.user.uid;   //uid from authentication response

            const dhRef = doc(db, "dhparameters", "dh");    //Getting the Diffie Hellman parameters
            const docSnap = await getDoc(dhRef);

            if (docSnap.exists()) {
                const docData = docSnap.data();
                generator = docData.generator;
                prime = docData.prime;
            }

            const privkey = randomint(5, generator - 1); //Choosing a random private key which is lesser than the generator value
            const pubkey = power(generator, privkey, prime);  //Computing the public key from the private key


            //Saving to firestore
            await setDoc(doc(db, "users", userId), {   //Creating a new collection
                email: myEmail,
                uid: userId,
                privkey: privkey,
                pubkey: pubkey,
            });

            //Saving user to localstorage
            localStorage.setItem(
                "user",
                JSON.stringify({
                    email: myEmail,
                    uid: userId,
                })
            );

            //Setting the signed in user as active
            setUser({
                email: myEmail,
                uid: userId,

            });

            //Moving to chat screen
            history.push('/chat');

        } catch (error) {
            alert(error);
        }
    };

    const login = async () => {    //Method to log in
        const myEmail = email.current.value;    //Getting credentials entered by the user
        const myPassword = password.current.value;

        try {   //Getting response from the firebase authentication sign in
            const responseFromAuth = await signInWithEmailAndPassword(
                auth,
                myEmail,
                myPassword
            );

            const userId = responseFromAuth.user.uid;   //Getting the uid from authentication response


            //Saving the user to localstorage setting the user to logged in state
            localStorage.setItem(
                "user",
                JSON.stringify({
                    email: myEmail,
                    uid: userId
                })
            );

            //Setting the signed in user as active
            setUser({
                email: myEmail,
                uid: userId,
            });

            //Moving to chat screen
            history.push('/chat');

        } catch (error) {
            alert(error);
        }
    };

    React.useEffect(() => {
        //Getting the user from localstorage
        const user = JSON.parse(localStorage.getItem("user"));

        //if users state is logged in then dont allow to login again (stay on chat screen)
        if (user) {
            setUser(user);
            history.push('/chat');
        }
    }, [history, setUser]);

    return ( //Login screen with username and password text boxes
        <div className="container">
            <div className='login-screen'>

                <div className='title'>
                    <p className='title'>Welcome !</p><br />
                </div>
                {/* <input type="name"  placeholder="Username" required/> */}
                <div className='mail'>
                    <h3 className='input'><input ref={email} type="name" placeholder="Email" required /></h3>
                </div>

                <div className='password'>
                    <h3 className='input'><input type='password' ref={password} placeholder="Password" required /></h3>
                </div>

                <div className='buttongrp'>
                    <button className='button1' onClick={register}>Register</button>&ensp;
                    <button className='button2' onClick={login}>Log in</button>
                </div>
            </div></div>
    )
}

function randomint(min, max)    //Function to return a random integer within a range
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Power function to return value of a ^ b mod P
function power(a, b, p) {
    let res = 0; //Initialize result
    a = a % p;
    while (b > 0) {
        // If b is odd, add 'a' to result
        if (b % 2 == 1) {
            res = (res + a) % p;
        }

        // Multiply 'a' with 2
        a = (a * 2) % p;

        // Divide b by 2
        b = b / 2;
    }

    // Return result
    return res % p;
}