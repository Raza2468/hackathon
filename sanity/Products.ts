export default {
    name: 'Product',
    type: 'document',
    title: 'Prduct Name',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: "Image",
            type: "image",
            title: "Img"
        },
        {
            name: "Price",
            type: "string",
            title: "Price"
        }, {
            name: "Description",
            type: "string",
            title: "Description"
        }, {
            name: "Categories",
            title: "Product Categories",
            type: "reference",
            to: [{
                type: "Categories"
            }]
        }
    ]
}