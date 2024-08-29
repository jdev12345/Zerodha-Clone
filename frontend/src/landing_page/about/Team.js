import React from "react";

function Team() {
  return (
    <div className="container">
      <h1 className="text-center">People</h1>
      <div className="row m-5 p-5">
        <div className="col-5  text-center">
          <img
            src="media/images/dev.jpg"
            style={{ width: "80%", borderRadius: "50%",marginTop:"50px" ,filter:"grayscale(1)"}}
            alt=""
          />
          <div className="col text-center mt-4 bold">
            <h3>Dev Jyoti</h3>
            <div className="text-muted">Developer</div>
          </div>
        </div>
        <div className="col-7">
          <p>
          Dev Jyoti began his academic journey at the Indian Institute of Technology, Guwahati, where he is pursuing a B.Tech in Chemical Engineering with a Minor in Mathematics. His deep-seated passion for web development is showcased through his active participation in various technical projects and leadership roles. Dev has honed his skills in programming languages like C/C++ and JavaScript, enabling him to develop dynamic and efficient web applications. He has also gained practical experience with industry-standard tools such as Aspen HYSYS and IBM Cplex. Dev's dedication to excellence extends beyond academics, as he consistently applies his technical expertise to real-world challenges, making significant contributions to the field of web development.
          </p>

          <p>
            As the Web Head of SAIL at IIT Guwahati, Dev has demonstrated his
            leadership and technical skills by successfully deploying critical
            portals such as the YearBook Portal. His contributions extend to
            Alcheringa, where he played a pivotal role in developing key web
            portals as part of the WebOps team. Dev's achievements include
            securing high ranks in both JEE Advanced and JEE Mains, solidifying
            his standing as a diligent and capable student.
          </p>

          <p>
            Outside of academics, Dev Jyoti enjoys immersing himself in the
            world of PC gaming, with a particular fondness for games like Elden
            Ring, which provides a perfect balance to his academic pursuits.
          </p>
          <p>
            Connect on <a target="_blank" href="https://www.linkedin.com/in/dev-jyoti-122221228/">LinkedIn</a> /
                      <a target="_blank" href="https://github.com/jdev12345"> GitHub </a> / 
                      <a href="mailto:devjyoti598@gmail.com">Email</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
