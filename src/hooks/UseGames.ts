import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

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
    apiClient
      .get<FetGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return { games, error };
};

export default UseGames;
