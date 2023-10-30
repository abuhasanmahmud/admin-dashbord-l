// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://admin-dashbord-l.vercel.app";

// add order
export async function addOrder(newOrder) {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
    const order = await response.json();
    return order;
  } catch (error) {
    console.log(error);
  }
}

//get all order
export async function getAllOrders() {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/orders`, {
      cache: "no-store",
    });
    const order = await response.json();
    return order.Orders;
  } catch (error) {
    console.log(error);
  }
}

//update order
export async function updateCategory({ id, updateOrderData }) {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/orders/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateOrderData),
    });
    return response.json();
  } catch (error) {
    console.log("error in update order", error);
  }
}

// Delete Order
export async function deleteOrder(id) {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/orders/${id}`, {
      method: "PATCH",
    });
    return response.json();
  } catch (error) {
    console.log("error in update order", error);
  }
}
