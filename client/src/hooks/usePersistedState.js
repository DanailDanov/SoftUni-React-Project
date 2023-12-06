import { useState } from 'react';

export default function usePersistedState(key) {

    const [value, setValue] = useState(() => {
        const persistedState = localStorage.getItem(key);
        return persistedState ? JSON.parse(persistedState) : null;
    });

    function setPersistedState(newValue) {
        if (newValue) {
            localStorage.setItem(key, JSON.stringify(newValue));
            setValue(newValue);
        } else {
            localStorage.removeItem(key);
            setValue(null);
        }
    }

    return [value, setPersistedState];
}

