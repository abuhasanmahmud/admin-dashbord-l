// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://admin-dashbord-l.vercel.app";

// add coupon
export async function addCoupon(newCoupon) {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/coupons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoupon),
    });
    const coupon = await response.json();
    return coupon;
  } catch (error) {
    console.log(error);
  }
}

//get all coupon
export async function getAllCoupons() {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/coupons`, {
      cache: "no-store",
    });
    const coupon = await response.json();
    return coupon.coupons;
  } catch (error) {
    console.log(error);
  }
}

//update coupon
export async function updateCoupon({ updateCouponData, id }) {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/coupons/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCouponData),
    });
    return response.json();
  } catch (error) {
    console.log("error in update coupon", error);
  }
}

// Delete Coupon
export async function deleteCoupon(id) {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/coupons/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.log("error in update coupon", error);
  }
}
