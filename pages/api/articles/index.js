// You can make database calls here
// When you create something inside the folder API, it will be accessible from localhost:3000/api
import {articles} from '../../../data';

export default function handler(req, res)
{
    res.status(200).json(articles);
}
