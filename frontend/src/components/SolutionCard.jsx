import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SolutionCard = ({ title, description, icon: Icon, tips }) => {
  return (
    <Card className="border-l-4 border-l-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-earth-green-light rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-primary">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      {tips && (
        <CardContent>
          <h4 className="font-semibold text-earth-brown mb-2">Key Tips:</h4>
          <ul className="space-y-1">
            {tips.map((tip, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};

export default SolutionCard;
