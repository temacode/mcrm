import React from 'react';
import ContentHeader from './ContentHeader';
import TextHeader from './TextHeader';
import styled from 'styled-components';

const Button = styled.div`
display: inline-block;
min-width: 200px;
text-align: center;
background: #f4f4f4;
border-radius: 6px;
padding: 8px 16px;
color: #595959;
margin-top: 20px;
margin-bottom: 20px;
cursor: pointer;
transition: 0.3s;
:hover {
    background: #ebebeb;
}
`;
const InputFile = styled.input`
display: none;
`;

const Submit = styled(Button)`
display: none;
background: #393939;
color: #eaeaea;
:hover {
    background: #494949;
}
`;

const Settings = props => {

    const inputRef = React.createRef();
    const buttonRef = React.createRef();
    const submitRef = React.createRef();

    const selectFile = (e) => {
        inputRef.current.click();
    }
    const showSubmit = () => {
        submitRef.current.style.display = 'inline-block';
        buttonRef.current.innerHTML = inputRef.current.files[0].name;
    }

    const userpicChange = () => {
        if (inputRef.current.files.length) {
            props.userpicChange(inputRef.current);
        }
    }

    return(
        <div>
            <ContentHeader>Настройки</ContentHeader>
            <TextHeader>Загрузка аватарки профиля</TextHeader>
            <Button onClick={selectFile} ref={buttonRef}>Загрузить изображение</Button>
            <InputFile type="file" ref={inputRef} onChange={showSubmit} accept="image/jpeg,image/png"></InputFile><br />
            <Submit ref={submitRef} onClick={userpicChange}>Отправить</Submit>
            <p>{props.error}</p>
        </div>
    );
}

export default Settings;