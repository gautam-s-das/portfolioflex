import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { personalInfo, professionalSummaries, education, certifications, achievements } from '@/data/resumeData';

interface ProfileOverviewProps {
  activeTab: 'data-analyst' | 'software-developer' | 'combined';
}

const ProfileOverview: React.FC<ProfileOverviewProps> = ({ activeTab }) => {
  const getSummary = () => {
    switch (activeTab) {
      case 'data-analyst':
        return professionalSummaries.dataAnalyst;
      case 'software-developer':
        return professionalSummaries.softwareDeveloper;
      case 'combined':
        return `${professionalSummaries.softwareDeveloper} Additionally, ${professionalSummaries.dataAnalyst.toLowerCase()}`;
      default:
        return professionalSummaries.softwareDeveloper;
    }
  };

  const getFilteredCertifications = () => {
    if (activeTab === 'combined') return certifications;
    return certifications.filter(cert => 
      cert.type === activeTab || cert.type === 'both'
    );
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: personalInfo.linkedin },
    { icon: Github, label: 'GitHub', value: 'GitHub Profile', href: personalInfo.github },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
              <p className="text-lg text-muted-foreground mt-1">
                {activeTab === 'data-analyst' && 'Data Analyst'}
                {activeTab === 'software-developer' && 'Software Developer'}
                {activeTab === 'combined' && 'Full Stack Developer & Data Analyst'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {contactLinks.map((contact) => (
              <div key={contact.label} className="flex items-center gap-3">
                <contact.icon className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <span className="text-sm font-medium">{contact.label}:</span>
                  {contact.href ? (
                    <Button
                      variant="link"
                      className="p-0 h-auto text-sm"
                      onClick={() => window.open(contact.href!, '_blank')}
                    >
                      {contact.value}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  ) : (
                    <span className="text-sm text-muted-foreground ml-2">{contact.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Professional Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">{getSummary()}</p>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-sm text-muted-foreground">{edu.duration}</span>
                {edu.cgpa && (
                  <Badge variant="secondary">CGPA: {edu.cgpa}</Badge>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle>Certifications & Training</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {getFilteredCertifications().map((cert, index) => (
            <div key={index} className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-sm">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.provider}</p>
                {cert.duration && (
                  <p className="text-xs text-muted-foreground">{cert.duration}</p>
                )}
              </div>
              <Badge 
                variant="outline" 
                className={`text-xs ${
                  cert.type === 'data-analyst' ? 'bg-green-50 text-green-700 border-green-200' :
                  cert.type === 'software-developer' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                  'bg-purple-50 text-purple-700 border-purple-200'
                }`}
              >
                {cert.type === 'both' ? 'Both' : cert.type.replace('-', ' ')}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Key Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileOverview;