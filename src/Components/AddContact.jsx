const AddContact = () => {
  return (
    <>
      <div className="container mt-3">
        <h3 className="fw-bold text-start">Add Contact</h3>
        <form>
          <div class="form-group mb-3">
            <label className="left-aligned">Name:</label>
            <input type="text" class="form-control" placeholder="name" />
          </div>
          <div class="form-group mb-3">
            <label>Email:</label>
            <input type="email" class="form-control" placeholder="email" />
          </div>
          <button type="submit" class="btn btn-primary">
            Create Contact
          </button>
        </form>
      </div>
    </>
  );
};

export default AddContact;
