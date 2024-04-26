import { Router } from "express";
import { Request, Response } from "express";

export const routes = (router: Router) => {
  // TODO: Add middleware
  router.get("/email/healthCheck",async (req: Request, res: Response) => {
    res.send();
  });
};