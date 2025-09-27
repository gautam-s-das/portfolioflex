import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Filter, User, Code, BarChart3, Download, Eye } from 'lucide-react';
import ProfileOverview from '@/components/ProfileOverview';
import SkillsVisualization from '@/components/SkillsVisualization';
import ProjectShowcase from '@/components/ProjectShowcase';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import { personalInfo } from '@/data/resumeData';

type FilterType = 'all' | 'data-analyst' | 'software-developer';
type TabType = 'data-analyst' | 'software-developer' | 'combined';

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('combined');
  const [projectFilter, setProjectFilter] = useState<FilterType>('all');
  const [experienceFilter, setExperienceFilter] = useState<FilterType>('all');
  const [skillsFilter, setSkillsFilter] = useState<FilterType>('all');

  const handleTabChange = (value: string) => {
    const newTab = value as TabType;
    setActiveTab(newTab);
    
    // Auto-adjust filters based on active tab
    if (newTab === 'data-analyst') {
      setProjectFilter('data-analyst');
      setExperienceFilter('data-analyst');
      setSkillsFilter('data-analyst');
    } else if (newTab === 'software-developer') {
      setProjectFilter('software-developer');
      setExperienceFilter('software-developer');
      setSkillsFilter('software-developer');
    } else {
      setProjectFilter('all');
      setExperienceFilter('all');
      setSkillsFilter('all');
    }
  };

  const FilterButtons = ({ 
    currentFilter, 
    onFilterChange 
  }: { 
    currentFilter: FilterType; 
    onFilterChange: (filter: FilterType) => void;
  }) => (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button
        variant={currentFilter === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onFilterChange('all')}
        className="flex items-center gap-1"
      >
        <Eye className="w-4 h-4" />
        All
      </Button>
      <Button
        variant={currentFilter === 'data-analyst' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onFilterChange('data-analyst')}
        className="flex items-center gap-1"
      >
        <BarChart3 className="w-4 h-4" />
        Data Analyst
      </Button>
      <Button
        variant={currentFilter === 'software-developer' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onFilterChange('software-developer')}
        className="flex items-center gap-1"
      >
        <Code className="w-4 h-4" />
        Software Developer
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold">{personalInfo.name}</h1>
                <p className="text-sm text-muted-foreground">Portfolio</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-1" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
          {/* Tab Navigation */}
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="data-analyst" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Data Analyst
              </TabsTrigger>
              <TabsTrigger value="software-developer" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Developer
              </TabsTrigger>
              <TabsTrigger value="combined" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Combined
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <TabsContent value="data-analyst" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Data Analyst Profile</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Specialized in data analytics, visualization, and machine learning with expertise in Python, SQL, and business intelligence tools.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <ProfileOverview activeTab="data-analyst" />
              </div>
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Skills & Expertise
                    </h3>
                    <FilterButtons 
                      currentFilter={skillsFilter} 
                      onFilterChange={setSkillsFilter} 
                    />
                    <SkillsVisualization filter={skillsFilter} />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Projects</h3>
                    <FilterButtons 
                      currentFilter={projectFilter} 
                      onFilterChange={setProjectFilter} 
                    />
                    <ProjectShowcase filter={projectFilter} />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Experience</h3>
                    <FilterButtons 
                      currentFilter={experienceFilter} 
                      onFilterChange={setExperienceFilter} 
                    />
                    <ExperienceTimeline filter={experienceFilter} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="software-developer" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Software Developer Profile</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Full-stack web developer with expertise in React, Java, Python, and modern web technologies for building scalable applications.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <ProfileOverview activeTab="software-developer" />
              </div>
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Skills & Expertise
                    </h3>
                    <FilterButtons 
                      currentFilter={skillsFilter} 
                      onFilterChange={setSkillsFilter} 
                    />
                    <SkillsVisualization filter={skillsFilter} />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Projects</h3>
                    <FilterButtons 
                      currentFilter={projectFilter} 
                      onFilterChange={setProjectFilter} 
                    />
                    <ProjectShowcase filter={projectFilter} />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Experience</h3>
                    <FilterButtons 
                      currentFilter={experienceFilter} 
                      onFilterChange={setExperienceFilter} 
                    />
                    <ExperienceTimeline filter={experienceFilter} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="combined" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Full Stack Developer & Data Analyst</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Versatile professional combining software development expertise with data analytics skills to build intelligent, data-driven applications.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <ProfileOverview activeTab="combined" />
              </div>
              <div className="lg:col-span-2 space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Skills & Expertise
                    </h3>
                    <FilterButtons 
                      currentFilter={skillsFilter} 
                      onFilterChange={setSkillsFilter} 
                    />
                    <SkillsVisualization filter={skillsFilter} />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Projects</h3>
                    <FilterButtons 
                      currentFilter={projectFilter} 
                      onFilterChange={setProjectFilter} 
                    />
                    <ProjectShowcase filter={projectFilter} />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Experience</h3>
                    <FilterButtons 
                      currentFilter={experienceFilter} 
                      onFilterChange={setExperienceFilter} 
                    />
                    <ExperienceTimeline filter={experienceFilter} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-4">
              <Badge variant="outline">React.js</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">Interactive Portfolio</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 {personalInfo.name}. Built with modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;