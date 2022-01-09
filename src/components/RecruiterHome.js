import React, { useState } from "react";
import Loading_page from "./Loading_page";
import RecruiterNavbar from "./RecruiterNavbar";
import "./RecruiterHome.css";

function RecruiterHome() {
  const [Loading, setLoading] = useState(false);
  const [Jobs, setJobs] = useState([]);
  return (
    <>
      <RecruiterNavbar />
      {Loading ? (
        <Loading_page />
      ) : (
        <>
          <div className="RE_overallcontainer">
              <h2 className="RE_page_title">JOBS POSTED BY YOU</h2>
            <div className="RE_totle RE_colore">
              Totel jobs posted by You : {Jobs.length}
            </div>

            <section className="RE_job">
              <div>
                <div className="RE_colore">COMPANY NAME</div>
                <div>TCS</div>
                <div className="RE_colore">JOB DESCRIPTION</div>
                <div>
                  Job Description Processing activities for Retail Products
                  Ensure to understand and follow HDFC Bank Loan procedure and
                  regulatory requirements, control methodology. Ensure to
                  process daily transactions timely and accurately. Brain
                  storming for process efficiency, improve productivity. Strong
                  control sense, when theres deferring processing, process until
                  the appropriate level of approval or proper documentation is
                  obtained. Ensure that agreed control processes and procedure
                  are implemented to identify and mitigate risks in his/her area
                  of responsibility. Aim for Nil Operational Errors. Process
                  Excellence and Enhancements Identify and recommend measures to
                  check unproductive volumes and cases of potential misuse of
                  the banking systems Suggest gaps in processes, if any, and
                  changes required to address such gaps. To take up projects at
                  regional level. Punctuality, discipline, attendance &
                  training, Complaint management To maintain punctuality,
                  discipline and office decorum at all the time. Ensure
                  attendance is marked on daily basis through proper channel.
                  Impart training to the fellow team members and the Cross
                  function unit to avoid rework and First time not Right (FTNR).
                  Reducing Sales FTNR to less than 5% Ensure that all Processes
                  followed at Branch Operations are as per Standard Operating
                  Procedures laid down in the Operations Manual. Ensure password
                  sharing policy adhered to. To ensure clean and hygienic
                  environment in the Branch.
                </div>
                <div className="RE_colore">SKILLS</div>
                <div>
                  Skills Banking Product & Process Knowledge Planning and
                  Organizing Skills Communication Knowledge of Competition &
                  Current trends in financial Industry.
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default RecruiterHome;
