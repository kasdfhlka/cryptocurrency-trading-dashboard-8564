import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, MapPin, Calendar, TrendingUp, DollarSign, Home, Users, Wallet } from "lucide-react";
import Header from "@/components/Header";

const PropertyDetail = () => {
  const { id } = useParams();
  const [tokenAmount, setTokenAmount] = useState([100]);

  // Mock property data
  const property = {
    id: 1,
    title: "Modern Downtown Condo",
    location: "Austin, TX",
    type: "Condominium",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
    appraisedValue: 450000,
    tokenPrice: 45,
    availableTokens: 2500,
    totalTokens: 10000,
    rentYield: 7.2,
    monthlyRent: 2700,
    yearBuilt: 2019,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    description: "A stunning modern condominium in the heart of downtown Austin, featuring floor-to-ceiling windows, premium finishes, and access to luxury amenities.",
  };

  const totalCost = tokenAmount[0] * property.tokenPrice;
  const monthlyIncome = (totalCost / property.appraisedValue) * property.monthlyRent;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Link to="/market" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-success text-success-foreground">
                  {property.rentYield}% Annual Yield
                </Badge>
              </div>
            </div>

            {/* Property Info */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-3xl mb-2">{property.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      {property.location}
                    </div>
                  </div>
                  <Badge variant="outline">{property.type}</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </CardHeader>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Property Details</TabsTrigger>
                <TabsTrigger value="financials">Financials</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <Home className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold">{property.bedrooms}</p>
                        <p className="text-sm text-muted-foreground">Bedrooms</p>
                      </div>
                      <div className="text-center">
                        <Home className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold">{property.bathrooms}</p>
                        <p className="text-sm text-muted-foreground">Bathrooms</p>
                      </div>
                      <div className="text-center">
                        <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold">{property.yearBuilt}</p>
                        <p className="text-sm text-muted-foreground">Year Built</p>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <p className="text-2xl font-bold">{property.sqft}</p>
                        <p className="text-sm text-muted-foreground">Sq Ft</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="financials" className="space-y-4">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Property Value</p>
                        <p className="text-2xl font-bold">${property.appraisedValue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Monthly Rent</p>
                        <p className="text-2xl font-bold">${property.monthlyRent.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Annual Yield</p>
                        <p className="text-2xl font-bold text-success">{property.rentYield}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Token Price</p>
                        <p className="text-2xl font-bold text-primary">${property.tokenPrice}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                        <span>Property Appraisal Report</span>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                      <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                        <span>Title Documents</span>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                      <div className="flex justify-between items-center p-4 border border-border rounded-lg">
                        <span>Rental Agreement</span>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Purchase Interface */}
          <div className="space-y-6">
            <Card className="glass-card sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="w-5 h-5 mr-2" />
                  Buy Tokens
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Available Tokens</span>
                    <span className="text-sm font-medium">{property.availableTokens.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{
                        width: `${((property.totalTokens - property.availableTokens) / property.totalTokens) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-4 block">
                    Number of Tokens: {tokenAmount[0]}
                  </label>
                  <Slider
                    value={tokenAmount}
                    onValueChange={setTokenAmount}
                    max={Math.min(1000, property.availableTokens)}
                    min={1}
                    step={1}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>1</span>
                    <span>{Math.min(1000, property.availableTokens)}</span>
                  </div>
                </div>

                <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
                  <div className="flex justify-between">
                    <span>Token Price</span>
                    <span>${property.tokenPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity</span>
                    <span>{tokenAmount[0]}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Cost</span>
                    <span>${totalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-success">
                    <span>Est. Monthly Income</span>
                    <span>${monthlyIncome.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full btn-soft" size="lg">
                  <Wallet className="w-4 h-4 mr-2" />
                  Buy Tokens
                </Button>

                <div className="text-xs text-muted-foreground text-center">
                  Powered by Solana blockchain. Transaction fees: ~$0.01
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;