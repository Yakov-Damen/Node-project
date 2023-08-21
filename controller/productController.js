import * as productService from '../services/productService.js'

export const getAllProducts = async (req, res) => {
    try {
    res.send(await productService.getAllProducts());
    } catch (error) {
        res.status(500).send('error: ' + error.message);
    }}

export const getProductById = async (req, res) => {
    try {
    res.send(await productService.getProductById(+req.params.id));
    } catch (error) {
        res.status(500).send(error);
    }}

export const addProduct = async (req, res) => {
    try {
    res.send(await productService.addProduct(req.body));
    } catch (error) {
        res.status(500).send(error);
    }}

export const updateProduct = async (req, res) => {
    try {
    res.send(await productService.updateProduct(+req.params.id, req.body));
    } catch (error) {
        res.status(500).send(error);
    }}

export const updateProductCount = async (req, res) => {
    try {
    res.send(await productService.updateProductCount(+req.params.id, req.body));
    } catch (error) {
        res.status(500).send(error);
    }}

export const deleteProduct = async (req, res) => {
    try {
    res.send(await productService.deleteProduct(+req.params.id));
    } catch (error) {
        res.status(500).send(error);
    }}