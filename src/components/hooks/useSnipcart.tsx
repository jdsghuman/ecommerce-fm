import { useState, createContext, useContext, useEffect } from 'react'

interface ContextProp {
  date: number
}

export const SnipcartContext = createContext<ContextProp>({} as ContextProp)

export const SnipcartProvider = ({ children }: any) => {
  const snipcart = useSnipcartState()
  return <SnipcartContext.Provider value={snipcart}>{children}</SnipcartContext.Provider>
}

export function useSnipcartState() {
  const [state, setState] = useState({})

  useEffect(() => {
    let unsubscribe: any
    ;(function pollToSubscribe() {
      if (!window.Snipcart) {
        setTimeout(() => {
          pollToSubscribe()
        }, 100)
        return
      }

      unsubscribe = window.Snipcart.store.subscribe(() => {
        const snipcartState = window.Snipcart.store.getState()
        setState(snipcartState)
      })
    })()

    return () => {
      if (unsubscribe) {
        unsubscribe
      }
    }
  }, [])
  return {
    ...state,
  }
}
export function useSnipcart() {
  const snipcart: any = useContext(SnipcartContext)
  return {
    ...snipcart,
  }
}
