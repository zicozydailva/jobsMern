import { FormRow, Alert, FormRowSelect } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJobs = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    handleChange,
    clearValues,
    createJob,
  } = useAppContext();

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if(isEditing) {
      // 
    }
    createJob()
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit Job" : "Add Job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* POSITION */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* COMPANY */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* POSITION */}
          <FormRow
            type="text"
            labelText="Job Location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* JOb STATUS */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* JOb TYPE */}
          <FormRowSelect
            name="jobType"
            labelText="Job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          {/* BTN CONTAINER */}
          <div className="btn-container">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn-block btn"
              disabled={isLoading}
            >
              submit
            </button>
            <button onClick={e => {
              e.preventDefault()
              clearValues()
            }}
            className="btn btn-block clear-btn"
            >clear</button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJobs;
