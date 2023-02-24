import { Router } from "express";

import { get, post } from '../controllers/index'

const router = Router()

router.get('/', get)

router.post('/', post)