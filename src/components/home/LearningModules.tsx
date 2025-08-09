import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Coffee, Hand, Users, Building, Move } from "lucide-react";
import { Button } from "../ui/button";

const modules = [
  {
    title: "Greetings",
    icon: Hand,
    description: "Learn how to say hello, goodbye, and more.",
  },
  {
    title: "Daily Essentials",
    icon: Coffee,
    description: "Signs for everyday items and activities.",
  },
  {
    title: "Family & People",
    icon: Users,
    description: "Communicate about the people in your life.",
  },
  {
    title: "Alphabets (A-Z)",
    icon: BookOpen,
    description: "Master the foundational building blocks.",
  },
  {
    title: "Action Words",
    icon: Move,
    description: "Express actions like run, eat, and sleep.",
  },
  {
    title: "Places",
    icon: Building,
    description: "Signs for common locations.",
  },
];

export default function LearningModules() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold font-headline text-primary">
        Learning Modules
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => (
          <Card key={module.title} className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4 space-y-0">
              <module.icon className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline">{module.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{module.description}</p>
            </CardContent>
            <CardContent>
                <Button variant="outline" className="w-full">
                    Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center pt-4">
        <Button>
            Explore All Modules
        </Button>
      </div>
    </section>
  );
}
