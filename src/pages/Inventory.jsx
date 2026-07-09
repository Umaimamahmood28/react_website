import { useState } from "react";
import "./Inventory.css";
import { FaPlus, FaTimes } from "react-icons/fa";

function Inventory() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", stock: 25, price: "$999" },
    { id: 2, name: "Headphones", category: "Audio", stock: 150, price: "$199" },
    { id: 3, name: "Smartphone", category: "Electronics", stock: 75, price: "$699" },
    { id: 4, name: "Keyboard", category: "Accessories", stock: 200, price: "$49" },
    { id: 5, name: "Monitor", category: "Electronics", stock: 40, price: "$299" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const productToAdd = {
      id: Date.now(),
      name: newProduct.name,
      category: newProduct.category,
      stock: parseInt(newProduct.stock),
      price: `$${newProduct.price.replace(/^\$/, "")}`,
    };
    setProducts((prev) => [...prev, productToAdd]);
    setNewProduct({ name: "", category: "", stock: "", price: "" });
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="inventory-header">
        <h1 className="dashboard-title">Inventory</h1>
        <button className="add-btn" onClick={() => setIsModalOpen(true)}>
          <FaPlus /> Add Product
        </button>
      </div>

      <div className="inventory-table-container">
        <div className="inventory-table-wrapper">
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.stock}</td>
                  <td>{product.price}</td>
                  <td className={product.stock > 25 ? "in-stock" : "low-stock"}>
                    {product.stock > 25 ? "In Stock" : "Low Stock"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Product</h2>
              <button
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            <form className="add-product-form" onSubmit={handleAddProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Stock Quantity</label>
                <input
                  type="number"
                  name="stock"
                  value={newProduct.stock}
                  onChange={handleInputChange}
                  required
                  min="0"
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  placeholder="e.g., 99"
                  required
                />
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="save-product-btn">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventory;
