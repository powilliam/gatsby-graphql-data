import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.backgroundColor};

    font-family: sans-serif;

    display: flex;
    flex-direction: column;

    h1 {
        color: ${props => props.theme.textColor};
    }

    header {
        width: 100%;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0px 40px;
        background-color: ${props => props.theme.headerColor};
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.10);

        h1 {
            font-size: 20px;
        }
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 100px 40px;

        h1 {
            color: #7159c1;
            margin-bottom: 40px;
        }

        p {
            color: ${props => props.theme.textColor};
            margin: 5px 0px;
        }
    }
`

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100vh;
    }
`