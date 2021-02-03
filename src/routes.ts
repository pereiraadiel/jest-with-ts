import { Request, Response, Router } from 'express';

const Routes = Router();

Routes.post("/sum", (request: Request, response: Response) => {
  const { numberOne, numberTwo} = request.body;
  return response.status(200).json({
    response: numberOne+numberTwo,
  });
});

Routes.post("/sub", (request: Request, response: Response) => {
  const { numberOne, numberTwo} = request.body;
  return response.status(200).json({
    response: numberOne-numberTwo,
  });
});

Routes.get("/hello", (request: Request, response: Response) => {
  return response.status(200).json({
    message: "Hello World!"
  });
});

export default Routes;
