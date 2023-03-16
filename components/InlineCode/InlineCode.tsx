import React, { PropsWithChildren } from 'react'

import styles from './InlineCode.module.css'

export default function InlineCode({children}: PropsWithChildren) {
  return (
    <code className={styles.inlineCode}>{children}</code>
  )
}
