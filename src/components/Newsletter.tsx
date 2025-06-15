
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
    <section className="py-20 px-4 md:py-24 md:px-8 lg:px-12 bg-gradient-to-r from-blue-600 to-blue-500">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Subscribe to Our Newsletter</h2>
          <p className="mb-8 opacity-90 text-white">
            Get the latest content tips, industry news, and exclusive offers delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              required
              className="bg-white/30 border-white/50 text-white placeholder:text-white/90"
            />
            <Button type="submit" variant="secondary" className="bg-white text-black hover:bg-gray-100">
              Subscribe
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
