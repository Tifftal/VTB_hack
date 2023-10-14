import { useEffect, useState } from 'react';
import { useSignUpMutation } from '../../store/api/authorizationApi';
import './index.scss'
import SideBar from '../../components/SideBar';

function HistoryPage() {

  // const [message, setMessage] = useState("");
  // const [user, setUser] = useState({
  //     firstname: "",
  //     secondname: "",
  //     email: "",
  //     password1: "",
  //     password2: ""
  // });

  // const [signUp, { error: signUpError, isSuccess: isSignUpSuccess }] = useSignUpMutation();

  // useEffect(() => {
  //     if (signUpError) {
  //         setMessage("ошибка");
  //         console.error(signUpError);
  //     }
  // }, [signUpError])
  // useEffect(() => {
  //     if (isSignUpSuccess) {
  //         setMessage("Успех");
  //     }
  // }, [isSignUpSuccess])

  // const handleSignUp = async () => {
  //     if (user) {
  //         await signUp({ firstname: user.firstname, secondname: user.secondname, email: user.email, password1: user.password1, password2: user.password2 }).unwrap();
  //         clearStateUser();
  //     }
  // }

  // const clearStateUser = () => {
  //     setUser(prevState => ({
  //         ...prevState, firstname: "",
  //         secondname: "",
  //         email: "",
  //         password1: "",
  //         password2: ""
  //     }))
  // }

  return (
    <div className='History'>
      <h1>History</h1>
      {/* <div>
                    <input
                        className="inputforms"
                        type="text"
                        placeholder='firstname'
                        onChange={(e) => {
                            setUser((prevState => ({ ...prevState, firstname: e.target.value })));
                        }}
                    />
                    <input
                        className="inputforms"
                        type="text"
                        placeholder='secondname'
                        onChange={(e) => {
                            setUser((prevState => ({ ...prevState, secondname: e.target.value })));
                        }}
                    />
                    <input
                        className="inputforms"
                        type="text"
                        placeholder='email'
                        onChange={(e) => {
                            setUser((prevState => ({ ...prevState, email: e.target.value })));
                        }}
                    />
                    <input
                        className="inputforms"
                        type="password"
                        placeholder='password'
                        onChange={(e) => {
                            setUser((prevState => ({ ...prevState, password1: e.target.value })));
                        }}
                    />
                    <input
                        className="inputforms"
                        type="password"
                        placeholder='confirm password'
                        onChange={(e) => {
                            setUser((prevState => ({ ...prevState, password2: e.target.value })));
                        }}
                    />
                    <button
                        type="button"
                        className='SugnUp-Button'
                        onClick={() => {
                            handleSignUp();
                        }}
                    >
                        Sign Up
                    </button>
                </div>
                {message && <h1>{message}</h1>} */}
    </div>
  )

}

export { HistoryPage };