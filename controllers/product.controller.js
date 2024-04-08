import Product from '../models/product.model.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        product
            ? res.status(200).json(product)
            : res.status(404).json({ message: 'Product not found' })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
export const createProduct = async (req, res) => {
    try {
        const products = await Product.create(req.body)
        res.status(200).json(products)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        product
            ? res.status(200).json(await Product.findById(id))
            : res.status(404).json({ message: 'Product not found' })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        product
            ? res.status(200).json({
                  message: !(await Product.findById(id))
                      ? 'Product deleted successfully'
                      : 'operation failed!',
              })
            : res.status(404).json({ message: 'Product not found' })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}
