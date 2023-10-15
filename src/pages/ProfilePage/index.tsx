import React, { useEffect, useState } from 'react';
import './index.scss';
import { api } from '../../store/axiosCore/api';

function ProfilePage() {
    const [user, setUser] = useState({
        SecondName: "",
        FirstName: "",
        Email: "",
        LegalEntity: false,
    });
    const [editedField, setEditedField] = useState("");

    useEffect(() => {
        api.get(`/api/users/get-user-by-id`)
            .then((res) => {
                setUser({
                    SecondName: res.data.SecondName,
                    FirstName: res.data.FirstName,
                    Email: res.data.Email,
                    LegalEntity: res.data.LegalEntity,
                });
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const deleteUser = () => {
        api.delete(`/api/users/delete-user-by-id`)
            .then((res) => {
                console.log(res.data);
                console.log('User deleted');
                window.location.href="http://localhost:3000/authorization";
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleEdit = (field: any) => {
        setEditedField(field);
    };

    const handleSave = () => {
        // Отправка обновленных данных на сервер
        switch (editedField) {
            case "secondfield":
                setUser({
                    SecondName: user.SecondName,
                    FirstName: user.FirstName,
                    Email: user.Email,
                    LegalEntity: user.LegalEntity,
                })
                console.log(user)
        }
        // api.post('/api/users/update-user', updatedUserData); // Подставьте свой механизм обновления данных
    };

    const handleInputChange = (e: any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='Profile'>
            <img className='header-image' src='../Glavnaya_M_CreditCard200days20perc_1920_2x_.png' alt='header' />
            <div className='profile-image'>
                <img src='../icons8-пользователь-100.png' alt='user' />
                <h1>{user.FirstName} {user.SecondName}</h1>
            </div>
            <div className='user-data'>
                <div>
                    <h2>Фамилия</h2>
                    {editedField === "SecondName" ? (
                        <input
                            type="text"
                            name="SecondName"
                            value={user.SecondName}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p>{user.SecondName}</p>
                    )}
                    <a>
                        {editedField === "SecondName" ? (
                            <button onClick={handleSave}>Сохранить</button>
                        ) : (
                            <button onClick={() => handleEdit("secondname")}>Edit</button>
                        )}
                    </a>
                </div>
                <div>
                    <h2>Имя</h2>
                    {editedField === "FirstName" ? (
                        <input
                            type="text"
                            name="FirstName"
                            value={user.FirstName}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p>{user.FirstName}</p>
                    )}
                    <a>
                        {editedField === "FirstName" ? (
                            <button onClick={handleSave}>Сохранить</button>
                        ) : (
                            <button onClick={() => handleEdit("firstname")}>Edit</button>
                        )}
                    </a>
                </div>
                <div>
                    <h2>Email</h2>
                    {editedField === "Email" ? (
                        <input
                            type="text"
                            name="Email"
                            value={user.Email}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p>{user.Email}</p>
                    )}
                    <a>
                        {editedField === "Email" ? (
                            <button onClick={handleSave}>Сохранить</button>
                        ) : (
                            <button onClick={() => handleEdit("email")}>Edit</button>
                        )}
                    </a>
                </div>
                <div>
                    <h2>Юр. лицо</h2>
                    {editedField === "LegalEntity" ? (
                        <input
                            type="checkbox"
                            name="LegalEntity"
                            checked={user.LegalEntity}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p>{user.LegalEntity ? "Являюсь юр. лицом" : "Не являюсь юр. лицом"}</p>
                    )}
                    <a>
                        {editedField === "LegalEntity" ? (
                            <button onClick={handleSave}>Сохранить</button>
                        ) : (
                            <button onClick={() => handleEdit("legalentity")}>Edit</button>
                        )}
                    </a>
                </div>
            </div>

            <button className='delete-profile' onClick={deleteUser}>Удалить аккаунт</button>
        </div>
    );
}

export { ProfilePage };
