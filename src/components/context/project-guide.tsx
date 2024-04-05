import React, { ReactNode } from 'react'

interface PropsFocusType {
  focused: string[]
  handleType: (id: string) => void
}

interface PropsProvider {
  children: ReactNode
}

export const ProjectContext = React.createContext({} as PropsFocusType)

export const ProjectFocusProvider = ({ children }: PropsProvider) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focused, setFocused] = React.useState<string[]>(['1', '2', '3'])
  const mark = ['1', '2', '3']

  const handleType = (id: string) => {
    console.log(id, focused)
    if (id === mark[0]) {
      const flag = focused

      const response = flag.map((item) => {
        item = String(+item + 1)
        if (+item > 3) {
          item = '1'
        }
        return String(item)
      })
      setFocused(response)
    } else if (id === mark[2]) {
      const flag = focused

      const response = flag.map((item) => {
        item = String(+item - 1)
        if (+item < 1) {
          item = '3'
        }
        return String(item)
      })
      setFocused(response)
    }

    console.log('focused', focused)
  }

  const valueProvider = {
    focused,
    handleType,
  }

  return (
    <ProjectContext.Provider value={valueProvider}>
      {children}
    </ProjectContext.Provider>
  )
}

export const useContextFormat = () => React.useContext(ProjectContext)
