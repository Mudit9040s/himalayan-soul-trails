import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Mountain } from "lucide-react";

import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const program = formData.get('program') as string;
    const dates = formData.get('dates') as string;
    const message = formData.get('message') as string;
    
    // Build WhatsApp message
    const whatsappMessage = `*New Inquiry from Website*
    
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || 'Not provided'}
*Program:* ${program || 'Not selected'}
*Dates:* ${dates || 'Not specified'}

*Message:*
${message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919068048494?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your message on WhatsApp to reach us directly.",
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Mountain className="w-12 h-12 text-primary mx-auto mb-6 opacity-0 animate-fade-up" />
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-up animation-delay-200">
              Let's Plan Your
              <span className="text-gradient italic block">Adventure</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed opacity-0 animate-fade-up animation-delay-400">
              Ready to step into the Himalayas? Share your vision with us, 
              and our team will craft the perfect expedition for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="opacity-0 animate-fade-up animation-delay-200">
              <h2 className="font-display text-2xl font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="John Doe"
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="john@example.com"
                      className="bg-card border-border"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="+91 98xxx xxxxx"
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium mb-2">
                      Interested In
                    </label>
                    <select 
                      id="program" 
                      name="program"
                      className="w-full h-10 px-3 rounded-md bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a program</option>
                      <option value="expeditions">Himalayan Expeditions</option>
                      <option value="custom">Custom Treks</option>
                      <option value="spiritual">Spiritual Journeys</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="dates" className="block text-sm font-medium mb-2">
                    Preferred Travel Dates
                  </label>
                  <Input 
                    id="dates" 
                    name="dates" 
                    placeholder="e.g., March 2025, Flexible"
                    className="bg-card border-border"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Us About Your Dream Trek *
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={5}
                    placeholder="Share your adventure goals, fitness level, group size, or any specific requirements..."
                    className="bg-card border-border resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full sm:w-auto"
                >
                  Send via WhatsApp
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="opacity-0 animate-fade-up animation-delay-400">
              <h2 className="font-display text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a href="mailto:explore@himo.in" className="text-muted-foreground hover:text-primary transition-colors">
                      explore@himo.in
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+91 98xxx xxxxx</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon - Sat, 9am - 6pm IST</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Base Location</h3>
                    <p className="text-muted-foreground">Based in the Himalayas, India</p>
                    <p className="text-sm text-muted-foreground mt-1">Operations across Uttarakhand, Himachal & Ladakh</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="p-6 rounded-xl bg-gradient-card border border-border/50">
                <h3 className="font-display text-lg font-semibold mb-2">Quick Response Promise</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We understand the excitement of planning your Himalayan adventure. 
                  Our team responds to all inquiries within 24 hours with a personalized 
                  proposal tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
