// add coupon
export async function addCoupon(newCoupon) {
  try {
    const response = await fetch("http://localhost:3000/api/v1/coupons", {
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
    const response = await fetch("http://localhost:3000/api/v1/coupons", {
      cache: "no-store",
    });
    const coupon = await response.json();
    return coupon.coupons;
  } catch (error) {
    console.log(error);
  }
}

//update coupon
export async function updateCoupon({ id, updateCouponData }) {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/coupons/${id}`, {
      method: "DELETE",
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
    const response = await fetch(`http://localhost:3000/api/v1/coupons/${id}`, {
      method: "PATCH",
    });
    return response.json();
  } catch (error) {
    console.log("error in update coupon", error);
  }
}
