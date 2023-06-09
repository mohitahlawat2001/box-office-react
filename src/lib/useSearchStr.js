import { useEffect, useState } from "react"

const usePersistedState = (initialState, sessionStorageKey) => {
    const [state, setState] = useState(() => {
        const persistedState = sessionStorage.getItem(sessionStorageKey)
        return persistedState ? JSON.parse(persistedState) : initialState
    })

    useEffect(() => {
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(state))
    }, [state, sessionStorageKey])

    return [state, setState]
}


export const useSearchStr = () => {
    const [searchStr, setSearchStr] = usePersistedState('', 'searchStr')
    return [searchStr, setSearchStr]
}
