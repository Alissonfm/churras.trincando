import React, { createContext, useState } from 'react';

interface Alert {
  message: string,
  type: 'success' | 'error',
  duration: number
}

interface AlertContextType {
  stack: Array<Alert>,
  pushAlert: Function,
  dismissAlert: Function
}

const AlertContexHook = createContext<AlertContextType>({} as AlertContextType)

const AlertContext: React.FC = ({ children }) => {
  const [stack, updateStack] = useState<Array<Alert>>([])

  const pushAlert = (newAlert: Alert) => updateStack((currentStack) => {
    const stackCopy = currentStack.concat([])
    stackCopy.push(newAlert)
    return stackCopy
  })

  const dismissAlert = (target: Alert) => {
    const stackCopy = stack.concat([])
    const index = stackCopy.indexOf(target)
    if (index >= 0) {
      stackCopy.splice(index, 1)
      updateStack(() => stackCopy)
    }
  }

  return (
    <AlertContexHook.Provider value={{ stack, pushAlert, dismissAlert }}>
      {children}
    </AlertContexHook.Provider>
  )
}

export default AlertContext