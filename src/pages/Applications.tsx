import { useEffect, useState } from "react";
import "./Applications.css";

import "./Dashboard.css";
import AddApplication from "./AddApplication";
import Button from "../components/Button";
const Applications = () => {
  const [applicationUpload, setApplicationUpload] = useState<boolean>(false);

  type Application = {
    company: string;
    position: string;
    status: string;
    appliedOn: string;
    notes: string;
    action?: string;
  };

  const [application, setApplication] = useState<Application[]>([]);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const fetchApplication = () => {
      setApplication([
        {
          company: "Tesla",
          position: "CEO",
          status: "Offer",
          appliedOn: "2025-01-12",
          notes: "no",
        },
        {
          company: "Nvidia",
          position: "CEO",
          status: "Applied",
          appliedOn: "2025-01-02",
          notes: "no",
        },
        {
          company: "Apple",
          position: "CTO",
          status: "Offer",
          appliedOn: "2025-01-20",
          notes: "no",
        },
        {
          company: "MicroSoft",
          position: "CFO",
          status: "Offer",
          appliedOn: "2025-01-08",
          notes: "Yes",
        },
      ]);
    };
    fetchApplication();
  }, []);
  const handleAdd = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="dashboard">
        <section className="main-page">
          <div className="main-page-header">
            <div className="header-left">
              <h2 className="heading">Application</h2>
              <p className="sub-heading">
                Track your job application and progress
              </p>
            </div>

            <Button btnName="+ Add Application" fun={handleAdd} />
          </div>
          {/* Content */}
          <div>
            {applicationUpload && <div>IF Application Upload</div>}
            <div className="app-notupload">
              <table className="job-table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Applied On</th>
                    <th>Notes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {application.map((data, id) => (
                    <tr key={id}>
                      <td>{data.company}</td>
                      <td>{data.position}</td>
                      <td>{data.status}</td>
                      <td>{data.appliedOn}</td>
                      <td>{data.notes}</td>
                      <td>
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {showModal && (
          <>
            <div className="modal-overlay" onClick={handleCloseModal}></div>
            <div className="modal-content">
              <h2 className="heading">Add Job Application</h2>
              <form className="modal-form">
                <label className="input-label">Company</label>
                <input
                  className="input-field"
                  name="company"
                  type="text"
                  placeholder="Enter company name"
                  required
                />

                <label className="input-label">Position</label>
                <input
                  className="input-field"
                  name="position"
                  type="text"
                  placeholder="Enter position"
                  required
                />

                <label className="input-label">Status</label>
                <select className="input-field" name="status" required>
                  <option value="">Select status</option>
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>

                <label className="input-label">Applied On</label>
                <input
                  className="input-field"
                  name="appliedOn"
                  type="date"
                  required
                />

                <label className="input-label">Notes</label>
                <textarea
                  className="input-field"
                  name="notes"
                  placeholder="Enter any notes"
                ></textarea>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button
                  type="button"
                  className="close-btn"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Applications;
