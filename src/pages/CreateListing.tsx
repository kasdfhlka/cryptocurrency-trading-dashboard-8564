import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Home, DollarSign, FileText, Wallet, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CreateListing = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Property Details", icon: Home },
    { id: 2, title: "Tokenization", icon: DollarSign },
    { id: 3, title: "Documents", icon: FileText },
    { id: 4, title: "Review & Submit", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold gradient-text">
              PropertyFlow
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/market" className="text-muted-foreground hover:text-foreground transition-all duration-200 interactive">Marketplace</Link>
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-all duration-200 interactive">Dashboard</Link>
              <Link to="/create" className="text-primary font-medium">List Property</Link>
            </nav>
            <Button className="btn-soft">Connect Wallet</Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">List Your Property</h1>
          <p className="text-xl text-muted-foreground">
            Tokenize your real estate and raise capital through fractional ownership
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              
              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                    isCompleted ? 'bg-primary border-primary text-primary-foreground' :
                    isActive ? 'border-primary text-primary' :
                    'border-muted text-muted-foreground'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className={`font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-20 h-0.5 mx-8 ${
                      isCompleted ? 'bg-primary' : 'bg-border'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card">
          <CardContent className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Property Information</h3>
                  <p className="text-muted-foreground mb-6">
                    Provide detailed information about your property
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Property Title</Label>
                      <Input id="title" placeholder="Modern Downtown Condo" />
                    </div>
                    <div>
                      <Label htmlFor="address">Full Address</Label>
                      <Input id="address" placeholder="123 Main St, Austin, TX 78701" />
                    </div>
                    <div>
                      <Label htmlFor="type">Property Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="condo">Condominium</SelectItem>
                          <SelectItem value="house">Single Family Home</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="bedrooms">Bedrooms</Label>
                        <Input id="bedrooms" type="number" placeholder="2" />
                      </div>
                      <div>
                        <Label htmlFor="bathrooms">Bathrooms</Label>
                        <Input id="bathrooms" type="number" placeholder="2" />
                      </div>
                      <div>
                        <Label htmlFor="sqft">Sq Ft</Label>
                        <Input id="sqft" type="number" placeholder="1200" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="yearBuilt">Year Built</Label>
                      <Input id="yearBuilt" type="number" placeholder="2019" />
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Describe your property's features, amenities, and unique selling points..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Property Images</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground mb-2">
                      Drag and drop images here, or click to browse
                    </p>
                    <Button variant="outline">Choose Files</Button>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Tokenization Setup</h3>
                  <p className="text-muted-foreground mb-6">
                    Configure how your property will be tokenized
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="appraisedValue">Appraised Value (USD)</Label>
                      <Input id="appraisedValue" type="number" placeholder="450000" />
                    </div>
                    <div>
                      <Label htmlFor="equityPercent">% of Equity to Tokenize</Label>
                      <Input id="equityPercent" type="number" placeholder="75" max="100" />
                    </div>
                    <div>
                      <Label htmlFor="monthlyRent">Monthly Rental Income</Label>
                      <Input id="monthlyRent" type="number" placeholder="2700" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="totalTokens">Total Tokens to Issue</Label>
                      <Input id="totalTokens" type="number" placeholder="10000" />
                    </div>
                    <div>
                      <Label htmlFor="tokenPrice">Price per Token (USD)</Label>
                      <Input id="tokenPrice" type="number" placeholder="33.75" />
                    </div>
                    <div>
                      <Label htmlFor="minInvestment">Minimum Investment</Label>
                      <Input id="minInvestment" type="number" placeholder="100" />
                    </div>
                  </div>
                </div>

                <Card className="bg-muted/30 border-none">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Tokenization Summary</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Total Raise Amount</p>
                        <p className="text-xl font-bold text-primary">$337,500</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expected Annual Yield</p>
                        <p className="text-xl font-bold text-success">7.2%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Required Documents</h3>
                  <p className="text-muted-foreground mb-6">
                    Upload the necessary legal and financial documents
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { title: "Property Deed/Title", required: true },
                    { title: "Recent Appraisal Report", required: true },
                    { title: "Property Tax Records", required: true },
                    { title: "Rental Agreement (if applicable)", required: false },
                    { title: "Insurance Documentation", required: true },
                    { title: "Financial Statements", required: true },
                  ].map((doc, index) => (
                    <div key={index} className="border border-border rounded-lg p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{doc.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {doc.required ? "Required" : "Optional"}
                          </p>
                        </div>
                        <Button variant="outline">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Review & Submit</h3>
                  <p className="text-muted-foreground mb-6">
                    Review your listing details before submission
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-muted/30 border-none">
                    <CardHeader>
                      <CardTitle className="text-lg">Property Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span>Property Value</span>
                        <span className="font-medium">$450,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Equity to Tokenize</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Tokens</span>
                        <span className="font-medium">10,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Token Price</span>
                        <span className="font-medium">$33.75</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/30 border-none">
                    <CardHeader>
                      <CardTitle className="text-lg">Financial Projections</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span>Total Raise</span>
                        <span className="font-medium text-primary">$337,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Annual Yield</span>
                        <span className="font-medium text-success">7.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monthly Rent</span>
                        <span className="font-medium">$2,700</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Platform Fee</span>
                        <span className="font-medium">2.5%</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Wallet className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary">Next Steps</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        After submission, our team will review your property and documents. 
                        Upon approval, your tokens will be minted on Solana and listed in the marketplace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-border">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              <Button
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                className="btn-soft"
              >
                {currentStep === 4 ? "Submit for Review" : "Next Step"}
              </Button>
            </div>
          </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;