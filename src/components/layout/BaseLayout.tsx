
// Updated BaseLayout with proper export name
// Libraries imports
import { FC, ReactNode } from 'react'

// App level imports
import HeaderNavigationBar from './navigationBar/HeaderNavigationBar'

type BaseLayoutProps = {
  children: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderNavigationBar />
      <section className="pages">{children}</section>
    </>
  )
}

export default BaseLayout