
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    
    // Reset the form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-12 bg-gradient-to-r from-primary/90 to-primary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white reveal">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 opacity-90">
            Get the latest content tips, industry news, and exclusive offers delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              required
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button type="submit" variant="secondary">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm opacity-80">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
