function Contact() {
  return (
    <div className="container mt-4">
      <h1>Contact</h1>
      <form>
        <input className="form-control" type="text" placeholder="Name" /><br />
        <input className="form-control" type="text" placeholder="Email" /><br />

        <label className="form-label">
          <input className="form-check-input" type="radio" name="gender" value="male" />
          Male
        </label>
        <br />

        <label>
          <input className="form-check-input" type="radio" name="gender" value="female" />
          Female
        </label>
        <br />
        <button className="btn btn-primary m-2" type="submit">submit</button>
      </form>
    </div>
  );
}

export default Contact;
