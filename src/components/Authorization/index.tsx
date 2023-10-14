import './Authorization.scss';
import Popup from '../Popup';
import { useAuthorization } from './useAuthorization';
import { LogoIcon } from '../../UI/icons';

export function Authorizaton() {

  const {
    handleRegClick,
    formData,
    formDataErrors,
    inputRefs,
    isModalOpen,
    handleCloseNote,
    isLogInPage,
    handleInputChange,
    handleCodeChange,
    setIsModalOpen,
    handleChangeLoginType,
  } = useAuthorization();

  return (
    <div className='authorization'>
      {isModalOpen && (
        <Popup setIsOpen={setIsModalOpen}>
          <div className='modal-content'>
            <div className='popup-head'>
              <div>
                <h1>Введите код подтверждения</h1>
                <p>Письмо отправлено на почту Email@gmail.com</p>
              </div>
              <button onClick={handleCloseNote}>
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
                    onChange={(e) => handleCodeChange(index, e)}
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
          <p>Уважаемые клиенты, рады приветствовать Вас на сайте ВТБ! </p>
        </div>
        <div className='LOGO'>
          <LogoIcon fill="white" />
        </div>
      </div>

      <div className='Registration'>
        <div className="log_type_buttons">
          <button name="login" className={isLogInPage ? "active" : ""} onClick={handleChangeLoginType} >Войти</button>
          <button name="" className={isLogInPage ? "" : "active"} onClick={handleChangeLoginType} >Зарегистрироваться</button>
        </div>
        {isLogInPage ? (
          <>
            <form>
              <label>Введите Email</label>
              <input type='text' placeholder='Ivanov@mail.ru' name='email' value={formData.email} onChange={handleInputChange} />
              <label>Введите пароль</label>
              <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} />
            </form>
            <div className='AuthorizationBtn'>
              <button className='LogBtn active'>Войти</button>
            </div>
          </>
        ) : (
          <>
            <p>Для регистрации заполните форму, все поля обязательны для заполнения.</p>
            <form>
              <label>Введите Имя</label>
              <input type='text' placeholder='Иван' name='firstName' value={formData.firstName} onChange={handleInputChange} style={formDataErrors.firstName ? { border: "2px solid red" } : {}} />
              <label>Введите Фамилию</label>
              <input type='text' placeholder='Иванов' name='secondName' value={formData.secondName} onChange={handleInputChange} style={formDataErrors.secondName ? { border: "2px solid red" } : {}} />
              <label>Введите Email</label>
              <input type='text' placeholder='Ivanov@mail.ru' name='email' value={formData.email} onChange={handleInputChange} style={formDataErrors.email ? { border: "2px solid red" } : {}} />
              <label>Введите пароль</label>
              <input type='password' placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} style={formDataErrors.password ? { border: "2px solid red" } : {}} />
              <label>Повторите пароль</label>
              <input type='password' placeholder='Password' name='rPassword' value={formData.rPassword} onChange={handleInputChange} style={formDataErrors.password ? { border: "2px solid red" } : {}} />
              <label className="form-ur">
                <input className="UrLico" type="checkbox" name="checkbox" />
                Являюсь юридическим лицом
              </label>
            </form>
            <p style={{ color: "#E62632" }}>{formDataErrors.message}</p>
            <div className='AuthorizationBtn'>
              <button className='RegBtn active' onClick={handleRegClick}>Зарегистрироваться</button>
            </div>
            <form className='Agree'>
              <label className="form-control">
                <input type="checkbox" name="agree" />
                С текстом лецензионного договора-оферты согласен и даю согласие на обработку своих персональных данных.
              </label>
            </form>
          </>
        )}
      </div>
    </div>
  )
}