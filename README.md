# Ecommerce Platform API
This is a RESTful API for managing product inventory in an ecommerce platform. It is built using Node.js and MongoDB.

## Getting Started
To get started with the API, follow these steps:

### Prerequisites
- Node.js (version 14 or above)
- MongoDB (Make sure MongoDB is installed and running on your system)

### Installation
1. Clone the repository:<br>
   `git clone https://github.com/erpankajk4/nodejs-ecommerce-api.git`

2. Navigate to the project directory:<br>
    `cd ecommerce-platform-api`

3. Install the dependencies:<br>
    `npm install`

4. Start the API server:<br>
    `npm start`

The server should now be running at http://localhost:8000 <br>

## API Endpoints
- To test the API using Postman:
1. Create a product
URL: POST /products/create<br>
Content-Type: application/json<br>

Example Request:<br>
`POST http://localhost:8000/products/create
{<br>
  "name": "laptop",
  "quantity": 10
}`<br>
Example Response:<br>
`{
  "product": {
    "name": "laptop",
    "quantity": 10,
    "_id": "609f4fbcf6b753001faad7a4",
  }
}`

2. List products
URL: GET /products

Example Request:
GET http://localhost:8000/products
`{
  "products": [
    {
      "_id": "609f4fbcf6b753001faad7a4",
      "name": "laptop",
      "quantity": 10,
    },
    {
      "_id": "609f4fbcf6b753001faad7a5",
      "name": "camera",
      "quantity": 5,
    },
    {
      "_id": "609f4fbcf6b753001faad7a6",
      "name": "smartwatch",
      "quantity": 8,
    }
  ]
}`

3. Delete a product
URL: DELETE /products/:id

Example Request:
DELETE http://localhost:8000/products/609f4fbcf6b753001faad7a4
Example Response:
`{
  "message": "Product deleted"
}`

4. Update quantity of a product
URL: POST /products/:id/update_quantity/?number=10

Example Request:
POST http://localhost:8000/products/609f4fbcf6b753001faad7a4/update_quantity/?number=10 
Example Response:
`{
    "product": {
      "_id": "609f4fbcf6b753001faad7a4",
      "name": "laptop",
      "quantity": 20,
    },
    "message": "Updated successfully"
  }`

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
