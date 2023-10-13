import React from "react";
import { AiFillHome } from "react-icons/ai";
const NewUser = () => {
  return (
    <>
      <div className="bg-blue min-vh-100 min-vw-100 p-4 d-flex">
        {/* <!-- Left part --> */}
        <div className="col-6 d-flex justify-content-center align-items-center flex-column">
          <button className="btn btn-light back" onclick="window.location.href='/'">
            <AiFillHome style={{ color: "#4070f4" }} />
          </button>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div>
              <h1 className="heading">Registration</h1>
              <h1 className="heading">Form</h1>
            </div>
          </div>
        </div>
        {/* <!-- right part --> */}
        <div className="w-50 mx-auto my-auto shadow-sm bg-white border rounded-3 p-4">
          <h3 className="mb-4">
            <span className="underline">Re</span>gistration
          </h3>
          <form action="/create" method="post">
            {/* <!-- NAME --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="text" className="form-control shadow-sm" name="name" placeholder="Enter your name" required />
            </div>
            {/* <!-- EMAIL --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="email" className="form-control shadow-sm" name="email" placeholder="Enter your email" required />
            </div>
            {/* <!-- MOBILE --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="number" className="form-control shadow-sm" name="mobile" placeholder="Enter your mobile" required />
            </div>
            {/* <!-- ADDRESS --> */}
            <div className="mb-3 d-flex justify-content-center align-items-center w-100">
              <input type="text" className="form-control shadow-sm" name="address" placeholder="Enter your address" />
            </div>
            {/* <!-- GENDER --> */}
            <div className="mb-3 d-flex justify-content-start ps-1 align-items-center w-100">
              <label className="form-label me-5"> Gender </label>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="gender" required value="Male" id="Male" />
                <label className="form-check-label me-5" for="Male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="gender" required value="Female" id="Female" />
                <label className="form-check-label me-5" for="Female">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" name="gender" required value="Others" id="Others" />
                <label className="form-check-label me-5" for="Others">
                  Others
                </label>
              </div>
            </div>
            {/* <!-- HOBBIES --> */}
            <div className="mb-3 d-flex justify-content-start ps-1 align-items-center w-100">
              <label className="form-label me-5"> Hobbies </label>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Photography" id="Photography" />
                <label className="form-check-label me-5" for="Photography">
                  Photography
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Blogging" id="Blogging" />
                <label className="form-check-label me-5" for="Blogging">
                  Blogging
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Yoga" id="Yoga" />
                <label className="form-check-label me-5" for="Yoga">
                  Yoga
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="hobbies" value="Art" id="Art" />
                <label className="form-check-label me-5" for="Art">
                  Art
                </label>
              </div>
            </div>
            {/* <!-- PREFERENCES --> */}
            <div className="mb-3 d-flex justify-content-start ps-1 align-items-center w-100">
              <label className="form-label me-5"> Preferences </label>
              <select className="form-select" name="preferences">
                <option selected disabled>
                  Top Soft Skills
                </option>
                <option value="Problem Solving">Problem Solving</option>
                <option value="Critical Thinking">Critical Thinking</option>
                <option value="Creativity">Creativity</option>
              </select>
            </div>
            <button className="btn bg-blue btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewUser;
