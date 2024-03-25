import { useState } from "react";

export default function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    const togglevalue = () => {
        setValue(!value);
    };

    return [value, togglevalue];
}