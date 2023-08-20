import * as productService from '../services/productService.js'

export const getAllProducts = (req, res) => res.send(productService.getAllProducts)


export const getProductById = (req, res) => res.send(productService.getProductById(+req.params.id))

