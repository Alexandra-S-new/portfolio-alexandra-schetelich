import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  as?: 'section' | 'header'
  id?: string
}

export function Section({ children, className = '', as: Tag = 'section', id }: SectionProps) {
  return (
    <Tag id={id} className={['container-page', 'section-padding', className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  )
}
