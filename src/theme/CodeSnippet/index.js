import React, {useEffect, useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';

import styles from './styles.modules.scss';

function CodeSnippet(props) {
  const {
    siteConfig: {
      themeConfig: {prism = {}},
    },
  } = useDocusaurusContext();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const {isDarkTheme} = useThemeContext();
  const lightModeTheme = prism.theme;
  const darkModeTheme = prism.darkTheme || lightModeTheme;
  const prismTheme = isDarkTheme ? darkModeTheme : lightModeTheme;

  const {lang = 'ejs', snippet} = props;

  return (
    <Highlight
      {...defaultProps}
      key={mounted}
      theme={prismTheme}
      code={snippet}
      language={lang}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={`${className} ${styles.codeSnippet}`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default CodeSnippet;
