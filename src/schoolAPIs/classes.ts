import { Router, Request, Response, NextFunction } from "express";
import { createClass, getClass } from "../helpers/classesHelpers";

export const classesRouter: Router = Router({mergeParams: true});

classesRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    let foundSchoolData = await getClass(req.params.id);
    
    res.json(foundSchoolData);

    next();
});

classesRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    let schoolCreateResult = createClass(req.body);

    res.json(schoolCreateResult);

    next();
});

classesRouter.patch('/', (req: Request, res: Response, next: NextFunction) => {
    let responseJson = {
        id: req.params.id,
        name: 'Central'
    }

    res.json(responseJson);

    next();
});