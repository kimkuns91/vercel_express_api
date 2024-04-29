import * as movieService from "../services/movieService";

import { Request, Response } from "express";

export const getAllMovies = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movies = await movieService.findMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
