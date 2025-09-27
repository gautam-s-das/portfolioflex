import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { skills, Skill } from '@/data/resumeData';

interface SkillsVisualizationProps {
  filter?: 'data-analyst' | 'software-developer' | 'all';
}

const SkillsVisualization: React.FC<SkillsVisualizationProps> = ({ filter = 'all' }) => {
  const getFilteredSkills = (): Skill[] => {
    if (filter === 'all') return skills;
    
    const dataAnalystSkills = ['data', 'programming'];
    const softwareDeveloperSkills = ['programming', 'frameworks', 'tools'];
    
    if (filter === 'data-analyst') {
      return skills.filter(skill => 
        dataAnalystSkills.includes(skill.category) || 
        ['Python', 'SQL', 'MySQL', 'Git/GitHub', 'VS Code', 'Excel', 'Jupyter Notebook'].includes(skill.name)
      );
    }
    
    if (filter === 'software-developer') {
      return skills.filter(skill => 
        softwareDeveloperSkills.includes(skill.category) || 
        ['Java', 'Python', 'JavaScript', 'HTML/CSS', 'C'].includes(skill.name)
      );
    }
    
    return skills;
  };

  const filteredSkills = getFilteredSkills();
  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryTitles = {
    programming: 'Programming Languages',
    data: 'Data & Analytics',
    frameworks: 'Frameworks & Libraries',
    tools: 'Tools & Platforms'
  };

  const categoryColors = {
    programming: 'bg-blue-500',
    data: 'bg-green-500',
    frameworks: 'bg-purple-500',
    tools: 'bg-orange-500'
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Skills Overview</h2>
        <p className="text-muted-foreground">
          {filter === 'all' && 'Complete technical skillset across both domains'}
          {filter === 'data-analyst' && 'Data analysis and visualization expertise'}
          {filter === 'software-developer' && 'Software development and programming skills'}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <Card key={category} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${categoryColors[category as keyof typeof categoryColors]}`} />
                {categoryTitles[category as keyof typeof categoryTitles]}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="secondary">{skill.level}%</Badge>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Skills Summary Chart */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Skills Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => {
              const avgLevel = Math.round(
                categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
              );
              
              return (
                <div key={category} className="text-center p-4 rounded-lg bg-muted/50">
                  <div className={`w-16 h-16 mx-auto mb-2 rounded-full ${categoryColors[category as keyof typeof categoryColors]} flex items-center justify-center text-white font-bold text-xl`}>
                    {avgLevel}%
                  </div>
                  <h3 className="font-semibold text-sm">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {categorySkills.length} skills
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsVisualization;