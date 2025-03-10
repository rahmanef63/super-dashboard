"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Sparkles, ChevronRight, X, ThumbsUp, ThumbsDown } from "lucide-react";

type Insight = {
  id: string;
  title: string;
  description: string;
  type: "suggestion" | "alert" | "info";
};

const demoInsights: Insight[] = [
  {
    id: "1",
    title: "Dashboard Customization",
    description:
      "Based on your usage patterns, adding the Finance widgets to your Professional dashboard could improve your workflow.",
    type: "suggestion",
  },
  {
    id: "2",
    title: "New Feature Available",
    description:
      "The Health dashboard now includes integration with fitness tracking apps. Try it out!",
    type: "info",
  },
  {
    id: "3",
    title: "Usage Optimization",
    description:
      "You haven't used the Task Management widget recently. Consider removing it to declutter your dashboard.",
    type: "alert",
  },
];

export default function AIInsightsPanel() {
  const [insights, setInsights] = useState<Insight[]>(demoInsights);
  const [expanded, setExpanded] = useState(false);
  const [activeInsight, setActiveInsight] = useState<Insight | null>(null);

  const dismissInsight = (id: string) => {
    setInsights(insights.filter((insight) => insight.id !== id));
    if (activeInsight?.id === id) {
      setActiveInsight(null);
    }
  };

  const getTypeStyles = (type: Insight["type"]) => {
    switch (type) {
      case "suggestion":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "alert":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "info":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {!expanded ? (
        <Button
          onClick={() => setExpanded(true)}
          className="rounded-full h-12 w-12 shadow-lg flex items-center justify-center bg-blue-600 hover:bg-blue-700"
        >
          <Sparkles className="h-5 w-5" />
        </Button>
      ) : (
        <Card className="w-80 shadow-xl">
          <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-blue-500" />
                AI Insights
              </CardTitle>
              <CardDescription>Personalized recommendations</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setExpanded(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4">
            {activeInsight ? (
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  className="flex items-center text-sm p-0 h-auto"
                  onClick={() => setActiveInsight(null)}
                >
                  <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
                  Back to insights
                </Button>

                <div
                  className={`p-4 rounded-lg border ${getTypeStyles(activeInsight.type)}`}
                >
                  <h3 className="font-medium mb-2">{activeInsight.title}</h3>
                  <p className="text-sm">{activeInsight.description}</p>
                </div>

                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center"
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Helpful
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center"
                    >
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      Not helpful
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => dismissInsight(activeInsight.id)}
                  >
                    Dismiss
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                {insights.length > 0 ? (
                  insights.map((insight) => (
                    <div
                      key={insight.id}
                      className={`p-3 rounded-lg border cursor-pointer flex items-center justify-between ${getTypeStyles(insight.type)}`}
                      onClick={() => setActiveInsight(insight)}
                    >
                      <div>
                        <h3 className="font-medium text-sm">{insight.title}</h3>
                        <p className="text-xs truncate max-w-[180px]">
                          {insight.description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 ml-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          dismissInsight(insight.id);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-sm text-gray-500">
                    No insights available at the moment.
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
