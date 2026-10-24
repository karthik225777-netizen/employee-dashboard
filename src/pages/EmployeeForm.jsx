import { useState } from "react";

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h2 className="fw-bold mb-2">Employee Form</h2>
              <p className="text-muted mb-4">
                Enter the employee details below.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter employee name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">
                    Designation
                  </label>
                  <input
                    id="designation"
                    name="designation"
                    type="text"
                    className="form-control"
                    placeholder="Enter designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    className="form-control"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="salary" className="form-label">
                    Salary
                  </label>
                  <input
                    id="salary"
                    name="salary"
                    type="number"
                    min="0"
                    step="any"
                    className="form-control"
                    placeholder="Enter salary"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>

              {submitted && (
                <div className="alert alert-success mt-3 mb-0">
                  Form validated successfully! No data was sent to a server.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;