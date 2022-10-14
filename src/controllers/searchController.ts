import {Request, Response} from "express";

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    //esta estrutura if é para o caso do usuário entrar no campo de busca, não digitar nada na busca e apertar enter em seguida.
    if(!query){
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,   //list mostra os resultados da pesquisa
        query
    });
}