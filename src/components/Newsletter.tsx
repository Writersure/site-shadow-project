
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address").max(255, "Email must be less than 255 characters")
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
    const result = newsletterSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.issues[0]?.message || "Invalid email");
      setIsSubmitting(false);
      return;
    }
    toast({ title: "Success!", description: "You've been subscribed to our newsletter." });
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-[hsl(220,14%,96%)]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Stay Ahead of the Curve</h2>
          <p className="mb-8 text-muted-foreground">
            Get the latest content tips, industry news, and exclusive offers delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (error) setError(null); }}
                maxLength={255}
                className={error ? "border-destructive" : ""}
              />
              {error && <p className="text-destructive text-sm mt-1 text-left">{error}</p>}
            </div>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
