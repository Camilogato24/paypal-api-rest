import { Router } from "express";

const paymentrouters = Router();

paymentrouters.get('/create-order', (req, res) => res.send("Orden creada"));

export default router;