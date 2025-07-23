// const products = require('../data/product');
const products = require('../model/product'); 
const resolvers = {
    Query: {
        products: async () => await products.find({}),
        product: async (_, { id }) => await products.findById(id)
    },
    Mutation: {
         createProduct: async (_, args) => {
      const newlyCreatedProduct = new products(args);

      return await newlyCreatedProduct.save();
    },

    updateProduct: async (_, { id, ...updatedFields }) => {
      return await products.findByIdAndUpdate(id, updatedFields, { new: true });
    },

    deleteProduct: async (_, { id }) => {
      const deletedProduct = await Product.findByIdAndDelete(id);

      return !!deletedProduct;
    },
    }
};

module.exports = resolvers;