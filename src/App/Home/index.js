import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { setTitle } from "../utils";

const Home = () => {
    useEffect(() => {
        setTitle("Home");
    });

    return (
        <div className="documentation container pt-3 pb-3">
            <div className="alert alert-complex alert-warning">
                <header className="alert-header">
                    <i className="material-icons alert-icon">warning</i>
                    <h3>Site under development</h3>
                </header>
                <div className="alert-body">
                    <p>The Design Guide is under active development and is subject to change.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 pt-3 pt-md-0 d-flex">
                    <div className="doc-card card card-plain">
                        <div className="card-body text-center d-flex flex-column">
                            <div className="doc-circle">
                                <i className="material-icons material-icons-large text-white">desktop_windows</i>
                            </div>
                            <h2>Documentation</h2>
                            <p>User interface components for websites and web applications</p>
                            <Link className="btn btn-guiding btn-outline btn-block mt-auto" to="/docs/getting-started/introduction">Documentation</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 pt-3 pt-md-0 d-flex">
                    <div className="doc-card card card-plain">
                        <div className="card-body text-center d-flex flex-column">
                            <div className="doc-circle">
                                <i className="material-icons material-icons-large text-white">list_alt</i>
                            </div>
                            <h2>Templates</h2>
                            <p>Document templates, usage description and tips.</p>
                            <Link className="btn btn-guiding btn-outline btn-block mt-auto" to="/tmpl">Templates</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 pt-3 pt-md-0 d-flex">
                    <div className="doc-card card card-plain">
                        <div className="card-body text-center d-flex flex-column">
                            <div className="doc-circle">
                                <i className="material-icons material-icons-large text-white">folder_open</i>
                            </div>
                            <h2>Resources</h2>
                            <p>Downloadables and resource usage guidelines.</p>
                            <Link className="btn btn-guiding btn-outline btn-block mt-auto" to="/res/getting-started/introduction">Resources</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
