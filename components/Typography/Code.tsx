import * as React from 'react'
import { FC } from 'react'
// import styled from 'styled-components'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'

interface Props {
  code: string
  language?: Language
  children: any
}

const Code: FC<Props> = ({ children, language = 'jsx' }) => {
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className="language-jsx" style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
    // <pre className="line-numbers">
    //   <code className={`language-${language}`}>{code}</code>
    // </pre>
  )
}

export default Code
