// add staff
export async function addStaff(newStaff) {
  try {
    const response = await fetch("http://localhost:3000/api/v1/staffs", {
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
    const response = await fetch("http://localhost:3000/api/v1/staffs", {
      cache: "no-store",
    });
    const staff = await response.json();
    return staff.staffs;
  } catch (error) {
    console.log(error);
  }
}

//update staff
export async function updateCategory({ id, updateStaffData }) {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/staffs/${id}`, {
      method: "DELETE",
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
    const response = await fetch(`http://localhost:3000/api/v1/staffs/${id}`, {
      method: "PATCH",
    });
    return response.json();
  } catch (error) {
    console.log("error in update staff", error);
  }
}
