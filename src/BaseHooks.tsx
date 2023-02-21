import React from "react";
import useSyncState from "./hooks/useSyncState";

/**
 * RLeanBaseHooks
 *
 * Used to mount hooks to maintain proper functionality of RLean
 */
export function RLeanBaseHooks() {
  useSyncState();

  return null;
}
