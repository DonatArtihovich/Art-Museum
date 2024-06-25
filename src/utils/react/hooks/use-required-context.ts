import { useContext } from "react";

export const useRequiredContext =  <T>(ctx: React.Context<T | null>): T =>
  useContext(ctx) ?? (() => { throw new Error('Context Error: Null Context') })();