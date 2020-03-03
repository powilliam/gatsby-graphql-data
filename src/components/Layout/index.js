import React, { useState, useMemo, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { Switch } from '@material-ui/core';
import { Container, GlobalStyle } from './styles';

export default ({ theme, title, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                siteMetadata {
                    theme {
                        light {
                            backgroundColor
                            textColor
                            headerColor
                        }
                        dark {
                            backgroundColor
                            textColor
                            headerColor
                        }
                    }
                }
                }
            }
        `
    )

    const { light, dark } = data.site.siteMetadata.theme;
    
    const [currentTheme, setCurrentTheme] = useState('light');
    const handlerChangeCurrentTheme = useCallback(() => {
        currentTheme === 'light' 
        ? setCurrentTheme('dark') 
        : setCurrentTheme('light');
    });
    const memoizedCurrentTheme = useMemo(() => currentTheme === 'light' ? light : dark, [currentTheme]);
    const memoizedSwitcherChecked = useMemo(() => currentTheme === 'light' ? false : true, [currentTheme]);

    return (
        <ThemeProvider theme={memoizedCurrentTheme}>
            <GlobalStyle />
            <Container>
                <header>
                    <h1>{title}</h1>
                    <Switch
                        checked={memoizedSwitcherChecked}
                        onChange={handlerChangeCurrentTheme}
                        color="primary"
                    />
                </header>
    
                <main>
                    {children}
                </main>
            </Container>
        </ThemeProvider>
    )
}