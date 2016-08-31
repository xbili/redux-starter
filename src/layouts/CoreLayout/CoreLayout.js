import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

export const CoreLayout = ({children}) => (
  <MuiThemeProvider>
    <div className="main">
      {children}
    </div>
  </MuiThemeProvider>
)

