import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Target,
  Heart,
  Users,
  Shield,
  Lightbulb,
  Globe,
} from 'lucide-react';
import farmingTechniques from '@/assets/farming-techniques.jpg';

const About = () => {
  const missions = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To empower farmers with practical knowledge and sustainable solutions that build resilience against climate challenges like drought, ensuring food security for all.',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description:
        'A world where every farmer has access to the tools, knowledge, and community support needed to thrive sustainably, regardless of environmental challenges.',
    },
    {
      icon: Users,
      title: 'Our Community',
      description:
        'We connect farmers, agricultural experts, and community leaders to share knowledge, resources, and success stories that inspire positive change.',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Sustainability',
      description:
        'Promoting farming practices that protect the environment while ensuring long-term agricultural productivity.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Embracing both traditional wisdom and modern techniques to create effective, accessible farming solutions.',
    },
    {
      icon: Globe,
      title: 'Community',
      description:
        'Building strong networks of farmers who support each other through challenges and celebrate successes together.',
    },
  ];

  const problems = [
    'Recurring droughts destroying crops and livestock',
    'Limited access to water for irrigation',
    'Poor soil quality and erosion',
    'Lack of knowledge about drought-resistant crops',
    'Insufficient resources for implementing solutions',
    'Climate change increasing weather unpredictability',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-field">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            About AgriSupport
          </h1>
          <p className="text-xl text-earth-green-light-foreground max-w-3xl mx-auto leading-relaxed">
            We are dedicated to supporting farmers in building sustainable,
            resilient agricultural practices that withstand environmental
            challenges and promote community prosperity.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Community */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {missions.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-earth-yellow rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-earth-yellow-foreground" />
                    </div>
                    <CardTitle className="text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Problem We're Solving */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                The Challenges We Address
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Farmers across Africa face increasing challenges due to climate
                change, limited resources, and lack of access to modern
                agricultural knowledge. These problems threaten food security
                and rural livelihoods.
              </p>
              <ul className="space-y-3">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-destructive font-bold mr-3 mt-1">
                      •
                    </span>
                    <span className="text-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={farmingTechniques}
                alt="Sustainable farming techniques"
                className="rounded-lg shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and every solution we
              develop for farming communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-l-4 border-l-earth-brown hover:shadow-glow transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-earth-brown rounded-lg">
                        <Icon className="h-6 w-6 text-earth-brown-foreground" />
                      </div>
                      <CardTitle className="text-earth-brown">
                        {value.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Whether you're a farmer seeking solutions, an expert wanting to
            share knowledge, or someone passionate about sustainable
            agriculture, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solutions">
              <Button variant="harvest" size="lg">
                Explore Solutions
              </Button>
            </Link>
            <Link to="/involvement">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
