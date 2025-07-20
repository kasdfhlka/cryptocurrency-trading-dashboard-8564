import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const properties = [
  {
    id: 1,
    title: "Modern Downtown Condo",
    location: "Austin, TX",
    type: "Condominium",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop",
    appraisedValue: 450000,
    tokenPrice: 45,
    availableTokens: 2500,
    totalTokens: 10000,
    rentYield: 7.2,
    price: "$45",
    isVerified: true,
    isNew: false,
  },
  {
    id: 2,
    title: "Victorian Family Home",
    location: "San Francisco, CA",
    type: "Single Family",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop",
    appraisedValue: 1200000,
    tokenPrice: 120,
    availableTokens: 3200,
    totalTokens: 10000,
    rentYield: 4.8,
    price: "$120",
    isVerified: true,
    isNew: true,
  },
  {
    id: 3,
    title: "Luxury Beachfront Villa",
    location: "Miami, FL",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=250&fit=crop",
    appraisedValue: 850000,
    tokenPrice: 85,
    availableTokens: 1800,
    totalTokens: 10000,
    rentYield: 6.5,
    price: "$85",
    isVerified: false,
    isNew: false,
  },
  {
    id: 4,
    title: "Urban Loft Studio",
    location: "Chicago, IL",
    type: "Loft",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop",
    appraisedValue: 320000,
    tokenPrice: 32,
    availableTokens: 4200,
    totalTokens: 10000,
    rentYield: 8.1,
    price: "$32",
    isVerified: true,
    isNew: true,
  },
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("yield");
  const [propertyType, setPropertyType] = useState("all");
  const [location, setLocation] = useState("all");

  // Filter and sort properties
  const filteredAndSortedProperties = useMemo(() => {
    let filtered = properties.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = propertyType === "all" || property.type.toLowerCase().includes(propertyType);
      const matchesLocation = location === "all" || property.location.toLowerCase().includes(location);
      
      return matchesSearch && matchesType && matchesLocation;
    });

    // Sort properties
    switch (sortBy) {
      case "yield":
        return filtered.sort((a, b) => b.rentYield - a.rentYield);
      case "price":
        return filtered.sort((a, b) => a.tokenPrice - b.tokenPrice);
      case "value":
        return filtered.sort((a, b) => b.appraisedValue - a.appraisedValue);
      case "available":
        return filtered.sort((a, b) => b.availableTokens - a.availableTokens);
      default:
        return filtered;
    }
  }, [searchTerm, sortBy, propertyType, location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Property Marketplace</h1>
          <p className="text-xl text-muted-foreground">
            Discover tokenized real estate opportunities with fractional ownership
          </p>
        </div>

        {/* Filters */}
        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yield">Highest Yield</SelectItem>
                <SelectItem value="price">Lowest Price</SelectItem>
                <SelectItem value="value">Property Value</SelectItem>
                <SelectItem value="available">Most Available</SelectItem>
              </SelectContent>
            </Select>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="condominium">Condominium</SelectItem>
                <SelectItem value="single family">Single Family</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="loft">Loft</SelectItem>
              </SelectContent>
            </Select>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="texas">Texas</SelectItem>
                <SelectItem value="california">California</SelectItem>
                <SelectItem value="florida">Florida</SelectItem>
                <SelectItem value="illinois">Illinois</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedProperties.map((property) => (
            <Card key={property.id} className="property-card group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge variant="secondary" className="bg-success text-success-foreground">
                    {property.rentYield}% Yield
                  </Badge>
                  {property.isVerified && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  {property.isNew && (
                    <Badge variant="outline" className="bg-warning/20 text-warning border-warning/50">
                      New
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {property.type}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{property.title}</CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {property.location}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Token Price</p>
                    <p className="text-2xl font-bold text-primary">{property.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Property Value</p>
                    <p className="text-lg font-semibold">${property.appraisedValue.toLocaleString()}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Available Tokens</span>
                    <span className="font-medium">{property.availableTokens.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${((property.totalTokens - property.availableTokens) / property.totalTokens) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{((property.totalTokens - property.availableTokens) / property.totalTokens * 100).toFixed(1)}% Sold</span>
                    <span>{property.totalTokens.toLocaleString()} Total</span>
                  </div>
                </div>

                <Link to={`/property/${property.id}`}>
                  <Button className="w-full btn-soft">
                    View Details & Buy Tokens
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-soft">
            Load More Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;