import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiPhp,
    DiMysql,
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiWordpress
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
    SiTailwindcss,
    SiBootstrap,
    SiLaravel,
    SiCakephp
} from "react-icons/si";
import { TbBrandGolang, TbBrandCakephp } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";

function Techstack() {
    return (
        <div>
            {/* Frontend Technologies */}
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Frontend Technologies</h3>
            <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiHtml5 />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiCss3 />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiSass />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiBootstrap />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiTailwindcss />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJavascript1 />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiReact />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <FaVuejs />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiNextdotjs />
                </Col>
            </Row>

            {/* Backend Technologies */}
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Backend Technologies</h3>
            <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiPhp />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiLaravel />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <TbBrandCakephp />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiMysql />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiMongodb />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiPostgresql />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiRedis />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiNodejs />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <TbBrandGolang />
                </Col>
            </Row>

            {/* Other Technologies */}
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Other Technologies</h3>
            <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiPython />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJava />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiGit />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiFirebase />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiWordpress />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiSolidity />
                </Col>
            </Row>
        </div>
    );
}

export default Techstack;
