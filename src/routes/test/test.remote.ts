import { query } from "$app/server";

export const getData = query(async () => {
  return {
    items: ["Item 1", "Item 2", "Item 3"],
  };
});
