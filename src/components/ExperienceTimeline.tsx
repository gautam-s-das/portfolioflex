import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';
import { experiences, Experience } from '@/data/resumeData';

interface ExperienceTimelineProps {
  filter?: 'data-analyst' | 'software-developer' | 'all';
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ filter = 'all' }) => {
  const getFilteredExperiences = (): Experience[] => {
    if (filter === 'all') return experiences;
    if (filter === 'data-analyst') {
      return experiences.filter(exp => 
        exp.type === 'data-analyst' || exp.type === 'both'
      );
    }
    if (filter === 'software-developer') {
      return experiences.filter(exp => 
        exp.type === 'software-developer' || exp.type === 'both'
      );
    }
    return experiences;
  };

  const filteredExperiences = getFilteredExperiences();

  const getExperienceTypeColor = (type: Experience['type']) => {
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

  const getExperienceTypeLabel = (type: Experience['type']) => {
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
        <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
        <p className="text-muted-foreground">
          {filter === 'all' && 'Internship experience across data analytics and software development'}
          {filter === 'data-analyst' && 'Data analysis and business intelligence experience'}
          {filter === 'software-developer' && 'Software development and engineering experience'}
        </p>
      </div>

      <div className="space-y-6">
        {filteredExperiences.map((experience, index) => (
          <Card key={experience.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-xl">{experience.title}</CardTitle>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className={`w-fit ${getExperienceTypeColor(experience.type)}`}
                >
                  {getExperienceTypeLabel(experience.type)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredExperiences.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No experience found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceTimeline;