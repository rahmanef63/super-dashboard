"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb, X, ChevronLeft, ChevronRight } from "lucide-react";

export function AIInsightsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentInsight, setCurrentInsight] = useState(0);

  const insights = [
    {
      title: "Task Optimization",
      description:
        "Based on your work patterns, scheduling your most complex tasks between 9-11 AM could increase productivity by 27%.",
      type: "productivity",
    },
    {
      title: "Budget Alert",
      description:
        "Your dining expenses are 15% higher than last month. Consider adjusting your budget allocation.",
      type: "finance",
    },
    {
      title: "Health Recommendation",
      description:
        "You've been consistently active this week! Adding 10 minutes of stretching daily could improve your overall fitness results.",
      type: "health",
    },
  ];

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const nextInsight = () => {
    setCurrentInsight((prev) => (prev + 1) % insights.length);
  };

  const prevInsight = () => {
    setCurrentInsight((prev) => (prev - 1 + insights.length) % insights.length);
  };

  const currentInsightData = insights[currentInsight];

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={togglePanel}
        variant="ghost"
        size="icon"
        className={`rounded-full bg-primary text-primary-foreground shadow-md ${isOpen ? "hidden" : ""}`}
      >
        <Lightbulb className="h-5 w-5" />
      </Button>

      {/* Panel */}
      <div
        className={`fixed bottom-0 right-0 z-40 w-80 bg-white dark:bg-gray-900 border-l border-t border-gray-200 dark:border-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out rounded-tl-lg ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold flex items-center">
              <Lightbulb className="h-4 w-4 mr-2 text-primary" />
              AI Insights
            </h3>
            <Button variant="ghost" size="icon" onClick={togglePanel}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-4">
            <div className="bg-muted/50 rounded-lg p-4 mb-4">
              <h4 className="font-medium mb-2">{currentInsightData.title}</h4>
              <p className="text-sm text-muted-foreground">
                {currentInsightData.description}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-2">
              <Button variant="outline" size="sm" onClick={prevInsight}>
                <ChevronLeft className="h-4 w-4 mr-1" /> Previous
              </Button>
              <span className="text-xs text-muted-foreground">
                {currentInsight + 1} of {insights.length}
              </span>
              <Button variant="outline" size="sm" onClick={nextInsight}>
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            {/* Suggestions */}
            <div className="mt-6">
              <h4 className="font-medium mb-3 text-sm">Suggested Actions</h4>
              <div className="space-y-2">
                <Button
                  variant="secondary"
                  className="w-full justify-start text-sm"
                  size="sm"
                >
                  Apply this insight
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-sm"
                  size="sm"
                >
                  Get more details
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                  size="sm"
                >
                  Dismiss
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <Button variant="outline" className="w-full text-sm">
              View All Insights
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
