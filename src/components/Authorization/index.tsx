import { useRef, useState } from 'react';
import './Authorization.scss';
import Popup from '../Popup';


export function Authorizaton() {
    const [isOpen, setIsOpen] = useState(false);
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const HandleOpenNote = () => {
        setIsOpen(true)
    };

    const HandleCloseNote = () => {
        setIsOpen(false)
    };

    const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const currentInput = e.target;
        const nextInput = inputRefs.current[index + 1];

        if (currentInput.value.length === 1 && nextInput) {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
    };

    return (
        <div className='authorization'>
            {isOpen && (
                <Popup setIsOpen={setIsOpen}>
                    <div className='modal-content'>
                        <div className='popup-head'>
                            <div>
                                <h1>Введите код подтверждения</h1>
                                <p>Письмо отправлено на почту Email@gmail.com</p>
                            </div>
                            <button onClick={HandleCloseNote}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 30.486328 15.978516 A 1.50015 1.50015 0 0 0 29.439453 16.439453 L 24 21.878906 L 18.560547 16.439453 A 1.50015 1.50015 0 0 0 17.484375 15.984375 A 1.50015 1.50015 0 0 0 16.439453 18.560547 L 21.878906 24 L 16.439453 29.439453 A 1.50015 1.50015 0 1 0 18.560547 31.560547 L 24 26.121094 L 29.439453 31.560547 A 1.50015 1.50015 0 1 0 31.560547 29.439453 L 26.121094 24 L 31.560547 18.560547 A 1.50015 1.50015 0 0 0 30.486328 15.978516 z" /></svg>
                            </button>
                        </div>
                        <form action="#">
                            <div className="input-field">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        onChange={(e) => handleInputChange(index, e)}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        disabled={index !== 0}
                                    />
                                ))}
                            </div>
                            <button type='submit'>Подтвердить</button>
                        </form>


                    </div>
                </Popup>
            )}
            <div className='WelcomeText'>
                <div>
                    <h1>Станьте нашим клиентом</h1>
                    <p>Уважаемые клиенты, рады приветствовать Вас на сайте MD&HH! </p>
                </div>
                <img src='../Group 7-3.png' alt='logo' />
            </div>
            <div className='Registration'>
                <p>Для регистрации заполните форму, все поля обязательны для заполнения.</p>
                <form>
                    <label>Введите Имя</label>
                    <input type='text' placeholder='Иванов Иван Иванович' />
                    <label>Введите Email</label>
                    <input type='text' placeholder='Ivanov@mail.ru' />
                    <label>Введите пароль</label>
                    <input type='password' placeholder='Password' />
                    <label>Повторите пароль</label>
                    <input type='password' placeholder='Password' />
                </form>
                <div className='AuthorizationBtn'>
                    <button className='RegBtn active' onClick={HandleOpenNote}>Зарегистрироваться</button>
                    <button className='LogBtn'>Войти</button>
                </div>
                <form className='Agree'>
                    <label className="form-control">
                        <input type="checkbox" name="checkbox" />
                        С текстом лецензионного договора-оферты согласен и даю согласие на обработку своих персональных данных.
                    </label>
                </form>
            </div>
        </div>
    )
}