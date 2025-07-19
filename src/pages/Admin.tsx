import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Check, X, Pause, Play, Search, Filter, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const pendingProperties = [
    {
      id: 1,
      title: "Luxury Beachfront Villa",
      location: "Miami, FL",
      submittedBy: "john.doe@email.com",
      submittedDate: "2024-01-15",
      appraisedValue: 850000,
      tokenPrice: 85,
      status: "pending_review",
      documentsComplete: true,
    },
    {
      id: 2,
      title: "Historic Downtown Loft",
      location: "Chicago, IL",
      submittedBy: "jane.smith@email.com",
      submittedDate: "2024-01-14",
      appraisedValue: 380000,
      tokenPrice: 38,
      status: "pending_documents",
      documentsComplete: false,
    },
  ];

  const activeProperties = [
    {
      id: 3,
      title: "Modern Downtown Condo",
      location: "Austin, TX",
      tokensSold: 7500,
      totalTokens: 10000,
      totalRaised: 337500,
      status: "active",
      flaggedTransactions: 0,
    },
    {
      id: 4,
      title: "Victorian Family Home",
      location: "San Francisco, CA",
      tokensSold: 8200,
      totalTokens: 10000,
      totalRaised: 984000,
      status: "active",
      flaggedTransactions: 2,
    },
  ];

  const flaggedTransactions = [
    {
      id: 1,
      property: "Victorian Family Home",
      wallet: "0x1234...5678",
      amount: 50000,
      reason: "Large single purchase",
      date: "2024-01-15",
      status: "pending",
    },
    {
      id: 2,
      property: "Modern Downtown Condo",
      wallet: "0x9876...4321",
      amount: 25000,
      reason: "Multiple rapid transactions",
      date: "2024-01-14",
      status: "reviewing",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold gradient-text">
              PropertyFlow Admin
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/market" className="text-muted-foreground hover:text-foreground transition-colors">Marketplace</Link>
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>
              <Link to="/admin" className="text-primary font-medium">Admin Panel</Link>
            </nav>
            <Button className="btn-glow">admin@propertyflow.com</Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Manage property listings, approve submissions, and monitor platform activity
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold">12</div>
              <p className="text-sm text-muted-foreground">Active Properties</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-muted-foreground">Pending Review</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold">$2.1M</div>
              <p className="text-sm text-muted-foreground">Total Raised</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-warning">5</div>
              <p className="text-sm text-muted-foreground">Flagged Transactions</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">Pending Approvals</TabsTrigger>
            <TabsTrigger value="active">Active Properties</TabsTrigger>
            <TabsTrigger value="flagged">Flagged Transactions</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Property Submissions</h3>
              <div className="flex space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search submissions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending_review">Pending Review</SelectItem>
                    <SelectItem value="pending_documents">Missing Documents</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {pendingProperties.map((property) => (
                <Card key={property.id} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <h4 className="text-xl font-semibold">{property.title}</h4>
                          <Badge variant={property.status === 'pending_review' ? 'default' : 'secondary'}>
                            {property.status.replace('_', ' ')}
                          </Badge>
                          {!property.documentsComplete && (
                            <Badge variant="destructive">
                              <AlertTriangle className="w-3 h-3 mr-1" />
                              Incomplete Docs
                            </Badge>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="font-medium">{property.location}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Appraised Value</p>
                            <p className="font-medium">${property.appraisedValue.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Token Price</p>
                            <p className="font-medium">${property.tokenPrice}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Submitted</p>
                            <p className="font-medium">{property.submittedDate}</p>
                          </div>
                        </div>

                        <div className="text-sm text-muted-foreground">
                          Submitted by: {property.submittedBy}
                        </div>
                      </div>

                      <div className="flex space-x-2 ml-6">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                        <Button variant="default" size="sm" className="bg-success hover:bg-success/90">
                          <Check className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button variant="destructive" size="sm">
                          <X className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="active" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Active Properties</h3>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="raised">Total Raised</SelectItem>
                  <SelectItem value="sold">Tokens Sold</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {activeProperties.map((property) => (
                <Card key={property.id} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <h4 className="text-xl font-semibold">{property.title}</h4>
                          <Badge variant="default">{property.status}</Badge>
                          {property.flaggedTransactions > 0 && (
                            <Badge variant="destructive">
                              {property.flaggedTransactions} Flagged
                            </Badge>
                          )}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="font-medium">{property.location}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Tokens Sold</p>
                            <p className="font-medium">{property.tokensSold.toLocaleString()}/{property.totalTokens.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Total Raised</p>
                            <p className="font-medium">${property.totalRaised.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Progress</p>
                            <p className="font-medium">{((property.tokensSold / property.totalTokens) * 100).toFixed(1)}%</p>
                          </div>
                        </div>

                        <div className="w-full bg-muted rounded-full h-2 mb-4">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${(property.tokensSold / property.totalTokens) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex space-x-2 ml-6">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Pause className="w-4 h-4 mr-2" />
                          Pause
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="flagged" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Flagged Transactions</h3>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="reviewing">Under Review</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {flaggedTransactions.map((transaction) => (
                <Card key={transaction.id} className="glass-card border-warning/50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <AlertTriangle className="w-5 h-5 text-warning" />
                          <h4 className="text-lg font-semibold">{transaction.property}</h4>
                          <Badge variant={transaction.status === 'pending' ? 'destructive' : 'secondary'}>
                            {transaction.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Wallet Address</p>
                            <p className="font-medium font-mono">{transaction.wallet}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Transaction Amount</p>
                            <p className="font-medium">${transaction.amount.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Flag Reason</p>
                            <p className="font-medium">{transaction.reason}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Date</p>
                            <p className="font-medium">{transaction.date}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2 ml-6">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Investigate
                        </Button>
                        <Button variant="default" size="sm" className="bg-success hover:bg-success/90">
                          <Check className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button variant="destructive" size="sm">
                          <X className="w-4 h-4 mr-2" />
                          Block
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;