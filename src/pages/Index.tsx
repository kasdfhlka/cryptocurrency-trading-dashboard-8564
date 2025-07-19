import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Coins, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">PropertyFlow</div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/market" className="text-muted-foreground hover:text-foreground transition-colors">Marketplace</Link>
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/create" className="text-muted-foreground hover:text-foreground transition-colors">List Property</Link>
            </nav>
            <Button className="btn-glow">Connect Wallet</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                  <Button size="lg" className="btn-glow text-lg px-8 py-6">
                    Browse Properties
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/create">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
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
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="token"></div>
            <div className="token"></div>
            <div className="token"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
              >
                <Card className="property-card text-center h-full">
                  <CardContent className="p-8">
                    <feature.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Investing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of investors building wealth through tokenized real estate
          </p>
          <Link to="/market">
            <Button size="lg" className="btn-glow text-lg px-12 py-6">
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