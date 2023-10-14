import './index.scss'

function ProfilePage() {

    return (
        <div className='Profile'>
            <img className='header-image' src='../Glavnaya_M_CreditCard200days20perc_1920_2x_.png' />
            <div className='profile-image'>
                <img src='../photo_2023-10-14 17.43.10.jpeg' />
                <h1>Varvara Talankina</h1>
            </div>
            <div className='user-data'>
                <div>
                    <h2>Фамилия</h2>
                    <p>Таланкина</p>
                    <a><button>Edit</button></a>
                </div>

                <div>
                    <h2>Имя</h2>
                    <p>Варвара</p>
                    <a><button>Edit</button></a>
                </div>

                <div>
                    <h2>Email</h2>
                    <p>Tifftal@yandex.ru</p>
                    <a><button>Edit</button></a>
                </div>

                <div>
                    <h2>Пароль</h2>
                    <p>****************</p>  {/* тут никакого пароля не будет, тупо звездочки */}
                    <a><button>Edit</button></a>
                </div>

                <div>
                    <h2>Юр. лицо</h2>
                    <p>Не являюсь юр. лицом</p>
                    <a><button>Edit</button></a>
                </div>

            </div>

            <button className='delete-profile'>Удалить аккаунт</button>

        </div>
    )

}

export { ProfilePage };