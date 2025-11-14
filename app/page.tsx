"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { BookOpen, Users, Award, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setName("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/home.jpeg"
          alt="Academy Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm font-medium">Welcome to the Future of Learning</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Transform Your Future at
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Our Academy
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Unlock your potential with world-class education, expert instructors, and a community dedicated to your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>1000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>50+ Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Expert Instructors</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose Our Academy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to excel in your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Expert-Led Courses</CardTitle>
                <CardDescription>
                  Learn from industry professionals with years of real-world experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-purple-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Community Support</CardTitle>
                <CardDescription>
                  Join a thriving community of learners and mentors who support each other
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Recognized Certifications</CardTitle>
                <CardDescription>
                  Earn certificates that are valued by employers worldwide
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-200">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Flexible Learning</CardTitle>
                <CardDescription>
                  Study at your own pace with 24/7 access to all course materials
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Empowering Learners Since Day One
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our academy was founded with a simple mission: to make high-quality education accessible to everyone, everywhere. We believe that learning should be engaging, practical, and transformative.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                With cutting-edge curriculum, hands-on projects, and personalized mentorship, we've helped thousands of students achieve their goals and build successful careers.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
              <Image
                src="/home.jpeg"
                alt="About Academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Start Your Journey?
          </h2>

          <p className="text-xl text-blue-100">
            Join thousands of students who are already transforming their careers
          </p>

          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 animate-fade-in">
              <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-white text-xl font-semibold">Thank you for your interest!</p>
              <p className="text-blue-100 mt-2">We'll get back to you soon.</p>
            </div>
          ) : (
            <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Get Early Access</CardTitle>
                <CardDescription className="text-blue-100">
                  Be the first to know when we launch new courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-blue-200"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                    size="lg"
                  >
                    Join Waitlist
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          <p className="text-blue-200 text-sm">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </section>
    </div>
  );
}
