import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <div>
            <h1>Войдите</h1>
            <form>
                <input type="text" placeholder="Логин"></input><br />
                <input type="password" placeholder="Пароль"></input>
            </form>
        </div>
    );
}

export default Login;