import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    seed: Math.floor(Math.random() * 1000),
  };
};
