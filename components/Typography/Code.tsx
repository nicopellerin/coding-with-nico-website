import * as React from 'react'
import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCopy, FiCheckCircle } from 'react-icons/fi'

interface Props {
  code: string
  language?: Language
  children: any
}

const Code: FC<Props> = ({ children, language = 'jsx' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopyToClipboard = async () => {
    if (typeof window !== 'undefined') {
      const clipboard = window.navigator.clipboard
      await clipboard.writeText(children.trim())
      setCopied(true)
    }
  }

  useEffect(() => {
    let idx: ReturnType<typeof setTimeout>

    if (copied) {
      idx = setTimeout(() => setCopied(false), 3000)
    }

    return () => clearTimeout(idx)
  }, [copied])

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <Wrapper>
          <pre className="language-jsx" style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
          <CopyWrapper onClick={handleCopyToClipboard}>
            <AnimatePresence>
              {copied ? (
                <CopyText
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ color: 'lightgreen' }}
                >
                  <FiCheckCircle style={{ marginRight: 5 }} />
                  <span>Copied to clipboard</span>
                </CopyText>
              ) : (
                <CopyText
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ color: '#f4f4f4' }}
                >
                  <CopyToClipboardIcon title="Copy to clipboard" />
                  <span>Copy</span>
                </CopyText>
              )}
            </AnimatePresence>
          </CopyWrapper>
        </Wrapper>
      )}
    </Highlight>
  )
}

export default Code

// Styles
const Wrapper = styled.div`
  position: relative;
`

const CopyWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
  opacity: 0.9;
`

const CopyText = styled(motion.div)`
  display: flex;
  align-items: center;
`

const CopyToClipboardIcon = styled(FiCopy)`
  font-size: 2.2rem;
  padding: 5px;
`
