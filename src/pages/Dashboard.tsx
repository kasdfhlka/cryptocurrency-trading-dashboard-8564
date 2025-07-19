import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, DollarSign, Home, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const holdings = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      location: "Austin, TX",
      tokens: 250,
      tokenPrice: 45,
      currentValue: 48,
      monthlyIncome: 67.5,
      totalIncome: 810,
      appreciation: 6.7,
    },
    {
      id: 2,
      title: "Victorian Family Home",
      location: "San Francisco, CA",
      tokens: 100,
      tokenPrice: 120,
      currentValue: 118,
      monthlyIncome: 40,
      totalIncome: 480,
      appreciation: -1.7,
    },
  ];

  const transactions = [
    {
      id: 1,
      type: "buy",
      property: "Modern Downtown Condo",
      tokens: 50,
      price: 45,
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: 2,
      type: "income",
      property: "Victorian Family Home",
      amount: 40,
      date: "2024-01-01",
      status: "completed",
    },
    {
      id: 3,
      type: "sell",
      property: "Modern Downtown Condo",
      tokens: 25,
      price: 48,
      date: "2024-01-10",
      status: "pending",
    },
  ];

  const totalValue = holdings.reduce((sum, holding) => sum + (holding.tokens * holding.currentValue), 0);
  const totalInvested = holdings.reduce((sum, holding) => sum + (holding.tokens * holding.tokenPrice), 0);
  const totalMonthlyIncome = holdings.reduce((sum, holding) => sum + holding.monthlyIncome, 0);
  const totalAppreciation = ((totalValue - totalInvested) / totalInvested) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold gradient-text">
              PropertyFlow
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/market" className="text-muted-foreground hover:text-foreground transition-colors">Marketplace</Link>
              <Link to="/dashboard" className="text-primary font-medium">Dashboard</Link>
              <Link to="/create" className="text-muted-foreground hover:text-foreground transition-colors">List Property</Link>
            </nav>
            <Button className="btn-glow">0x1234...5678</Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Portfolio Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Track your real estate token investments and earnings
          </p>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +${(totalValue - totalInvested).toLocaleString()} from investment
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalInvested.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Across {holdings.length} properties
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">${totalMonthlyIncome.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                From rental yields
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Return</CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${totalAppreciation >= 0 ? 'text-success' : 'text-destructive'}`}>
                {totalAppreciation >= 0 ? '+' : ''}{totalAppreciation.toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Since investment
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="holdings" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="holdings">My Holdings</TabsTrigger>
            <TabsTrigger value="transactions">Transaction History</TabsTrigger>
          </TabsList>

          <TabsContent value="holdings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {holdings.map((holding) => (
                <Card key={holding.id} className="property-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{holding.title}</CardTitle>
                        <p className="text-muted-foreground">{holding.location}</p>
                      </div>
                      <Badge variant={holding.appreciation >= 0 ? "default" : "destructive"}>
                        {holding.appreciation >= 0 ? '+' : ''}{holding.appreciation}%
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Tokens Owned</p>
                        <p className="text-xl font-bold">{holding.tokens}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Current Value</p>
                        <p className="text-xl font-bold">${(holding.tokens * holding.currentValue).toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Monthly Income</p>
                        <p className="text-lg font-semibold text-success">${holding.monthlyIncome}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Earned</p>
                        <p className="text-lg font-semibold">${holding.totalIncome}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Buy More
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Sell Tokens
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${
                          tx.type === 'buy' ? 'bg-primary/20 text-primary' :
                          tx.type === 'sell' ? 'bg-warning/20 text-warning' :
                          'bg-success/20 text-success'
                        }`}>
                          {tx.type === 'buy' ? <ArrowDownRight className="w-4 h-4" /> :
                           tx.type === 'sell' ? <ArrowUpRight className="w-4 h-4" /> :
                           <DollarSign className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-medium">
                            {tx.type === 'buy' ? 'Bought' : 
                             tx.type === 'sell' ? 'Sold' : 'Income from'} {tx.property}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {tx.tokens ? `${tx.tokens} tokens at $${tx.price}` : `$${tx.amount} rent income`}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{tx.date}</p>
                        <Badge variant={tx.status === 'completed' ? 'default' : 'secondary'}>
                          {tx.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;