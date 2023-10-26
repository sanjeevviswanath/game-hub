import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Games {
  id: number;
  name: string;
}

interface FetGamesResponse {
  count: number;
  results: Games[];
}
const UseGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => {
      //cleanup function
      controller.abort();
    };
  }, []);

  return { games, error };
};

export default UseGames;
