import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { projects, Project } from '@/data/resumeData';

interface ProjectShowcaseProps {
  filter?: 'data-analyst' | 'software-developer' | 'all';
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ filter = 'all' }) => {
  const getFilteredProjects = (): Project[] => {
    if (filter === 'all') return projects;
    if (filter === 'data-analyst') {
      return projects.filter(project => 
        project.type === 'data-analyst' || project.type === 'both'
      );
    }
    if (filter === 'software-developer') {
      return projects.filter(project => 
        project.type === 'software-developer' || project.type === 'both'
      );
    }
    return projects;
  };

  const filteredProjects = getFilteredProjects();

  const getProjectTypeColor = (type: Project['type']) => {
    switch (type) {
      case 'data-analyst':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'software-developer':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'both':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getProjectTypeLabel = (type: Project['type']) => {
    switch (type) {
      case 'data-analyst':
        return 'Data Analytics';
      case 'software-developer':
        return 'Software Development';
      case 'both':
        return 'Full Stack';
      default:
        return 'General';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Project Portfolio</h2>
        <p className="text-muted-foreground">
          {filter === 'all' && 'Showcasing projects across data analytics and software development'}
          {filter === 'data-analyst' && 'Data analysis and machine learning projects'}
          {filter === 'software-developer' && 'Web development and software engineering projects'}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getProjectTypeColor(project.type)}`}
                >
                  {getProjectTypeLabel(project.type)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2 pt-2">
                {project.githubUrl && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No projects found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;