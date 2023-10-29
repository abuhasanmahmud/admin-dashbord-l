const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://admin-dashbord-l.vercel.app";

// add staff
export async function addStaff(newStaff) {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/staffs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStaff),
    });
    const staff = await response.json();
    return staff;
  } catch (error) {
    console.log(error);
  }
}

//get all staff
export async function getAllStaffs() {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/staffs`, {
      cache: "no-store",
    });
    const staff = await response.json();
    return staff.staffs;
  } catch (error) {
    console.log(error);
  }
}

//update staff
export async function updateStaff({ updateStaffData, id }) {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/staffs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateStaffData),
    });
    return response.json();
  } catch (error) {
    console.log("error in update staff", error);
  }
}

// Delete Staff
export async function deleteStaff(id) {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/staffs/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.log("error in update staff", error);
  }
}
