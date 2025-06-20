
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'

// App-level imports
import { Router } from './router'
import Error, { ErrorProps } from './components/Error'

interface IRenderProps extends ErrorProps {
  path: string
  statusCode?: number
}

export function render(url: string, options: { statusCode?: number } = {}) {
  const { statusCode } = options
  
  if (statusCode) {
    return {
      html: ReactDOMServer.renderToString(<Error statusCode={statusCode} />),
      head: '',
    }
  }

  const helmetContext: { helmet?: any } = {}

  console.log("SSR: Rendering URL:", url);

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <Router />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  )

  const { helmet } = helmetContext

  // Build complete head content with proper overrides
  let head = ''
  
  if (helmet) {
    const title = helmet.title.toString()
    const meta = helmet.meta.toString()
    const link = helmet.link.toString()
    const script = helmet.script.toString()
    const style = helmet.style.toString()

    head = `
      ${title}
      ${meta}
      ${link}
      ${script}
      ${style}
    `.trim()
  }

  return { html, head }
}
