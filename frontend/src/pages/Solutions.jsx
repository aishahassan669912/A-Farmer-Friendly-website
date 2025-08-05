import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Droplets,
  Sprout,
  TreePine,
  RefreshCw,
  Shield,
  AlertTriangle,
  Sun,
  CloudRain,
  Leaf,
  Zap
} from 'lucide-react';
import farmingTechniques from '@/assets/farming-techniques.jpg';

const Solutions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const solutions = [/* your existing array remains unchanged */];

  const categories = [
    { key: 'all', label: 'All Solutions', icon: Sprout },
    { key: 'water', label: 'Water Management', icon: Droplets },
    { key: 'crops', label: 'Crop Selection', icon: Sprout },
    { key: 'soil', label: 'Soil Health', icon: Leaf },
    { key: 'protection', label: 'Plant Protection', icon: Shield },
    { key: 'planning', label: 'Planning & Info', icon: AlertTriangle },
    { key: 'energy', label: 'Energy Solutions', icon: Sun },
  ];

  const filteredSolutions =
    selectedCategory === 'all'
      ? solutions
      : solutions.filter((s) => s.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-earth-green-light text-earth-green-light-foreground';
      case 'Medium':
        return 'bg-earth-yellow text-earth-yellow-foreground';
      case 'Hard':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  const getCostColor = (cost) => {
    switch (cost) {
      case 'Very Low':
        return 'bg-earth-green-light text-earth-green-light-foreground';
      case 'Low':
        return 'bg-earth-yellow text-earth-yellow-foreground';
      case 'Medium':
        return 'bg-earth-brown text-earth-brown-foreground';
      case 'High':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-field">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                Sustainable Farming Solutions
              </h1>
              <p className="text-xl text-earth-green-light-foreground mb-8 leading-relaxed">
                Discover practical, proven techniques to protect your crops from drought, improve soil health, conserve water, and build resilient farming systems that thrive in any weather.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Download PDF Guide
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Watch Video Tutorials
                </Button>
              </div>
            </div>
            <div>
              <img
                src={farmingTechniques}
                alt="Sustainable farming techniques"
                className="rounded-lg shadow-glow w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{solutions.length}</div>
              <div className="text-muted-foreground">Proven Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50%</div>
              <div className="text-muted-foreground">Water Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200%</div>
              <div className="text-muted-foreground">Yield Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-6">Choose Solutions by Category</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? 'hero' : 'outline'}
                onClick={() => setSelectedCategory(category.key)}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-earth-green-light rounded-lg">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-primary">{solution.title}</CardTitle>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <Badge className={getDifficultyColor(solution.difficulty)}>
                        {solution.difficulty}
                      </Badge>
                      <Badge className={getCostColor(solution.cost)}>{solution.cost} Cost</Badge>
                    </div>
                  </div>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                {solution.tips && (
                  <CardContent>
                    <h4 className="font-semibold text-earth-brown mb-2">Implementation Tips:</h4>
                    <ul className="space-y-1">
                      {solution.tips.map((tip, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 font-bold">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No solutions found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-earth-green-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-earth-green-light-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-earth-green-light-foreground/80 mb-8">
            Begin with easy, low-cost solutions and gradually implement more advanced techniques. Remember, small steps lead to big transformations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Implementation Support
            </Button>
            <Button variant="earth" size="lg">
              Connect with Local Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
