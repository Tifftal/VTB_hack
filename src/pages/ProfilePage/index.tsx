import { useEffect, useState } from 'react';
import './index.scss';
import { api } from '../../store/axiosCore/api';

function ProfilePage() {
    const [user, setUser] = useState({
        SecondName: "",
        FirstName: "",
        Email: "",
        LegalEntity: "",
    });


    useEffect(() => {
        api.get(`/api/users/get-user-by-id`)
            .then((res) => {
                console.log(res);
                setUser({
                    SecondName: res.data.SecondName,
                    FirstName: res.data.FirstName,
                    Email: res.data.Email,
                    LegalEntity: res.data.LegalEntity ? "Являюсь юр. лицом" : "Не являюсь юр. лицом",
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
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='Profile'>
            <img className='header-image' src='../Glavnaya_M_CreditCard200days20perc_1920_2x_.png' />
            <div className='profile-image'>
                <img src='../photo_2023-10-14 17.43.10.jpeg' alt='user' />
                <h1>{user.FirstName}{user.SecondName}</h1>
            </div>
            <div className='user-data'>
                <div>
                    <h2>Фамилия</h2>
                    <p>{user.SecondName}</p>
                    <a><button>Edit</button></a>
                </div>
                <div>
                    <h2>Имя</h2>
                    <p>{user.FirstName}</p>
                    <a><button>Edit</button></a>
                </div>
                <div>
                    <h2>Email</h2>
                    <p>{user.FirstName}</p>
                    <a><button>Edit</button></a>
                </div>
                <div>
                    <h2>Юр. лицо</h2>
                    <p>{user.LegalEntity}</p>
                    <a><button>Edit</button></a>
                </div>
            </div>

            <button className='delete-profile' onClick={() => deleteUser()}>Удалить аккаунт</button>
        </div>
    );
}

export { ProfilePage };
