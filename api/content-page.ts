import { axios } from "./axios";
import type { ContentPage } from "./content-page.types";

const ENDPOINT = "/content-page/home";

export async function getContentPage() {
  const { data } = await axios.get<ContentPage[]>(ENDPOINT);
  return data;
}
