import { useQuery } from "@tanstack/react-query";
import { getContentPage } from "@api/content-page";
import type { ContentPage } from "@api/content-page.types";

export function useGetContentPage() {
  return useQuery<ContentPage[], Error>(["content-page"], getContentPage);
}
