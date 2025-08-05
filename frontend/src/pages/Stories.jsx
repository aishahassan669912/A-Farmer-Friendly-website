import { useState } from 'react';
import StoryCard from '@/components/StoryCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Smile } from 'lucide-react';

const Stories = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stories = [
    {
      name: "Mary Wanjiku",
      region: "Machakos County, Kenya",
      challenge: "Severe drought destroyed 80% of her maize crop for three consecutive seasons, threatening her family's livelihood.",
      solution: "Implemented drip irrigation system and switched to drought-resistant sorghum and millet varieties. Started rainwater harvesting with simple tanks.",
      result: "Increased crop yield by 200% even during dry seasons. Now feeds family year-round and sells surplus at local market.",
      year: "2023",
      cropType: "Sorghum & Millet",
      category: "water-management"
    },
    {
      name: "James Kiprotich",
      region: "Baringo County, Kenya",
      challenge: "Soil erosion and poor rainfall made traditional farming impossible. Family was dependent on food aid.",
      solution: "Learned agroforestry techniques, planted indigenous trees, and used terracing to prevent soil erosion. Introduced beekeeping as additional income.",
      result: "Restored soil fertility, created sustainable food production, and generates extra income from honey sales worth $300/month.",
      year: "2022",
      cropType: "Mixed Farming",
      category: "soil-restoration"
    },
    {
      name: "Amina Hassan",
      region: "Marsabit County, Kenya",
      challenge: "Recurring droughts killed livestock and destroyed pasture lands. Community faced frequent food insecurity.",
      solution: "Organized women's cooperative to build community water storage. Introduced drought-resistant grass varieties for livestock feed.",
      result: "Community now has 6-month water reserve. Livestock survival rate increased from 30% to 85% during droughts.",
      year: "2023",
      cropType: "Pastoralism",
      category: "community-action"
    },
    {
      name: "David Mutua",
      region: "Kitui County, Kenya",
      challenge: "Traditional maize farming failed repeatedly due to unpredictable rainfall patterns and pest attacks.",
      solution: "Adopted intercropping with legumes, used organic pest control methods, and implemented crop rotation system.",
      result: "Doubled harvest yields, improved soil nutrients naturally, and reduced farming costs by 40%. Now mentors other farmers.",
      year: "2022",
      cropType: "Intercropping",
      category: "sustainable-practices"
    },
    {
      name: "Grace Nyong'o",
      region: "Turkana County, Kenya",
      challenge: "Extreme drought conditions made farming nearly impossible. Family survived on relief food for 2 years.",
      solution: "Started kitchen garden with recycled water, learned greenhouse farming techniques, and joined local farming cooperative.",
      result: "Now grows vegetables year-round, improved family nutrition, and earns income selling to neighbors. Became food secure.",
      year: "2023",
      cropType: "Vegetables",
      category: "innovation"
    },
    {
      name: "Peter Mwangi",
      region: "Laikipia County, Kenya",
      challenge: "Climate change reduced traditional crop yields by 60%. Young people were leaving the village for cities.",
      solution: "Introduced climate-smart agriculture, established youth training program, and created cooperative for equipment sharing.",
      result: "Village retained 80% of young farmers, increased average yields by 150%, and built sustainable community economy.",
      year: "2022",
      cropType: "Mixed Crops",
      category: "community-action"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Stories', count: stories.length },
    ...[
      'water-management',
      'soil-restoration',
      'community-action',
      'sustainable-practices',
      'innovation'
    ].map((key) => ({
      key,
      label: key
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      count: stories.filter((s) => s.category === key).length,
    })),
  ];

  const filteredStories =
    selectedCategory === 'all'
      ? stories
      : stories.filter((story) => story.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-earth-brown-foreground mb-6">
            Farmer Success Stories
          </h1>
          <p className="text-xl text-earth-brown-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Real stories of hope, resilience, and transformation. Learn how farmers across Kenya have overcome drought, soil degradation, and climate challenges to build thriving, sustainable farms.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-earth-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="flex items-center justify-center space-x-4">
              <Users className="h-12 w-12 text-primary" />
              <div>
                <div className="text-3xl font-bold text-primary">{stories.length}</div>
                <div className="text-earth-green-light-foreground font-semibold">Inspiring Stories</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Smile className="h-12 w-12 text-primary" />
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-earth-green-light-foreground font-semibold">Lives Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-muted border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
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

      {/* Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <StoryCard
                key={index}
                name={story.name}
                region={story.region}
                challenge={story.challenge}
                solution={story.solution}
                result={story.result}
                year={story.year}
                cropType={story.cropType}
              />
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No stories found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Have Your Own Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Share your farming journey and inspire other farmers in your community. Your experience could be the guidance someone else needs.
          </p>
          <Button variant="harvest" size="lg">Share Your Story</Button>
        </div>
      </section>
    </div>
  );
};

export default Stories;
