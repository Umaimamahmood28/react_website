import { useState } from "react";
import "./AddProduct.css";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [manufacturingDate, setManufacturingDate] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Product Name Validation
    if (!productName.trim()) {
      newErrors.productName = "Product Name is required";
    } else if (productName.trim().length < 3) {
      newErrors.productName =
        "Product Name must be at least 3 characters";
    }

    // Price Validation
    if (!price) {
      newErrors.price = "Price is required";
    } else if (Number(price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    // Category Validation
    if (!category) {
      newErrors.category = "Please select a category";
    }

    // Quantity Validation
    if (!quantity) {
      newErrors.quantity = "Quantity is required";
    } else if (Number(quantity) <= 0) {
      newErrors.quantity = "Quantity must be greater than 0";
    }

    // Status Validation
    if (!status) {
      newErrors.status = "Please select product status";
    }

    // Date Validation
    if (!manufacturingDate) {
      newErrors.manufacturingDate = "Please select a date";
    }

    // Description Validation
    if (!description.trim()) {
      newErrors.description = "Description is required";
    } else if (description.trim().length < 10) {
      newErrors.description =
        "Description must be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Console Output
    console.log({
      productName,
      price,
      category,
      quantity,
      status,
      manufacturingDate,
      productImage,
      description,
    });

    // Success Message
    setSuccessMessage("Product added successfully!");

    // Reset Form
    setProductName("");
    setPrice("");
    setCategory("");
    setQuantity("");
    setStatus("");
    setManufacturingDate("");
    setProductImage(null);
    setDescription("");
    setErrors({});
  };

  return (
    <div className="add-product">
      <h1>Add New Product</h1>

      {successMessage && (
        <p className="success">{successMessage}</p>
      )}

      <form className="product-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>
            Product Name <span className="required">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Dell Laptop"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          {errors.productName && (
            <p className="error">{errors.productName}</p>
          )}
        </div>

        <div className="form-group">
          <label>
            Price <span className="required">*</span>
          </label>
          <input
            type="number"
            placeholder="e.g. 50000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && (
            <p className="error">{errors.price}</p>
          )}
        </div>

        <div className="form-group">
          <label>
            Category <span className="required">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Audio">Audio</option>
          </select>
          {errors.category && (
            <p className="error">{errors.category}</p>
          )}
        </div>

        <div className="form-group">
          <label>
            Quantity <span className="required">*</span>
          </label>
          <input
            type="number"
            placeholder="e.g. 10"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {errors.quantity && (
            <p className="error">{errors.quantity}</p>
          )}
        </div>

        <div className="form-group">
          <label>
            Status <span className="required">*</span>
          </label>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="status"
                value="Available"
                checked={status === "Available"}
                onChange={(e) => setStatus(e.target.value)}
              />
              Available
            </label>

            <label>
              <input
                type="radio"
                name="status"
                value="Out of Stock"
                checked={status === "Out of Stock"}
                onChange={(e) => setStatus(e.target.value)}
              />
              Out of Stock
            </label>
          </div>

          {errors.status && (
            <p className="error">{errors.status}</p>
          )}
        </div>

        <div className="form-group">
          <label>
            Manufacturing Date <span className="required">*</span>
          </label>
          <input
            type="date"
            value={manufacturingDate}
            onChange={(e) => setManufacturingDate(e.target.value)}
          />
          {errors.manufacturingDate && (
            <p className="error">{errors.manufacturingDate}</p>
          )}
        </div>

        <div className="form-group">
          <label>Product Image (Optional)</label>
          <input
            type="file"
            onChange={(e) => setProductImage(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <label>
            Description <span className="required">*</span>
          </label>
          <textarea
            rows="4"
            placeholder="Enter a detailed product description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {errors.description && (
            <p className="error">{errors.description}</p>
          )}
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;