import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Coins, TrendingUp, Shield, Zap, Users, Lock, Banknote } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const heroRef = useScrollReveal();
  const featuresRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">PropertyFlow</div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/market" className="text-muted-foreground hover:text-foreground transition-all duration-200 interactive">Marketplace</Link>
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-all duration-200 interactive">Dashboard</Link>
              <Link to="/create" className="text-muted-foreground hover:text-foreground transition-all duration-200 interactive">List Property</Link>
            </nav>
            <Button className="btn-soft">Connect Wallet</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
                <Zap className="w-3 h-3 mr-1" />
                Powered by Solana
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Own Real Estate
                <span className="gradient-text block">One Token at a Time</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The future of real estate investing. Buy fractional ownership in premium properties 
                through blockchain tokens. Earn rental income. Trade anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/market">
                  <Button size="lg" className="btn-soft text-lg px-8 py-6">
                    Browse Properties
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/create">
                  <Button variant="outline" size="lg" className="btn-soft text-lg px-8 py-6">
                    List My Property
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Token Flow Animation */}
          <motion.div 
            className="mt-16 token-container h-32 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="token"></div>
            <div className="token"></div>
            <div className="token"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/20" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-6 scroll-reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              From real estate to digital tokens in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Properties Get Tokenized",
                description: "Real estate owners list their properties and create digital tokens representing fractional ownership.",
              },
              {
                icon: Coins,
                title: "Investors Buy Tokens",
                description: "Purchase tokens starting from just $45. Own a piece of premium real estate without the hassle.",
              },
              {
                icon: TrendingUp,
                title: "Earn & Trade",
                description: "Receive rental income monthly and trade your tokens anytime on our marketplace.",
              },
            ].map((feature, index) => (
              <div key={index} className={`scroll-reveal-scale ${index === 1 ? 'scroll-reveal' : index === 2 ? 'scroll-reveal-right' : 'scroll-reveal-left'}`}>
                <Card className="property-card text-center h-full">
                  <CardContent className="p-8">
                    <feature.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6 scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "$2.1M+", label: "Total Value Tokenized" },
              { value: "1,250+", label: "Active Investors" },
              { value: "45", label: "Properties Listed" },
              { value: "7.2%", label: "Average Annual Yield" },
            ].map((stat, index) => (
              <div key={index} className="text-center scroll-reveal-scale">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted/20" ref={benefitsRef}>
        <div className="max-w-7xl mx-auto px-6 scroll-reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose PropertyFlow?</h2>
            <p className="text-xl text-muted-foreground">
              Experience the future of real estate investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Secure & Transparent",
                description: "All transactions secured by blockchain technology with full transparency and immutable records.",
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Join a community of like-minded investors building wealth through real estate.",
              },
              {
                icon: Banknote,
                title: "Low Minimum Investment",
                description: "Start investing with as little as $45. No need for large capital requirements.",
              },
            ].map((benefit, index) => (
              <div key={index} className="scroll-reveal-scale">
                <Card className="property-card text-center h-full">
                  <CardContent className="p-8">
                    <benefit.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                    <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" ref={ctaRef}>
        <div className="max-w-4xl mx-auto text-center px-6 scroll-reveal">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Investing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of investors building wealth through tokenized real estate
          </p>
          <Link to="/market">
            <Button size="lg" className="btn-soft text-lg px-12 py-6">
              <Shield className="mr-2 w-5 h-5" />
              Start Investing Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;