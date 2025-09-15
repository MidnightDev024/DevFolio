import Project from '../models/project.js';

export const getProjects = async (req, res) => {
    try {
        const Project = await Project.find();
        res.json(Project);
    } catch (error) {
        res.status(500).json({
            message: 'SERVER ERROR!!'
        });
    }
}