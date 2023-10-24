// add product
export async function addProduct(newProduct) {
  try {
    const response = await fetch("http://localhost:3000/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
}

//get all products
export async function getAllProducts() {
  try {
    const response = await fetch("http://localhost:3000/api/v1/products", {
      cache: "no-store",
    });
    const products = await response.json();
    return products.products;
  } catch (error) {
    console.log(error);
  }
}

//update products
export async function updateProduct({ id, updateProductData }) {
  // console.log("id,updateProductData", id, updateProductData);
  try {
    const response = await fetch(`http://localhost:3000/api/v1/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProductData),
    });
    return response.json();
  } catch (error) {
    console.log("error in update product", error);
  }
}
