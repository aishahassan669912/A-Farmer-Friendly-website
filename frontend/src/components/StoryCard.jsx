import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';

const StoryCard = ({ name, region, challenge, solution, result, year, cropType }) => {
  return (
    <Card className="hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-earth-green-light/20">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-primary">{name}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {region}
            </CardDescription>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <Badge variant="outline" className="bg-earth-yellow text-earth-yellow-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              {year}
            </Badge>
            {cropType && (
              <Badge variant="secondary" className="bg-earth-green-light text-earth-green-light-foreground">
                {cropType}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-destructive mb-1">Challenge:</h4>
          <p className="text-sm text-muted-foreground">{challenge}</p>
        </div>

        <div>
          <h4 className="font-semibold text-earth-brown mb-1">Solution:</h4>
          <p className="text-sm text-muted-foreground">{solution}</p>
        </div>

        <div>
          <h4 className="font-semibold text-primary mb-1">Result:</h4>
          <p className="text-sm text-foreground font-medium">{result}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
