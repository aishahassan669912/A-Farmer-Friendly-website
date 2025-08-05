import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Users,
  HelpCircle,
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@agrisupport.org',
      description: 'Send us detailed questions or partnership inquiries',
      action: 'mailto:info@agrisupport.org',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+254 700 123 456',
      description: 'Speak directly with our team during business hours',
      action: 'tel:+254700123456',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'AgriSupport Center, Nairobi',
      description: '123 Agriculture Road, Westlands, Nairobi, Kenya',
      action: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 8AM - 5PM',
      description: 'Saturday: 9AM - 2PM, Sunday: Closed',
      action: '#',
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', followers: '2.5K' },
    { icon: Twitter, name: 'Twitter', url: '#', followers: '1.2K' },
    { icon: Instagram, name: 'Instagram', url: '#', followers: '3.1K' },
    { icon: MessageCircle, name: 'WhatsApp', url: '#', followers: '500+' },
  ];

  const faqs = [
    {
      question: 'How can I get help for my farm?',
      answer:
        'Contact us through any of our channels or attend one of our community workshops. We provide free initial consultations to assess your needs.',
    },
    {
      question: 'Are your services free?',
      answer:
        'Yes, our basic consultation and educational services are completely free. Some advanced equipment or materials may have costs, but we work to keep everything affordable.',
    },
    {
      question: 'Do you provide services outside Kenya?',
      answer:
        "Currently, we focus on Kenya, but we're expanding our online resources to serve farmers across East Africa. Contact us to discuss your specific needs.",
    },
    {
      question: 'How can I volunteer with AgriSupport?',
      answer:
        'Visit our Get Involved page or contact us directly. We have opportunities for all skill levels and time commitments.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary-foreground mb-6">
            Contact AgriSupport
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for farming support, partnership opportunities, or any questions about sustainable agriculture. We're here to help you grow.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-earth-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-primary">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold text-earth-brown">{contact.details}</p>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                    {contact.action !== '#' && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={contact.action}>Contact</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+254 700 123 456" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is your message about?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-earth-green-light rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-earth-green-light-foreground font-semibold">
                        Interactive Map Coming Soon
                      </p>
                      <p className="text-sm text-earth-green-light-foreground/80">
                        123 Agriculture Road, Westlands, Nairobi
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-earth-brown mb-1">Office Hours</h4>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-earth-brown mb-1">Field Visits</h4>
                      <p className="text-muted-foreground">Schedule farm visits by appointment</p>
                      <p className="text-muted-foreground">Emergency support available</p>
                      <p className="text-muted-foreground">Community workshops monthly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Follow Us</CardTitle>
                  <CardDescription>
                    Stay updated with our latest news, success stories, and farming tips.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          className="h-auto p-4 flex flex-col items-center hover:shadow-soft transition-all"
                          asChild
                        >
                          <a href={social.url}>
                            <Icon className="h-6 w-6 mb-2" />
                            <span className="font-semibold">{social.name}</span>
                            <span className="text-xs text-muted-foreground">{social.followers}</span>
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-6 w-6 text-primary mt-1" />
                    <CardTitle className="text-primary">{faq.question}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground pl-9">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Have a different question? We'd love to hear from you.
            </p>
            <Button variant="hero" size="lg">
              <Users className="mr-2" />
              Ask a Question
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-destructive/10 border-l-4 border-l-destructive">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-destructive mb-2">
            Emergency Agricultural Support
          </h3>
          <p className="text-muted-foreground mb-4">
            For urgent farming emergencies or disaster response, contact our emergency hotline:
          </p>
          <Button variant="destructive" size="lg" asChild>
            <a href="tel:+254700123999">
              <Phone className="mr-2" />
              Emergency Hotline: +254 700 123 999
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
