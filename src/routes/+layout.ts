import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
  return {
    timestamp: Date.now(),
  };
};
