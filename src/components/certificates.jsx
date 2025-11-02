import certificate_1 from "../assests/certificates/MERN-Full-Stack-Dev-Certificate.jpg";
import certificate_2 from "../assests/certificates/NPTEL Certificate 2025_page-0001.jpg";
import certificate_3 from "../assests/certificates/problem_solving_intermediate certificate_ Anil Kumar_page-0001.jpg";
import certificate_4 from "../assests/certificates/Google Workspace_page-0001.jpg";
import certificate_5 from "../assests/certificates/Anil Kumar_Networking_Basics_Certificate_page-0001.jpg";
import certificate_6 from "../assests/certificates/Anil_python_basic certificate_page-0001.jpg";

function Certificates() {
    return (
        <section className="section">
            <h2 className="section-title">Certificates</h2>
            <div className="Certificate-container">
                <div className="Certificate-card">
                    <div className="Certificate-author">
                        <div className="Certificate-image">
                            <img src={certificate_1} alt="Sarah Johnson"></img>
                        </div>
                        <div className="Certificate-info">
                            <h4>(MERN) Full Stack Developer</h4>
                        </div>
                    </div>
                </div>
                <div className="Certificate-card">
                    <div className="Certificate-author">
                        <div className="Certificate-image">
                            <img src={certificate_2} alt="Sarah Johnson"></img>
                        </div>
                        <div className="Certificate-info">
                            <h4>NPTEL-Certificate-2025</h4>
                        </div>
                    </div>
                </div>
                <div className="Certificate-card">
                    <div className="Certificate-author">
                        <div className="Certificate-image">
                            <img src={certificate_3} alt="Sarah Johnson"></img>
                        </div>
                        <div className="Certificate-info">
                            <h4>problem-solving-intermediate</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Certificate-container">
                <div className="Certificate-card">
                    <div className="Certificate-author">
                        <div className="Certificate-image">
                            <img src={certificate_4} alt="Sarah Johnson"></img>
                        </div>
                        <div className="Certificate-info">
                            <h4>Google-Workspace</h4>
                        </div>
                    </div>
                </div>
                <div className="Certificate-card">
                    <div className="Certificate-author">
                        <div className="Certificate-image">
                            <img src={certificate_5} alt="Sarah Johnson"></img>
                        </div>
                        <div className="Certificate-info">
                            <h4>Networking-Basics</h4>
                        </div>
                    </div>
                </div>
                <div className="Certificate-card">
                    <div className="Certificate-author">
                        <div className="Certificate-image">
                            <img src={certificate_6} alt="Sarah Johnson"></img>
                        </div>
                        <div className="Certificate-info">
                            <h4>Python-Basics</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates;