let initialState =
    [
        {
            href: '/users',
            title: 'Пользователи'
        },
        {
            href: '/req',
            title: 'Заявки'
        },
        {
            href: '/req',
            title: 'Конструктор'
        },
        {
            href: '/req',
            title: 'Заявки'
        },
        {
            href: '/req',
            title: 'Заявки'
        },
        {
            href: '/login',
            title: 'Выйти'
        }
    ]

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default menuReducer;