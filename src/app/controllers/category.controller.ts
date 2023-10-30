// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://admin-dashbord-l.vercel.app";

// add category
export async function addCategory(newCategory) {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/categorys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    });
    const category = await response.json();
    return category;
  } catch (error) {
    console.log(error);
  }
}

//get all category
export async function getAllCategory() {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/categorys`, {
      cache: "no-store",
    });
    const category = await response.json();
    return category.categorys;
  } catch (error) {
    console.log(error);
  }
}

//update products
export async function updateCategory({ id, updateCategoryData }) {
  // console.log("id,updateProductData", id, updateProductData);
  try {
    const response = await fetch(`${BASE_URL}/api/v1/categorys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCategoryData),
    });
    return response.json();
  } catch (error) {
    console.log("error in update category", error);
  }
}

// Delete Category
export async function deleteCategory(id) {
  // console.log("id,updateProductData", id, updateProductData);
  try {
    const response = await fetch(`${BASE_URL}/api/v1/categorys/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.log("error in update category", error);
  }
}
