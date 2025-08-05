import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Sprout,
  Users,
  BookOpen,
  Trophy,
  ArrowRight,
  Heart,
} from 'lucide-react';

import heroImage from '@/assets/hero-farm.jpg';
import farmerImage from '@/assets/farmer-working.jpg';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Learn Solutions',
      description:
        'Discover proven techniques for drought-resistant farming, water conservation, and sustainable agriculture.',
    },
    {
      icon: Users,
      title: 'Real Stories',
      description:
        'Read inspiring stories from farmers who overcame challenges and transformed their communities.',
    },
    {
      icon: Sprout,
      title: 'Get Support',
      description:
        'Connect with resources, tools, and a community of farmers committed to sustainable practices.',
    },
    {
      icon: Trophy,
      title: 'See Results',
      description:
        'View before-and-after transformations showing the power of proper farming techniques.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-earth-yellow">AgriSupport</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Helping farmers grow smarter, safer, and stronger — with simple solutions that work in dry times and green seasons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solutions">
              <Button variant="hero" size="xl" className="text-lg">
                Learn Farming Solutions
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/stories">
              <Button variant="harvest" size="xl" className="text-lg">
                Read Success Stories
                <Heart className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Building Resilient Farming Communities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover practical solutions, inspiring stories, and join a network of farmers committed to sustainable agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-field rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Farm?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Join thousands of farmers who have learned sustainable techniques to protect their crops, conserve water, and build resilient communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button variant="harvest" size="lg">
                    Learn More About Us
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
            <div className="lg:order-first">
              <img
                src={farmerImage}
                alt="Farmer working in field"
                className="rounded-lg shadow-glow w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-earth-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-earth-brown font-semibold">Farmers Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-earth-brown font-semibold">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-earth-brown font-semibold">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
