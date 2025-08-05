import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  HandHeart,
  Users,
  GraduationCap,
  Share2,
  Coins,
  Wrench,
  BookOpen,
  MessageCircle,
  CheckCircle,
  Target
} from 'lucide-react';

const Involvement = () => {
  const wayToHelp = [
    {
      icon: HandHeart,
      title: 'Volunteer Your Time',
      description:
        'Join our field teams to provide hands-on support to farmers in implementing sustainable farming techniques.',
      commitment: '4-8 hours/week',
      impact: 'Direct support to 10-15 farmers',
      requirements: [
        'Basic farming knowledge helpful',
        'Reliable transportation',
        'Weekend availability'
      ],
      color: 'bg-earth-green-light text-earth-green-light-foreground'
    },
    {
      icon: Coins,
      title: 'Financial Support',
      description:
        'Contribute funds to purchase tools, seeds, and irrigation equipment for farmers in need.',
      commitment: 'One-time or monthly',
      impact: '$50 helps 1 farmer for a season',
      requirements: [
        'No specific requirements',
        'Tax receipts available',
        'Transparent fund usage'
      ],
      color: 'bg-earth-yellow text-earth-yellow-foreground'
    },
    {
      icon: Wrench,
      title: 'Donate Tools & Equipment',
      description:
        'Provide farming tools, water containers, seeds, and other essential farming equipment.',
      commitment: 'As available',
      impact: 'Tools serve multiple farmers',
      requirements: [
        'Good condition items only',
        'Delivery to collection points',
        'List of needed items available'
      ],
      color: 'bg-earth-brown text-earth-brown-foreground'
    },
    {
      icon: GraduationCap,
      title: 'Share Your Expertise',
      description:
        'Teach farming techniques, provide technical guidance, or lead training workshops.',
      commitment: '2-4 hours/month',
      impact: 'Train 20-50 farmers per session',
      requirements: [
        'Agricultural expertise',
        'Teaching ability',
        'Local language helpful'
      ],
      color: 'bg-primary text-primary-foreground'
    },
    {
      icon: Share2,
      title: 'Spread Awareness',
      description:
        'Share our mission on social media, refer farmers to our programs, and help build our community.',
      commitment: 'Flexible',
      impact: 'Reach hundreds through networks',
      requirements: [
        'Social media accounts',
        'Passion for the cause',
        'Network of contacts'
      ],
      color: 'bg-secondary text-secondary-foreground'
    },
    {
      icon: BookOpen,
      title: 'Content Creation',
      description:
        'Help create educational materials, translate content, or document success stories.',
      commitment: '2-6 hours/week',
      impact: 'Content reaches 1000s of farmers',
      requirements: [
        'Writing/design skills',
        'Local language fluency',
        'Agricultural knowledge helpful'
      ],
      color: 'bg-accent text-accent-foreground'
    }
  ];

  const partnerships = [
    {
      type: 'Agricultural Organizations',
      description:
        'Partner with us to expand sustainable farming education and reach more rural communities.',
      benefits: [
        'Shared resources',
        'Increased impact',
        'Joint training programs'
      ]
    },
    {
      type: 'Educational Institutions',
      description:
        'Collaborate on research, student internships, and academic programs focused on sustainable agriculture.',
      benefits: [
        'Research opportunities',
        'Student engagement',
        'Knowledge exchange'
      ]
    },
    {
      type: 'Corporate Sponsors',
      description:
        'Support our mission through CSR initiatives, employee volunteering, and financial contributions.',
      benefits: ['Brand visibility', 'Employee engagement', 'Social impact']
    },
    {
      type: 'Government Agencies',
      description:
        'Work together to align with national agricultural policies and scale successful interventions.',
      benefits: ['Policy alignment', 'Broader reach', 'Sustainable funding']
    }
  ];

  const volunteerSteps = [
    {
      step: 1,
      title: 'Express Interest',
      description:
        'Fill out our volunteer interest form with your skills and availability.'
    },
    {
      step: 2,
      title: 'Orientation',
      description:
        'Attend a brief orientation session to learn about our methods and approach.'
    },
    {
      step: 3,
      title: 'Training',
      description:
        'Receive specific training based on your chosen area of involvement.'
    },
    {
      step: 4,
      title: 'Start Helping',
      description: 'Begin making a difference in farming communities!'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">
            Get Involved & Make a Difference
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join our mission to support farmers, build resilient communities, and promote sustainable agriculture. Every contribution, big or small, creates lasting impact.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-earth-green-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-earth-green-light-foreground">Active Volunteers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$50K</div>
              <div className="text-earth-green-light-foreground">Funds Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25</div>
              <div className="text-earth-green-light-foreground">Partner Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-earth-green-light-foreground">Farmers Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Ways You Can Help</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the way that best fits your skills, schedule, and passion for supporting farmers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wayToHelp.map((way, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${way.color}`}>
                      <way.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="bg-background">
                      {way.commitment}
                    </Badge>
                  </div>
                  <CardTitle className="text-primary">{way.title}</CardTitle>
                  <CardDescription>{way.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-earth-brown mb-2">Impact:</h4>
                    <p className="text-sm text-muted-foreground">{way.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-earth-brown mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {way.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="h-3 w-3 text-primary mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" variant="hero">Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Steps */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">How to Become a Volunteer</h2>
            <p className="text-xl text-muted-foreground">
              Getting started is easy! Follow these simple steps to join our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {volunteerSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              <Users className="mr-2" />
              Start Your Volunteer Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We welcome partnerships with organizations that share our commitment to sustainable agriculture and farmer empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner, i) => (
              <Card key={i} className="border-l-4 border-l-primary hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-primary">{partner.type}</CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-earth-brown mb-3">Partnership Benefits:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((b, j) => (
                      <li key={j} className="flex items-center">
                        <Target className="h-4 w-4 text-primary mr-2" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="earth" size="lg">
              <MessageCircle className="mr-2" />
              Discuss Partnership
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-field">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-earth-green-light-foreground mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-earth-green-light-foreground/80 mb-8">
            Join hundreds of volunteers and partners who are already making a difference in farming communities across Kenya. Your involvement can help transform lives and build a more sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">Join Our Community</Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Involvement;
