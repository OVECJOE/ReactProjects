const ProjectSection = () => {
    return (
        <div className='project-container'>
            <section className='add-project-card'>
                <div className='project-form'>
                    <p>Click me to add project info</p>
                    <div className="plus-sign">+</div>
                </div>
                <button>POST</button>
            </section>
            <section className='projects-section'>

            </section>
        </div>
    );
};

export default ProjectSection;