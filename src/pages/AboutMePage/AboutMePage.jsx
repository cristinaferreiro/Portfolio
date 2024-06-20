import React from 'react';
import { Card } from 'react-bootstrap';
import './AboutMePage.css';

function AboutMePage() {
    return (
        <div className="aboutus-container">
            <Card className="text-center custom-card">
                <Card.Body>
                    <Card.Title>
                        <strong>Cristina Ferreiro</strong>
                    </Card.Title>
                    <hr />
                    <Card.Text>
                        Me llamo Cristina Ferreiro, y soy una entusiasta desarrolladora Fullstack con una extensa experiencia en administración.
                        Con la meta de ampliar mis competencias técnicas y comprender a fondo el proceso de desarrollo tecnológico, mejoré mis habilidades para convertirme en una desarrolladora Fullstack. Esta evolución me ha permitido combinar mis conocimientos previos con el desarrollo, siempre apuntando a la excelencia e innovación en cada proyecto.
                        Mi formación técnica abarca el dominio de tecnologías como React, JavaScript, Node.js, MongoDB, y una variedad de herramientas como Bootstrap, HTML y CSS. Además, tengo habilidades en el uso de herramientas de análisis y gestión como SQL y CRM.
                        Mi enfoque trasciende la ejecución técnica; me apasiona el diseño, la creación de prototipos, todo lo artístico y el análisis de usuarios para asegurar soluciones que sean no solo visualmente atractivas, sino también intuitivas y eficientes.
                        Creo que mi capacidad para trabajar en equipo, liderar proyectos, mi creatividad y mi adaptabilidad a nuevas tecnologías son contribuciones clave que aporto a cualquier entorno laboral.
                        Estoy constantemente ansiosa por aprender, además de explorar nuevas herramientas y metodologías para mejorar continuamente mi conjunto de habilidades y ofrecer lo mejor en cada desafío que enfrento.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AboutMePage;
