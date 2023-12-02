import { useState } from 'react';

export default function usePersistedState(key) {

    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);
        return persistedState ? JSON.parse(persistedState) : null
    });

    function setPersistedState(value) {

        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);
        } else {
            localStorage.removeItem(key);
            setState(value);
        }

    }

    return [state, setPersistedState];
}