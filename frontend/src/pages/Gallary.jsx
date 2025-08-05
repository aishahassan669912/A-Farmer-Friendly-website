import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Eye,
  Download,
  Share2,
  Heart,
  Calendar,
  MapPin,
} from 'lucide-react';

import heroImage from '@/assets/hero-farm.jpg';
import farmerImage from '@/assets/farmer-working.jpg';
import beforeAfterImage from '@/assets/before-after-farm.jpg';
import farmingTechniques from '@/assets/farming-techniques.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const images = [
    {
      id: 1,
      src: heroImage,
      title: 'Thriving Green Fields',
      description: 'Healthy crops growing with proper irrigation and soil management techniques',
      category: 'success',
      location: 'Machakos County',
      date: '2023',
      farmer: 'Mary Wanjiku',
      tags: ['Drought Resistant', 'Irrigation', 'Success Story'],
    },
    {
      id: 2,
      src: farmerImage,
      title: 'Farmer at Work',
      description: 'Local farmer tending to his vegetable garden using sustainable farming practices',
      category: 'people',
      location: 'Baringo County',
      date: '2023',
      farmer: 'James Kiprotich',
      tags: ['Sustainable Farming', 'Vegetables', 'Community'],
    },
    {
      id: 3,
      src: beforeAfterImage,
      title: 'Transformation Success',
      description: 'Before and after comparison showing the power of proper water management',
      category: 'transformation',
      location: 'Kitui County',
      date: '2022-2023',
      farmer: 'David Mutua',
      tags: ['Before & After', 'Water Management', 'Transformation'],
    },
    {
      id: 4,
      src: farmingTechniques,
      title: 'Farming Techniques Guide',
      description: 'Visual guide showing various sustainable farming methods and techniques',
      category: 'education',
      location: 'Training Center',
      date: '2023',
      farmer: 'AgriSupport Team',
      tags: ['Education', 'Techniques', 'Guide'],
    },
    {
      id: 5,
      src: heroImage,
      title: 'Healthy Crop Yields',
      description: 'Abundant harvest achieved through drought-resistant crop varieties',
      category: 'success',
      location: 'Laikipia County',
      date: '2023',
      farmer: 'Peter Mwangi',
      tags: ['Harvest', 'Drought Resistant', 'Abundance'],
    },
    {
      id: 6,
      src: farmerImage,
      title: 'Community Farming',
      description: 'Farmers working together in a cooperative farming arrangement',
      category: 'people',
      location: 'Turkana County',
      date: '2023',
      farmer: "Grace Nyong'o",
      tags: ['Community', 'Cooperation', 'Teamwork'],
    },
    {
      id: 7,
      src: beforeAfterImage,
      title: 'Soil Restoration Success',
      description: 'Dramatic improvement in soil quality using agroforestry techniques',
      category: 'transformation',
      location: 'Marsabit County',
      date: '2022-2023',
      farmer: 'Amina Hassan',
      tags: ['Soil Health', 'Agroforestry', 'Restoration'],
    },
    {
      id: 8,
      src: farmingTechniques,
      title: 'Water Conservation Methods',
      description: 'Demonstration of rainwater harvesting and drip irrigation systems',
      category: 'education',
      location: 'Training Center',
      date: '2023',
      farmer: 'AgriSupport Team',
      tags: ['Water Conservation', 'Training', 'Innovation'],
    },
  ];

  const categories = [
    { key: 'all', label: 'All Photos', count: images.length },
    { key: 'success', label: 'Success Stories', count: images.filter(img => img.category === 'success').length },
    { key: 'transformation', label: 'Transformations', count: images.filter(img => img.category === 'transformation').length },
    { key: 'people', label: 'Our Farmers', count: images.filter(img => img.category === 'people').length },
    { key: 'education', label: 'Educational', count: images.filter(img => img.category === 'education').length },
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-earth-brown-foreground mb-6">
            Farm Transformation Gallery
          </h1>
          <p className="text-xl text-earth-brown-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Witness the incredible transformations achieved by farmers across Kenya. From drought-stricken fields to thriving farms, these images tell stories of resilience, innovation, and hope.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-earth-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{images.length}</div>
              <div className="text-earth-green-light-foreground">Total Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-earth-green-light-foreground">Farms Documented</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-earth-green-light-foreground">Counties Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-earth-green-light-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-muted border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? 'hero' : 'outline'}
                onClick={() => setSelectedCategory(category.key)}
                className="mb-2"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 bg-background text-foreground">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map(image => (
              <Card
                key={image.id}
                className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <Button size="icon" variant="outline" className="bg-white/90 hover:bg-white">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="bg-white/90 hover:bg-white">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="bg-white/90 hover:bg-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/80 hover:bg-white text-destructive hover:text-destructive"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{image.title}</h3>
                  <p className="text-muted-foreground mb-4">{image.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {image.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {image.date}
                    </div>
                    <div className="text-sm font-medium text-earth-brown">
                      By: {image.farmer}
                    </div>

                    <div className="flex flex-wrap gap-1 pt-2">
                      {image.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs bg-earth-green-light text-earth-green-light-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Share Your Farm's Transformation
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Have before-and-after photos of your farm? Share your transformation story and inspire other farmers in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="harvest" size="lg">Submit Your Photos</Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Download Full Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
