"use client";

import { useCallback, useState } from "react";

/**
 * Small boolean state helper for things like password visibility or open/close menus.
 * Returns the current value plus stable toggle/setTrue/setFalse callbacks.
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse, setValue };
}
