
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Validation schema
const newsletterSchema = z.object({
  email: z.string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
});

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Validate email
    const result = newsletterSchema.safeParse({ email });
    
    if (!result.success) {
      setError(result.error.errors[0]?.message || "Invalid email");
      setIsSubmitting(false);
      return;
    }

    // Email is valid - show success (backend integration would go here)
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    
    // Reset the form
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-blue-600 to-blue-500">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Subscribe to Our Newsletter</h2>
          <p className="mb-8 opacity-90 text-white">
            Get the latest content tips, industry news, and exclusive offers delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                maxLength={255}
                className={`bg-white/30 border-white/50 text-white placeholder:text-white/90 ${error ? "border-red-400" : ""}`}
                aria-invalid={!!error}
                aria-describedby={error ? "newsletter-error" : undefined}
              />
              {error && (
                <p id="newsletter-error" className="text-red-200 text-sm mt-1 text-left">{error}</p>
              )}
            </div>
            <Button 
              type="submit" 
              variant="secondary" 
              className="bg-white text-black hover:bg-gray-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="mt-4 text-sm opacity-90 text-white">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
