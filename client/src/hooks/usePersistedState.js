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

// export default function usePersistedState(key, defaultValue) {
//     const [state, setState] = useState(() => {
//         const persistedState = localStorage.getItem(key);

//         if (persistedState) {
//             return JSON.parse(persistedState);
//         }

//         return defaultValue;
//     });

//     const setPersistedState = (value) => {
//         setState(value);

//         let serializedValue;
//         if (typeof value === 'function') {
//             serializedValue = JSON.stringify(value(state));
//         } else {
//             serializedValue = JSON.stringify(value);
//         }

//         localStorage.setItem(key, serializedValue);
//     };

//     return [
//         state,
//         setPersistedState,
//     ];
// }