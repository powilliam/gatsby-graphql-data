import React, { useState, useMemo, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider, ThemeConsumer } from 'styled-components';

import { Switch } from '@material-ui/core';
import { Container, GlobalStyle } from './styles';

export default ({ aside, children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
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

    const memoizedSiteTitle = useMemo(() => data.site.siteMetadata.title, [data.site.siteMetadata]);
    const memoizedCurrentTheme = useMemo(() => currentTheme === 'light' ? light : dark, [currentTheme, light, dark]);
    const memoizedSwitcherChecked = useMemo(() => currentTheme === 'light' ? false : true, [currentTheme]);

    return (
        <ThemeProvider theme={memoizedCurrentTheme}>
            <GlobalStyle />
            <Container>
                <header>
                    <h1>{memoizedSiteTitle}</h1>
                    <Switch
                        checked={memoizedSwitcherChecked}
                        onChange={handlerChangeCurrentTheme}
                        color="primary"
                    />
                </header>

                {children}
            </Container>
        </ThemeProvider>
    )
}