import axios, { AxiosError, AxiosResponse } from "axios";

export const baseURL = "http://localhost:8080";
export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

interface TeamMember {
  name: string;
  role: string;
  units: string;
  description: string;
  avatar: string;
  github: string | null;
  facebook: string | null;
  linkedin: string | null;
  twitter: string | null;
  envelope: string | null;
}

export async function getTeamMembers(): Promise<TeamMember[] | null> {
  const endpoint = "/team/get_team_members";

  try {
    const response: AxiosResponse<TeamMember[]> = await axiosInstance.get(
      endpoint
    );
    return response.data;
  } catch (error: AxiosError | any) {
    console.error("Error fetching team members:", error.message || error);
    return null;
  }
}
export async function getCarouselImageLinks(): Promise<string[] | null> {
  const endpoint = "/static/carosel";
  try {
    const response = await axiosInstance.get(endpoint);
    const htmlContent = response.data;

    const imageLinks: string[] = htmlContent
      .match(/href="\/static\/carosel\/(.*?)"/g)
      .map((match: any) => match.match(/"([^"]*)"/)?.[1] || "");

    return imageLinks.map((link) => baseURL + link);
  } catch (error) {
    console.error("Error fetching carousel image names:", error);
    return null;
  }
}
