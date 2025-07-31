import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const topProducts = [
  {
    name: "Premium Package",
    sales: 1234,
    revenue: "$45,231",
    progress: 85,
  },
  {
    name: "Standard Package",
    sales: 987,
    revenue: "$32,145",
    progress: 70,
  },
  {
    name: "Basic Package",
    sales: 654,
    revenue: "$18,976",
    progress: 45,
  },
  {
    name: "Enterprise Package",
    sales: 321,
    revenue: "$28,432",
    progress: 30,
  },
]

export function TopProducts() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>Best performing products this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {topProducts.map((product, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                </div>
                <p className="text-sm font-medium">{product.revenue}</p>
              </div>
              <Progress value={product.progress} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
