// this file will tell that what will be the schema of our graphql server

const {gql} = require('graphql-tag');

// ID is a special scalar type that represents a unique identifier

const typeDefs = gql`
    type Product {
        id: ID!
        title: String!
        category: String!
        price: Float!
        inStock: Boolean!
    }
    type Query {
        products: [Product!]!
        product(id: ID!): Product
    }
    type Mutation {
        createProduct(title: String!, category: String!, price: Float!, inStock: Boolean!): Product
        deleteProduct(id: ID!): Boolean
        updateProduct(id: ID!, title: String, category: String, price: Float, inStock: Boolean): Product
    }
    
`;

module.exports = typeDefs;