import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div>
      <h2 className="fw-bold  mt-4">Blog Section</h2>
      <div>
        <div className="QA">
          <h3 className="fw-bold">What is cors?</h3>
          <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos </p>
        </div>
        <div className="QA">
          <h3 className="fw-bold">Why are you using firebase? What other options do you have to implement authentication?</h3>
          <p>
            Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don't have to send requests to get new data, you only need to subscribe once. <br />
            Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
          </p>
        </div>
        <div className="QA">
          <h3 className="fw-bold">How does the private route work?</h3>
          <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
        </div>
        <div className="QA">
          <h3 className="fw-bold">What is Node? How does Node work?</h3>
          <p>
            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications <br />
            Node is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
